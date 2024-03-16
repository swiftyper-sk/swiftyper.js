import debouncer from "./utils/debouncer";
import eventEmitter from "./utils/eventEmitter";
import EventEmitter from "events";
import * as EmailValidator from 'email-validator';
import Swiftyper from 'swiftyper-node';

export default class emailValidator {
  constructor(options) {
    this.triggers = new EventEmitter();
    this.service = 'utils';
    this.options = {};
    this.cache = {};

    this.configure(options);
    this._init();
  }

  configure(options) {
    const {
      selectors = {
        email: null, // Element obsahujúci email
      },
      endpoint = 'api.swiftyper.sk', // Adresa na ktorú je požiadavka smerovaná
      apiKey, // Prístupový API kľúč
      events = ['input', 'focus'], // Typy udalostí na ktoré bude reagovať overovanie
      debounce = 300, // Minimálna pauza pred začatím vyhľadávania cez API, počas zadávania výrazu sa časovač vynuluje
    } = Object.assign(this.options, options);

    this.options.selectors = selectors;
    this.options.endpoint = endpoint;
    this.options.apiKey = apiKey;
    this.options.events = events;
    this.options.debounce = debounce;

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
    }

    return this;
  }

  async _start(email, field) {
    await this.validateEmail(email, field);
  }

  async _createValidator(field) {
    const { apiKey, endpoint: host } = this.options;

    const email = field.value;

    if (this.cache[email]) {
      this.triggers.emit('analysis', this.cache[email]);
      return;
    }

    if (this.swiftyperClient && this.swiftyperClient._lastRequest) {
      this.swiftyperClient._lastRequest.destroy();
    }

    const swiftyperClient = new Swiftyper(apiKey, {
      host
    });

    this.swiftyperClient = swiftyperClient;

    try {
      this.analysis = await swiftyperClient.emailUtil.validate({
        email,
      });

      this.triggers.emit('analysis', this.analysis);
      this.cache[email] = this.analysis;

      eventEmitter(field, {analysis: this.analysis}, "analysis");
    } catch (error) {
      this.analysis = null;
      this.triggers.emit('error', {error});

      if (error.code === 'over_query_limit') {
        this.triggers.emit('limit', {error});
      }
    }
  }

  async _compose(field) {
    const email = field.value;

    this._start(email, field);
  }

  async validateEmail(email, field) {
    const isValid = EmailValidator.validate(email);

    this.triggers.emit('analysis', {email, syntax: isValid});

    if (isValid) {
      await this._createValidator(field);
    }
  }

  _init() {
    this.hook = debouncer((event) => {
      this._compose(event.target);
    }, this.options.debounce);

    this.options.events.forEach((eventType) => {
      for (const [key, field] of Object.entries(this._fields)) {
        field.addEventListener(eventType, this.hook);
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
        field.removeEventListener(eventType, this.hook);
      }
    });
  }
}
