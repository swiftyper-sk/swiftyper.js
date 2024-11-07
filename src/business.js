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
import isAutofilled from "./utils/isAutofilled";

export default class business {
  constructor(options) {
    this.triggers = new EventEmitter();
    this.service = 'business';
    this.options = {};

    this.configure(options);
    this._init();
  }

  configure(options) {
    const {
      selectors = {
        name: null, // Element obsahujúci názov subjektu
        cin: null, // Element obsahujúci IČO
        tin: null, // Element obsahujúci DIČ
        vatin: null, // Element obsahujúci IČ DPH
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
        // Zoznam polí pre ktoré sa budú zobrazovať návrhy vyhľadávania, hodnoty môžu byť 'name' a 'cin'
        'name',
        'cin',
      ],
      endpoint = 'api.swiftyper.sk', // Adresa na ktorú je požiadavka smerovaná
      logo = true, // Nastavenie zobrazenie loga (funguje iba pre platené tarify)
      nextFocus = true, // Nastavenie focus na ďalšie pole formulára po výbere adresy
      apiKey, // Prístupový API kľúč
      highlight = true, // Nastavenie zobrazenia zvýraznenia zhodnej časti s dopytom vyhľadávania
      showNoResults = false, // Zobrazenie upozornenia v prípade nenájdených výsledkov
      events = ['input'], // Typy udalostí na ktoré bude reagovať vyhľadávanie
      country = 'SK', // Krajina v ktorej právnicke osoby bude možné vyhľadať
      active, // Filtrovanie existujúcich (nezaniknutých) subjektov
      limit = 7, // Počet zobrazených výsledkov. Hodnota môže byť v rozmedzí 1 až 20
      debounce = 300, // Minimálna pauza pred začatím vyhľadávania cez API, počas zadávania výrazu sa časovač vynuluje
      minlength = 1, // Minimálna dĺžka výrazu na začatie vyhľadávania
      theme = 'modern-light', // Téma rozšírenia, môže byť 'modern-light' (predvolené), 'modern-dark' alebo 'classic'
      htmlAutocomplete = false, // Nastavenie HTML atribútu "autocomplete", predvolene pole nastavujeme na [autocomplete=off]
      itemTemplate = (suggestion, element) => {
        element.style = "display: flex; flex-direction: column;";

        element.innerHTML = `
        <span style="display: flex;flex-direction: row;justify-content: space-between">
          <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;${suggestion.terminated_on ? 'text-decoration: line-through' : null}">
              ${this.options.highlight ? suggestion.highlight : suggestion.name}
          </span>
          <span style="display: flex; align-items: center; font-size: 13px; font-weight: 500; color: rgba(0,0,0,.7);">
              ${suggestion.cin}
          </span>
        </span>
        <span style="display: flex; align-items: center; font-size: 13px; font-weight: 200; color: rgba(0,0,0,.5);">
            <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden">${suggestion.formatted_address}</span>
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
    this.options.active = active;
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
    const dataFeedback = { query, results: results };

    if (this.options.showNoResults || Array.from(results || []).length) {
      generateList(this, dataFeedback, field);
    }

    if (this.options.showNoResults) {
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
    const { apiKey, endpoint: host, country, active, limit } = this.options;

    if (this.swiftyperClient && this.swiftyperClient._lastRequest) {
      this.swiftyperClient._lastRequest.destroy();
    }

    const swiftyperClient = new Swiftyper(apiKey, {
      host
    });

    this.swiftyperClient = swiftyperClient;

    const query = field.value;

    let segment = null, data = {};
    for(let [key, _field] of Object.entries(this._fields)) {
      if (_field.isEqualNode(field)) {
        segment = key;
      }

      data[key] = _field.value;
    }

    const createAutocompleteDataset = async () => {
      switch (segment) {
        case 'name':
          return await swiftyperClient.business.query({
            query,
            country,
            active,
            limit,
          });
        case 'cin':
          return await swiftyperClient.business.identifier({
            query,
            country,
            active,
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
    if (isAutofilled(field)) {
      return;
    }

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
