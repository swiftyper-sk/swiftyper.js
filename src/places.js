import inputComponent from "./components/Input";
import {closeAllLists, generateList} from "./controllers/listController";
import {navigate} from "./controllers/navigationController";
import debouncer from "./utils/debouncer";
import eventEmitter from "./utils/eventEmitter";
import EventEmitter from "events";
import Swiftyper from 'swiftyper-node';
import {insertCss} from "insert-css";
import themes from "./themes";
import clearStyle from "./utils/clearStyle";

export default class places {
  constructor(options) {
    this.triggers = new EventEmitter();
    this.service = 'places';
    this.options = {};

    this.configure(options);
    this._init();
  }

  configure(options) {
    const {
      selectors = {
        address: null, // Element obsahujúci adresu
        street: null, // Element obsahujúci ulicu a číslo
        streetName: null, // Element obsahujúci iba názov ulice
        streetNumber: null, // Element obsahujúci iba súpisné číslo
        buildingNumber: null, // Element obsahujúci iba orientačné číslo
        streetNumberParts: null, // Element obsahujúci súpisné a orientačné číslo
        municipality: null, // Element obsahujúci obec
        postalCode: null, // Element obsahujúci PSČ
        country: null, // Element obsahujúci krajinu
      },
      suggestions = [
        // Zoznam polí pre ktoré sa budú zobrazovať návrhy vyhľadávania, hodnoty môžu byť 'address', 'street', 'streetName', 'municipality' a 'postalCode'
        'address',
        'street',
        'streetName',
        'municipality',
        'postalCode',
      ],
      endpoint = 'api.swiftyper.sk', // Adresa na ktorú je požiadavka smerovaná
      logo = true, // Nastavenie zobrazenie loga (funguje iba pre platené tarify)
      nextFocus = true, // Nastavenie focus na ďalšie pole formulára po výbere adresy
      apiKey, // Prístupový API kľúč
      highlight = true, // Nastavenie zobrazenia zvýraznenia zhodnej časti s dopytom vyhľadávania
      showNoResults = false, // Zobrazenie upozornenia v prípade nenájdených výsledkov
      events = ['input'], // Typy udalostí na ktoré bude reagovať vyhľadávanie
      country = ['CZ', 'SK', 'PL'], // Krajiny ktorých adresy bude možné vyhľadať
      context = [], // Nastavenie oblastí pre vyhľadávanie (kľúč place_id). Výsledky vyhľadávania môžete odfiltrovať pre konkrétny kraj, okres alebo obec
      contextType = 'preference', // Nastavenie typu vyhľadávacieho kontextu. Použite 'strict' ak chcete vyhľadávať adresu s ďalšími zadanými poliami (napr. mesto, psč) alebo 'preference' pokiaľ chete adresy zo zadaného miesta uprednostniť
      aroundLatLng, // Prispôsobenie výsledkov vyhľadávania zadanej lokalite vo formáte 'latitude,longitude' napr. 49.1992988,18.8211994
      aroundLatLngViaIP = true, // Prispôsobenie výsledkov vyhľadávania aktuálnej lokalite používateľa
      limit = 7, // Počet zobrazených výsledkov. Hodnota môže byť v rozmedzí 1 až 20
      debounce = 300, // Minimálna pauza pred začatím vyhľadávania cez API, počas zadávania výrazu sa časovač vynuluje
      minlength = 1, // Minimálna dĺžka výrazu na začatie vyhľadávania
      theme = 'modern-light', // Téma rozšírenia, môže byť 'modern-light' (predvolené), 'modern-dark' alebo 'classic'
      htmlAutocomplete = false, // Nastavenie HTML atribútu "autocomplete", predvolene pole nastavujeme na [autocomplete=off]
      itemTemplate = (suggestion, element, textResolver) => {
        element.innerHTML = `
          <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
              ${this.options.highlight ? suggestion.highlight : textResolver(suggestion)}
          </span>`;
      }, // Funkcia na naformátovanie položky vyhľadávania
    } = Object.assign(this.options, options);

    this.options.selectors = selectors;
    this.options.suggestions = suggestions;
    this.options.endpoint = endpoint;
    this.options.logo = logo;
    this.options.nextFocus = nextFocus;
    this.options.apiKey = apiKey;
    this.options.highlight = highlight;
    this.options.showNoResults = showNoResults;
    this.options.events = events;
    this.options.country = country;
    this.options.context = context;
    this.options.contextType = contextType;
    this.options.aroundLatLng = aroundLatLng;
    this.options.aroundLatLngViaIP = aroundLatLngViaIP;
    this.options.limit = limit;
    this.options.debounce = debounce;
    this.options.minlength = minlength;
    this.options.theme = theme;
    this.options.htmlAutocomplete = htmlAutocomplete;
    this.options.itemTemplate = itemTemplate;

    this._fields = {};

    for (const [key, selector] of Object.entries(this.options.selectors)) {
      if (typeof selector === 'string') {
        this._fields[key] = document.querySelector(selector);
      } else if (typeof selector === 'function') {
        this._fields[key] = selector();
      } else {
        this._fields[key] = selector;
      }

      if (!(this._fields[key] instanceof HTMLInputElement)) {
        throw new Error(`Element ${key} nie je input.`);
      }

      this._fields[key].parentNode.classList.add('swiftyper_wrapper');
      this._fields[key].autocomplete = this.options.htmlAutocomplete ? 'on' : 'off';
    }

    this._setTheme();

    return this;
  }

  _setTheme() {
    clearStyle(this._style);
    this._style = insertCss(themes[this.options.theme], { prepend: true });
  }

  _start(query, field) {
    const results = this.suggestions;
    const dataFeedback = { query, results };

    const total = Array.from(results || []).length;

    if (this.options.showNoResults || total) {
      generateList(this, dataFeedback, field);
    }

    if (this.options.showNoResults && !total) {
      const result = document.createElement("li");
      result.setAttribute("class", "no_result");
      result.setAttribute("tabindex", "1");
      result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.5);">Žiadne výsledky pre výraz "${dataFeedback.query}"</span>`;
      document.querySelector(`#swiftyper_list`).appendChild(result);

      return;
    }

    navigate(this, dataFeedback, field);

    document.addEventListener("click", (event) => closeAllLists(this, event.target, field));
  }

  async _createAutocompleteSource(field) {
    const { apiKey, endpoint: host, country, limit, context, contextType, aroundLatLng: around_latlng, aroundLatLngViaIP: around_latlng_via_ip } = this.options;

    if (this.swiftyperClient && this.swiftyperClient._lastRequest) {
      this.swiftyperClient._lastRequest.destroy();
    }

    const swiftyperClient = new Swiftyper(apiKey, {
      host
    });

    this.swiftyperClient = swiftyperClient;

    const query = field.value;

    let segment = null,
      data = {};

    for(let [key, _field] of Object.entries(this._fields)) {
      if (_field.isEqualNode(field)) {
        segment = key;
      }

      data[key] = _field.value;
    }

    const {
      municipality,
      postalCode: postal_code
    } = data;

    const createAutocompleteDataset = async () => {
      switch (segment) {
        case 'street':
        case 'streetName':
        case 'address':
          return await swiftyperClient.places.query({
            query,
            postal_code,
            municipality,
            country,
            context,
            contextType,
            around_latlng,
            around_latlng_via_ip,
            limit,
          });
        case 'municipality':
          return await swiftyperClient.places.municipality({
            query,
            postal_code,
            country,
            context,
            contextType,
            around_latlng,
            around_latlng_via_ip,
            limit,
          });
        case 'postalCode':
          return await swiftyperClient.places.postal({
            query,
            municipality,
            country,
            context,
            contextType,
            around_latlng,
            around_latlng_via_ip,
            limit,
          });
      }
    };

    try {
      this.suggestions = await createAutocompleteDataset();

      this.triggers.emit('suggestions', {suggestions: this.suggestions});

      eventEmitter(field, {suggestions: this.suggestions}, "suggestions");
    } catch (error) {
        this.suggestions = null;
        this.triggers.emit('error', {error});

        if (error.code === 'over_query_limit') {
          this.triggers.emit('limit', {error});
        }
    }
  }

  async _compose(field) {
    const query = field.value;

    if (query.length >= this.options.minlength) {
      await this._createAutocompleteSource(field);
      closeAllLists(this, undefined, field);
      this._start(query, field);
    } else {
      closeAllLists(this, undefined, field);
    }
  }

  _init() {
    inputComponent(this);

    this.hook = debouncer((event) => {
      this._compose(event.target);
    }, this.options.debounce);

    this.options.events.forEach((eventType) => {
      for (const [key, field] of Object.entries(this._fields)) {
        field.removeEventListener(eventType, this.hook);

        if (this.options.suggestions.includes(key)) {
          field.addEventListener(eventType, this.hook);
        }
      }
    });
  }

  on(type, listener) {
    this.triggers.on(type, listener);

    return this;
  }

  destroy() {
    this.options.events.forEach((eventType) => {
      for (const field of Object.values(this._fields)) {
        field.parentNode.classList.remove('swiftyper_wrapper');
        field.removeEventListener(eventType, this.hook);
      }
    });
  }
}
