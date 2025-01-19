(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.swiftyper = factory());
})(this, (function () { 'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var inputComponent = (function (config) {
    for (var _i = 0, _Object$values = Object.values(config._fields); _i < _Object$values.length; _i++) {
      var field = _Object$values[_i];
      field.setAttribute("role", "combobox");
      field.setAttribute("aria-haspopup", true);
      field.setAttribute("aria-expanded", false);
      field.setAttribute("aria-controls", 'swiftyper_list');
      field.setAttribute("aria-autocomplete", "both");
    }
  });

  var createList = (function (field) {
    var list = document.createElement('ul');
    list.setAttribute("id", 'swiftyper_list');
    list.setAttribute("aria-label", 'Výsledky vyhľadávania');
    list.setAttribute("class", 'swiftyper_list');
    list.setAttribute("role", "listbox");
    list.setAttribute("tabindex", "-1");
    field.insertAdjacentElement('afterend', list);
    return list;
  });

  var textResolver = (function (suggestion) {
    if (suggestion.object === 'address') {
      return suggestion.formatted_address;
    }
    if (suggestion.object === 'street') {
      return suggestion.formatted_street;
    }
    if (suggestion.object === 'municipality' || suggestion.object === 'postal_code') {
      return suggestion[suggestion.object];
    }
    if (suggestion.object === 'business') {
      return suggestion.name;
    }
  });

  var createItem = (function (item, index, config) {
    var result = document.createElement('li');
    result.setAttribute("id", "swiftyper_result_".concat(index));
    result.setAttribute("class", 'swiftyper_result');
    result.setAttribute("role", "option");
    if (config.options.itemTemplate) {
      config.options.itemTemplate(item, result, textResolver);
    }
    return result;
  });

  var swiftyperLogo = "<svg version=\"1.1\" height=\"17\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 116 14.1\" style=\"enable-background:new 0 0 116 14.1;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{fill:#FFFFFF;}\r\n\t.st1{fill:#252C61;}\r\n\t.st2{enable-background:new    ;}\r\n\t.st3{fill:#fa0f00;}\r\n</style>\r\n<g>\r\n\t<g>\r\n\t\t<path class=\"st1\" d=\"M4.8,9.2c0,0.6-0.2,1.1-0.7,1.5S3,11.2,2.2,11.2s-1.4-0.1-2-0.4V9.7c0.3,0.2,0.7,0.3,1,0.4\r\n\t\t\tc0.4,0.1,0.7,0.1,1,0.1c0.5,0,0.8-0.1,1-0.3s0.3-0.4,0.3-0.7S3.4,8.7,3.2,8.5c0-0.1-0.4-0.3-1-0.6C1.5,7.7,1.1,7.4,0.8,7\r\n\t\t\tC0.6,6.7,0.4,6.3,0.4,5.8c0-0.6,0.2-1,0.6-1.4c0.4-0.3,1-0.5,1.7-0.5S4,4,4.7,4.3l-0.3,1C3.7,5.1,3.2,4.9,2.7,4.9\r\n\t\t\tC2.3,4.9,2,5,1.9,5.2C1.7,5.3,1.6,5.6,1.6,5.8c0,0.2,0,0.3,0.1,0.5c0.1,0.1,0.2,0.3,0.4,0.4s0.5,0.3,1,0.5S4,7.6,4.2,7.8\r\n\t\t\tC4.4,8,4.6,8.2,4.7,8.4C4.8,8.6,4.8,8.8,4.8,9.2L4.8,9.2z M8.4,11.2c-0.8,0-1.5-0.2-1.9-0.7C6,10,5.8,9.3,5.8,8.5\r\n\t\t\tc0-0.9,0.2-1.6,0.6-2c0.4-0.5,1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.7,0.6s0.6,1,0.6,1.8v0.6H6.9c0,0.5,0.2,0.9,0.4,1.2\r\n\t\t\tc0.3,0.3,0.6,0.4,1.1,0.4c0.3,0,0.6,0,0.9-0.1c0.3-0.1,0.6-0.2,0.9-0.3v0.9c-0.3,0.1-0.5,0.2-0.8,0.3C9,11.1,8.7,11.2,8.4,11.2\r\n\t\t\tL8.4,11.2z M15.1,11.1l-0.2-0.7l0,0c-0.3,0.3-0.5,0.5-0.8,0.7c-0.3,0.1-0.6,0.2-1,0.2c-0.5,0-0.9-0.1-1.2-0.4\r\n\t\t\tc-0.3-0.3-0.4-0.7-0.4-1.2s0.2-1,0.6-1.2s1-0.4,1.9-0.5h0.9V7.5c0-0.3-0.1-0.6-0.2-0.8c-0.2-0.2-0.4-0.3-0.7-0.3s-0.5,0-0.8,0.1\r\n\t\t\tc-0.2,0.1-0.5,0.2-0.7,0.3L12.1,6c0.3-0.2,0.6-0.3,0.9-0.3c0.3-0.1,0.6-0.1,1-0.1c0.7,0,1.2,0.1,1.5,0.4S16,6.8,16,7.4V11h-0.9\r\n\t\t\tV11.1z M20.2,5.7c0.2,0,0.4,0,0.6,0l-0.1,1.1c-0.2,0-0.3-0.1-0.5-0.1c-0.5,0-0.8,0.1-1.1,0.4c-0.3,0.3-0.4,0.7-0.4,1.1V11h-1.1\r\n\t\t\tV5.8h0.9l0.1,0.9h0.1c0.2-0.3,0.4-0.6,0.7-0.8C19.5,5.8,19.8,5.7,20.2,5.7L20.2,5.7L20.2,5.7z M23.8,11.2c-0.8,0-1.4-0.2-1.8-0.7\r\n\t\t\ts-0.6-1.1-0.6-2s0.2-1.6,0.7-2.1s1.1-0.7,1.9-0.7c0.6,0,1.1,0.1,1.5,0.3l-0.3,0.9c-0.5-0.2-0.9-0.3-1.2-0.3\r\n\t\t\tc-0.9,0-1.4,0.6-1.4,1.8c0,0.6,0.1,1,0.3,1.3c0.2,0.3,0.6,0.4,1,0.4c0.5,0,1-0.1,1.4-0.4v1c-0.2,0.1-0.4,0.2-0.6,0.3\r\n\t\t\tC24.4,11.1,24.1,11.2,23.8,11.2L23.8,11.2z M31.3,11.1h-1.1V7.8c0-0.4-0.1-0.7-0.2-0.9c-0.2-0.2-0.4-0.3-0.8-0.3\r\n\t\t\tc-0.5,0-0.8,0.1-1,0.4s-0.3,0.8-0.3,1.4V11h-1.1V3.6h1.1v1.9c0,0.3,0,0.6-0.1,1h0.1c0.2-0.3,0.4-0.5,0.6-0.6\r\n\t\t\tc0.3-0.1,0.6-0.2,1-0.2c1.3,0,1.9,0.6,1.9,1.9L31.3,11.1L31.3,11.1L31.3,11.1z M38.1,5.7c0.7,0,1.2,0.2,1.5,0.7\r\n\t\t\tc0.4,0.5,0.6,1.2,0.6,2c0,0.9-0.2,1.5-0.6,2c-0.4,0.5-0.9,0.7-1.6,0.7c-0.7,0-1.2-0.2-1.6-0.7h-0.1L36.1,11h-0.8V3.6h1.1v1.8V6\r\n\t\t\tv0.5l0,0C36.9,5.9,37.4,5.7,38.1,5.7L38.1,5.7z M40.7,5.8h1.2l1.1,3c0.2,0.4,0.3,0.8,0.3,1.2l0,0c0-0.2,0.1-0.4,0.2-0.6\r\n\t\t\tC43.6,9.1,44,8,44.7,5.8H46l-2.3,6c-0.4,1.1-1.1,1.7-2.1,1.7c-0.2,0-0.5,0-0.7-0.1v-0.9c0.2,0,0.4,0.1,0.6,0.1\r\n\t\t\tc0.5,0,0.9-0.3,1.1-0.9l0.2-0.5L40.7,5.8L40.7,5.8L40.7,5.8z M37.8,6.6c-0.5,0-0.8,0.1-1,0.4s-0.3,0.7-0.3,1.3v0.1\r\n\t\t\tc0,0.6,0.1,1.1,0.3,1.4s0.5,0.4,1,0.4c0.4,0,0.7-0.2,0.9-0.5C38.9,9.5,39,9,39,8.4C39,7.2,38.6,6.6,37.8,6.6L37.8,6.6z M13.4,10.3\r\n\t\t\tc0.4,0,0.7-0.1,1-0.3c0.2-0.2,0.4-0.6,0.4-1V8.5h-0.7c-0.5,0-0.9,0.1-1.2,0.3c-0.2,0.2-0.4,0.4-0.4,0.7c0,0.2,0.1,0.4,0.2,0.6\r\n\t\t\tC12.9,10.2,13.1,10.3,13.4,10.3L13.4,10.3z M8.2,6.5c-0.4,0-0.6,0.1-0.9,0.3S7,7.4,6.9,7.9h2.4c0-0.4-0.1-0.8-0.3-1\r\n\t\t\tC8.8,6.6,8.6,6.5,8.2,6.5L8.2,6.5z\"/>\r\n\t</g>\r\n</g>\r\n<g class=\"st2\">\r\n\t<path class=\"st3\" d=\"M50.1,5.9c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.4,0.1h2.5c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5\r\n\t\tv0.6c0,0.6-0.2,1.1-0.6,1.5c-0.4,0.4-0.9,0.6-1.5,0.6c-0.6,0-1.2,0-1.8,0c-0.6,0-1.2,0-1.7-0.1c-0.6,0-1.2,0-1.8-0.1V9.1\r\n\t\tc0.5,0.1,1,0.1,1.5,0.2c0.4,0,0.9,0,1.5,0c0.5,0,1,0,1.5,0c0.1,0,0.3,0,0.4-0.1s0.1-0.2,0.1-0.3V8.3h-3c-0.6,0-1.1-0.2-1.5-0.6\r\n\t\ts-0.6-0.9-0.6-1.5V5.7c0-0.6,0.2-1.1,0.6-1.5s0.9-0.6,1.5-0.6h4.8v1.8h-3.9c-0.1,0-0.3,0-0.4,0.1C50.1,5.7,50.1,5.8,50.1,5.9z\"/>\r\n\t<path class=\"st3\" d=\"M63.7,8.1L65,3.6h2.7l-2.3,7.4h-2.6l-1.4-4.5l-1.4,4.5h-2.6L55,3.6h2.7L59,8.1l1.3-4.5h2.2L63.7,8.1z\"/>\r\n\t<path class=\"st3\" d=\"M71.3,3.9v7.1h-2.5V5.8h-1V3.9H71.3z M68.8,1.1h2.5v2h-2.5V1.1z\"/>\r\n\t<path class=\"st3\" d=\"M76.2,3c-0.1,0-0.3,0-0.4,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v0.7H78v1.9h-2.3v5h-2.5v-5h-1V4.2h1v-1\r\n\t\tc0-0.6,0.2-1.1,0.6-1.5s0.9-0.6,1.5-0.6c0.3,0,0.7,0,1.1,0c0.4,0,0.8,0,1.1,0c0.4,0,0.8,0,1.2,0v2c-0.3,0-0.6,0-0.8-0.1\r\n\t\tc-0.2,0-0.5,0-0.8,0S76.5,3,76.2,3z\"/>\r\n\t<path class=\"st3\" d=\"M81.9,3.6h1.8v1.9h-1.8v3.2c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.1h1.8v1.8c-0.3,0-0.6,0.1-0.9,0.1\r\n\t\tc-0.3,0-0.5,0.1-0.9,0.1s-0.6,0-1,0c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V5.5h-0.8V3.6h0.8L79.7,2h2.2V3.6z\"/>\r\n\t<path class=\"st3\" d=\"M89.8,3.6h2.6l-2.8,7.7c-0.3,0.7-0.6,1.3-1,1.7c-0.4,0.4-1,0.6-1.8,0.6c-0.2,0-0.4,0-0.6,0s-0.4,0-0.6,0\r\n\t\tc-0.2,0-0.4-0.1-0.6-0.1v-1.8h1.3c0.4,0,0.6-0.1,0.7-0.3c0.1-0.2,0.1-0.5-0.1-0.8L84,3.6h2.6l1.8,4.8L89.8,3.6z\"/>\r\n\t<path class=\"st3\" d=\"M95.3,11.1v2.4h-2.5V3.6H95l0.1,0.7c0.2-0.2,0.5-0.3,0.8-0.4c0.2-0.1,0.5-0.2,0.8-0.3s0.6-0.1,0.9-0.1h0.6\r\n\t\tc0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5v3.2c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6H95.3z M95.3,9.2h2.1\r\n\t\tC97.8,9.2,98,9,98,8.6V6c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1H97c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0.1-0.5,0.1\r\n\t\tc-0.2,0-0.4,0.1-0.6,0.1V9.2z\"/>\r\n\t<path class=\"st3\" d=\"M101.5,5.7c0-0.7,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.6-0.6h2.8c0.7,0,1.2,0.2,1.6,0.6c0.4,0.4,0.6,0.9,0.6,1.6\r\n\t\tv2.6H104v0.5c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.8,0,1.3,0s0.9,0,1.3,0c0.5-0.1,1-0.1,1.4-0.2v1.8\r\n\t\tc-0.5,0.1-1.1,0.1-1.7,0.1c-0.5,0.1-1,0.1-1.6,0.1s-1.1,0-1.7,0c-0.6,0-1.1-0.2-1.5-0.6s-0.6-0.9-0.6-1.5V5.7z M104.5,5.2\r\n\t\tc-0.4,0-0.6,0.2-0.6,0.6v0.8h2.4V5.8c0-0.4-0.2-0.6-0.6-0.6H104.5z\"/>\r\n\t<path class=\"st3\" d=\"M112.2,3.6l0.1,0.9c0.2-0.2,0.5-0.4,0.7-0.5c0.2-0.1,0.5-0.3,0.8-0.4c0.3-0.1,0.6-0.2,1-0.2h0.6v2.2h-1.2\r\n\t\tc-0.2,0-0.5,0-0.7,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0.1-0.4,0.1-0.5,0.2v5h-2.5V3.6H112.2z\"/>\r\n</g>\r\n</svg>\r\n";

  var footer = (function (service) {
    var result = document.createElement('li');
    result.setAttribute("class", 'swiftyper_footer');
    result.innerHTML = "<a href=\"https://www.swiftyper.sk/".concat(service, "\" title=\"Search by Swiftyper\">").concat(swiftyperLogo, "</a>");
    return result;
  });

  var eventEmitter = (function (target, detail, name) {
    target.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      detail: detail,
      cancelable: true
    }));
  });

  var autofocus = (function (config, field) {
    if (config.options.nextFocus === true) {
      var controls = document.querySelectorAll('input:not([type=hidden]), textarea');
      var matched = false;
      controls.forEach(function (control, index) {
        if (matched || control.isEqualNode(field)) {
          var element = controls[index + 1];
          if (element && !Object.values(config._fields).find(function (field) {
            return field.isEqualNode(element);
          }) && !element.value) {
            element.focus();
            matched = false;
          } else {
            matched = true;
          }
        }
      });
    } else if (config.options.nextFocus instanceof Element) {
      config.options.nextFocus.focus();
    }
  });

  var closeAllLists = function closeAllLists(config, element, field) {
    var list = document.getElementsByClassName('swiftyper_list');
    for (var index = 0; index < list.length; index++) {
      if (element !== list[index] && element !== field) {
        list[index].parentNode.removeChild(list[index]);
      }
    }
    for (var _i = 0, _Object$values = Object.values(config._fields); _i < _Object$values.length; _i++) {
      var _field = _Object$values[_i];
      _field.removeAttribute("aria-activedescendant");
      _field.setAttribute("aria-expanded", false);
    }
  };
  var generateList = function generateList(config, data, field) {
    var list = createList(field);
    field.setAttribute("aria-expanded", true);
    var service = config.service;
    var _loop = function _loop(suggestionIndex) {
      var suggestion = data.results[suggestionIndex];
      var resultItem = createItem(suggestion, suggestionIndex, config);
      resultItem.addEventListener("click", function (event) {
        var dataFeedback = {
          event: event,
          field: field,
          query: field.value,
          suggestion: suggestion,
          suggestionIndex: suggestionIndex
        };
        if (service === 'places') {
          var _config$_fields = config._fields,
            address = _config$_fields.address,
            street = _config$_fields.street,
            streetName = _config$_fields.streetName,
            streetNumber = _config$_fields.streetNumber,
            streetNumberParts = _config$_fields.streetNumberParts,
            buildingNumber = _config$_fields.buildingNumber,
            postalCode = _config$_fields.postalCode,
            municipality = _config$_fields.municipality,
            country = _config$_fields.country;
          if (address && suggestion.formatted_address) {
            address.value = suggestion.formatted_address;
          }
          if (street && suggestion.formatted_street) {
            street.value = suggestion.formatted_street;
          }
          if (streetNumberParts && suggestion.formatted_number) {
            streetNumberParts.value = suggestion.formatted_number;
          }
          if (streetName && suggestion.street) {
            streetName.value = suggestion.street;
          }
          if (streetNumber && suggestion.street_number) {
            streetNumber.value = suggestion.street_number;
          }
          if (buildingNumber && suggestion.building_number) {
            buildingNumber.value = suggestion.building_number;
          }
          if (postalCode && suggestion.postal_code) {
            postalCode.value = suggestion.postal_code;
          }
          if (municipality && suggestion.municipality) {
            municipality.value = suggestion.municipality;
          }
          if (country && suggestion.formatted_country) {
            country.value = suggestion.formatted_country;
          }
        }
        if (service === 'business') {
          var _config$_fields2 = config._fields,
            name = _config$_fields2.name,
            cin = _config$_fields2.cin,
            tin = _config$_fields2.tin,
            vatin = _config$_fields2.vatin,
            _address = _config$_fields2.address,
            _street = _config$_fields2.street,
            _streetName = _config$_fields2.streetName,
            _streetNumber = _config$_fields2.streetNumber,
            _streetNumberParts = _config$_fields2.streetNumberParts,
            _buildingNumber = _config$_fields2.buildingNumber,
            _postalCode = _config$_fields2.postalCode,
            _municipality = _config$_fields2.municipality,
            _country = _config$_fields2.country;
          if (name) {
            name.value = suggestion.name;
          }
          if (cin) {
            cin.value = suggestion.cin;
          }
          if (tin) {
            tin.value = suggestion.tin;
          }
          if (vatin) {
            vatin.value = suggestion.vatin;
          }
          if (_address) {
            _address.value = suggestion.formatted_address;
          }
          if (_street) {
            _street.value = suggestion.formatted_street;
          }
          if (_streetNumberParts && suggestion.formatted_number) {
            _streetNumberParts.value = suggestion.formatted_number;
          }
          if (_streetName) {
            _streetName.value = suggestion.street;
          }
          if (_streetNumber) {
            _streetNumber.value = suggestion.street_number;
          }
          if (_buildingNumber && suggestion.building_number) {
            _buildingNumber.value = suggestion.building_number;
          }
          if (_postalCode) {
            _postalCode.value = suggestion.postal_code;
          }
          if (_municipality) {
            _municipality.value = suggestion.municipality;
          }
          if (_country) {
            _country.value = suggestion.formatted_country;
          }
        }
        autofocus(config, field);
        config.triggers.emit('change', dataFeedback);
        eventEmitter(field, dataFeedback, "change");
      });
      list.appendChild(resultItem);
    };
    for (var suggestionIndex = 0; suggestionIndex < data.results.length; suggestionIndex++) {
      _loop(suggestionIndex);
    }
    if (data.results.length) {
      var tier = data.results.lastResponse.headers['x-swiftyper-tier'];
      if ((tier === 'free' || config.options.logo) && data.results.length) {
        list.appendChild(footer(service));
      }
    }
    return list;
  };

  var navigate = function navigate(config, dataFeedback, field) {
    var currentFocus = -1;
    var update = function update(event, list, state) {
      event.preventDefault();
      if (state) {
        currentFocus++;
      } else {
        currentFocus--;
      }
      addActive(list);
      field.setAttribute("aria-activedescendant", list[currentFocus].id);
      eventEmitter(event.srcElement, _objectSpread2(_objectSpread2({
        event: event
      }, dataFeedback), {}, {
        selection: dataFeedback.results[currentFocus]
      }), "navigation");
    };
    var removeActive = function removeActive(list) {
      for (var index = 0; index < list.length; index++) {
        list[index].removeAttribute("aria-selected");
        list[index].classList.remove('swiftyper_selected');
      }
    };
    var addActive = function addActive(list) {
      if (!list) return false;
      removeActive(list);
      if (currentFocus >= list.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = list.length - 1;
      list[currentFocus].setAttribute("aria-selected", "true");
      list[currentFocus].classList.add('swiftyper_selected');
    };
    var navigation = function navigation(event) {
      var list = document.getElementById('swiftyper_list');
      if (!list) return field.removeEventListener("keydown", navigate);
      list = list.getElementsByTagName('li');
      if (event.keyCode === 27) {
        closeAllLists(config, undefined, field);
      } else if (event.keyCode === 40 || event.keyCode === 9) {
        update(event, list, true);
      } else if (event.keyCode === 38 || event.keyCode === 9) {
        update(event, list, false);
      } else if (event.keyCode === 13) {
        event.preventDefault();
        if (currentFocus > -1) {
          if (list) list[currentFocus].click();
        }
      }
    };
    if (field.swiftyperNavigate) {
      field.removeEventListener("keydown", field.swiftyperNavigate);
    }
    field.swiftyperNavigate = navigation;
    field.addEventListener("keydown", navigation);
  };

  var debouncer = (function (callback, delay) {
    var inDebounce;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(function () {
        return callback.apply(context, args);
      }, delay);
    };
  });

  var R = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : null;
  var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
  };
  function EventEmitter$1() {
    EventEmitter$1.init.call(this);
  }
  var events = EventEmitter$1;
  var once_1 = once$1;
  EventEmitter$1.EventEmitter = EventEmitter$1;
  EventEmitter$1.prototype._events = undefined;
  EventEmitter$1.prototype._eventsCount = 0;
  EventEmitter$1.prototype._maxListeners = undefined;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
    }
  }
  Object.defineProperty(EventEmitter$1, 'defaultMaxListeners', {
    enumerable: true,
    get: function get() {
      return defaultMaxListeners;
    },
    set: function set(arg) {
      if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter$1.init = function () {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
  };
  EventEmitter$1.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter$1.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter$1.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter$1.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;
    if (doError) {
      var er;
      if (args.length > 0) er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
      err.context = er;
      throw err;
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
      events = target._events = Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events.newListener !== undefined) {
        target.emit('newListener', type, listener.listener ? listener.listener : listener);
        events = target._events;
      }
      existing = events[type];
    }
    if (existing === undefined) {
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter$1.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;
  EventEmitter$1.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0) return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state = {
      fired: false,
      wrapFn: undefined,
      target: target,
      type: type,
      listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter$1.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter$1.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter$1.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else {
        delete events[type];
        if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
      }
    } else if (typeof list !== 'function') {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0) return this;
      if (position === 0) list.shift();else {
        spliceOne(list, position);
      }
      if (list.length === 1) events[type] = list[0];
      if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
  };
  EventEmitter$1.prototype.off = EventEmitter$1.prototype.removeListener;
  EventEmitter$1.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    if (events.removeListener === undefined) {
      if (arguments.length === 0) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      } else if (events[type] !== undefined) {
        if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events);
      var key;
      for (i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') {
      this.removeListener(type, listeners);
    } else if (listeners !== undefined) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter$1.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter$1.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter$1.listenerCount = function (emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount$1.call(emitter, type);
    }
  };
  EventEmitter$1.prototype.listenerCount = listenerCount$1;
  function listenerCount$1(type) {
    var events = this._events;
    if (events !== undefined) {
      var evlistener = events[type];
      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener !== undefined) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter$1.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i) copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++) list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once$1(emitter, name) {
    return new Promise(function (resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === 'function') {
          emitter.removeListener('error', errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, {
        once: true
      });
      if (name !== 'error') {
        addErrorHandlerIfEventEmitter(emitter, errorListener, {
          once: true
        });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') {
      eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === 'function') {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + _typeof(emitter));
    }
  }
  events.once = once_1;

  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var inited = false;
  function init() {
    inited = true;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }
  function toByteArray(b64) {
    if (!inited) {
      init();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    }
    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
    arr = new Arr(len * 3 / 4 - placeHolders);
    l = placeHolders > 0 ? len - 4 : len;
    var L = 0;
    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = tmp >> 16 & 0xFF;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }
    if (placeHolders === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output.push(tripletToBase64(tmp));
    }
    return output.join('');
  }
  function fromByteArray(uint8) {
    if (!inited) {
      init();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3;
    var output = '';
    var parts = [];
    var maxChunkLength = 16383;
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[tmp << 4 & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      output += lookup[tmp >> 10];
      output += lookup[tmp >> 4 & 0x3F];
      output += lookup[tmp << 2 & 0x3F];
      output += '=';
    }
    parts.push(output);
    return parts.join('');
  }

  function read(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  }
  function write(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  }

  var toString = {}.toString;
  var isArray$6 = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  var INSPECT_MAX_BYTES = 50;
  Buffer$1.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;
  var _kMaxLength = kMaxLength();
  function kMaxLength() {
    return Buffer$1.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }
  function createBuffer(that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length');
    }
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      that = new Uint8Array(length);
      that.__proto__ = Buffer$1.prototype;
    } else {
      if (that === null) {
        that = new Buffer$1(length);
      }
      that.length = length;
    }
    return that;
  }
  function Buffer$1(arg, encodingOrOffset, length) {
    if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
      return new Buffer$1(arg, encodingOrOffset, length);
    }
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error('If encoding is specified then the first argument must be a string');
      }
      return allocUnsafe(this, arg);
    }
    return from(this, arg, encodingOrOffset, length);
  }
  Buffer$1.poolSize = 8192;
  Buffer$1._augment = function (arr) {
    arr.__proto__ = Buffer$1.prototype;
    return arr;
  };
  function from(that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number');
    }
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length);
    }
    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset);
    }
    return fromObject(that, value);
  }
  Buffer$1.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length);
  };
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    Buffer$1.prototype.__proto__ = Uint8Array.prototype;
    Buffer$1.__proto__ = Uint8Array;
    if (typeof Symbol !== 'undefined' && Symbol.species && Buffer$1[Symbol.species] === Buffer$1) ;
  }
  function assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative');
    }
  }
  function alloc(that, size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(that, size);
    }
    if (fill !== undefined) {
      return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
    }
    return createBuffer(that, size);
  }
  Buffer$1.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding);
  };
  function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }
    return that;
  }
  Buffer$1.allocUnsafe = function (size) {
    return allocUnsafe(null, size);
  };
  Buffer$1.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size);
  };
  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }
    if (!Buffer$1.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding');
    }
    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);
    var actual = that.write(string, encoding);
    if (actual !== length) {
      that = that.slice(0, actual);
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength;
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds');
    }
    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      that = array;
      that.__proto__ = Buffer$1.prototype;
    } else {
      that = fromArrayLike(that, array);
    }
    return that;
  }
  function fromObject(that, obj) {
    if (internalIsBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);
      if (that.length === 0) {
        return that;
      }
      obj.copy(that, 0, 0, len);
      return that;
    }
    if (obj) {
      if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0);
        }
        return fromArrayLike(that, obj);
      }
      if (obj.type === 'Buffer' && isArray$6(obj.data)) {
        return fromArrayLike(that, obj.data);
      }
    }
    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer$1.alloc(+length);
  }
  Buffer$1.isBuffer = isBuffer$1;
  function internalIsBuffer(b) {
    return !!(b != null && b._isBuffer);
  }
  Buffer$1.compare = function compare(a, b) {
    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  Buffer$1.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer$1.concat = function concat(list, length) {
    if (!isArray$6(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer$1.alloc(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }
    var buffer = Buffer$1.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!internalIsBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer;
  };
  function byteLength(string, encoding) {
    if (internalIsBuffer(string)) {
      return string.length;
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== 'string') {
      string = '' + string;
    }
    var len = string.length;
    if (len === 0) return 0;
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len;
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase) return utf8ToBytes(string).length;
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer$1.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    if (start === undefined || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return '';
    }
    if (end === undefined || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return '';
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return '';
    }
    if (!encoding) encoding = 'utf8';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer$1.prototype._isBuffer = true;
  function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }
  Buffer$1.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  };
  Buffer$1.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  };
  Buffer$1.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  };
  Buffer$1.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer$1.prototype.equals = function equals(b) {
    if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer$1.compare(this, b) === 0;
  };
  Buffer$1.prototype.inspect = function inspect() {
    var str = '';
    var max = INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };
  Buffer$1.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (!internalIsBuffer(target)) {
      throw new TypeError('Argument must be a Buffer');
    }
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    if (buffer.length === 0) return -1;
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;
    if (isNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer.length - 1;
    }
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1;else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;else return -1;
    }
    if (typeof val === 'string') {
      val = Buffer$1.from(val, encoding);
    }
    if (internalIsBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
      val = val & 0xFF;
      if (Buffer$1.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i) {
      if (indexSize === 1) {
        return buf[i];
      } else {
        return buf.readUInt16BE(i * indexSize);
      }
    }
    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }
    return -1;
  }
  Buffer$1.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer$1.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer$1.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer$1.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
          return asciiWrite(this, string, offset, length);
        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length);
        case 'base64':
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer$1.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return fromByteArray(buf);
    } else {
      return fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer$1.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start) end = start;
    var newBuf;
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer$1.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer$1(sliceLen, undefined);
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer$1.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer$1.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer$1.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer$1.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer$1.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer$1.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };
  Buffer$1.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer$1.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer$1.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer$1.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };
  Buffer$1.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };
  Buffer$1.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };
  Buffer$1.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer$1.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer$1.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, true, 23, 4);
  };
  Buffer$1.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, false, 23, 4);
  };
  Buffer$1.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, true, 52, 8);
  };
  Buffer$1.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
  }
  Buffer$1.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer$1.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer$1.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = value & 0xff;
    return offset + 1;
  };
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  Buffer$1.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer$1.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
    }
  }
  Buffer$1.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer$1.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  Buffer$1.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer$1.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer$1.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };
  Buffer$1.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer$1.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  Buffer$1.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer$1.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer$1.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer$1.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer$1.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer$1.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer$1.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer$1.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }
    return len;
  };
  Buffer$1.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }
      if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer$1(val, encoding).toString());
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }
    return this;
  };
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    if (str.length < 2) return '';
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim) return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }
  function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  function isnan(val) {
    return val !== val;
  }
  function isBuffer$1(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
  }
  function isFastBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  }
  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
  }

  var bufferEs6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    INSPECT_MAX_BYTES: INSPECT_MAX_BYTES,
    kMaxLength: _kMaxLength,
    Buffer: Buffer$1,
    SlowBuffer: SlowBuffer,
    isBuffer: isBuffer$1
  });

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
  }
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = '';
  var versions = {};
  var release = {};
  var config = {};
  function noop() {}
  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;
  function binding(name) {
    throw new Error('process.binding is not supported');
  }
  function cwd() {
    return '/';
  }
  function chdir(dir) {
    throw new Error('process.chdir is not supported');
  }
  function umask() {
    return 0;
  }
  var performance = global$1.performance || {};
  var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
  };
  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds, nanoseconds];
  }
  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }
  var process = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var hasFetch = isFunction$1(global$1.fetch) && isFunction$1(global$1.ReadableStream);
  var _blobConstructor;
  function blobConstructor() {
    if (typeof _blobConstructor !== 'undefined') {
      return _blobConstructor;
    }
    try {
      new global$1.Blob([new ArrayBuffer(1)]);
      _blobConstructor = true;
    } catch (e) {
      _blobConstructor = false;
    }
    return _blobConstructor;
  }
  var xhr;
  function checkTypeSupport(type) {
    if (!xhr) {
      xhr = new global$1.XMLHttpRequest();
      xhr.open('GET', global$1.location.host ? '/' : 'https://example.com');
    }
    try {
      xhr.responseType = type;
      return xhr.responseType === type;
    } catch (e) {
      return false;
    }
  }
  var haveArrayBuffer = typeof global$1.ArrayBuffer !== 'undefined';
  var haveSlice = haveArrayBuffer && isFunction$1(global$1.ArrayBuffer.prototype.slice);
  var arraybuffer = haveArrayBuffer && checkTypeSupport('arraybuffer');
  var msstream = !hasFetch && haveSlice && checkTypeSupport('ms-stream');
  var mozchunkedarraybuffer = !hasFetch && haveArrayBuffer && checkTypeSupport('moz-chunked-arraybuffer');
  var overrideMimeType = isFunction$1(xhr.overrideMimeType);
  var vbArray = isFunction$1(global$1.VBArray);
  function isFunction$1(value) {
    return typeof value === 'function';
  }
  xhr = null;

  var inherits;
  if (typeof Object.create === 'function') {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function TempCtor() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$1 = inherits;

  var formatRegExp = /%[sdj%]/g;
  function format$1(f) {
    if (!isString$1(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect$1(arguments[i]));
      }
      return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect$1(x);
      }
    }
    return str;
  }
  function deprecate(fn, msg) {
    if (isUndefined(global$1.process)) {
      return function () {
        return deprecate(fn, msg).apply(this, arguments);
      };
    }
    if (process.noDeprecation === true) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  }
  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;
        debugs[set] = function () {
          var msg = format$1.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function () {};
      }
    }
    return debugs[set];
  }
  function inspect$1(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean$1(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      _extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  inspect$1.colors = {
    'bold': [1, 22],
    'italic': [3, 23],
    'underline': [4, 24],
    'inverse': [7, 27],
    'white': [37, 39],
    'grey': [90, 39],
    'black': [30, 39],
    'blue': [34, 39],
    'cyan': [36, 39],
    'green': [32, 39],
    'magenta': [35, 39],
    'red': [31, 39],
    'yellow': [33, 39]
  };
  inspect$1.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    'regexp': 'red'
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect$1.styles[styleType];
    if (style) {
      return "\x1B[" + inspect$1.colors[style][0] + 'm' + str + "\x1B[" + inspect$1.colors[style][1] + 'm';
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash = {};
    array.forEach(function (val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== inspect$1 && !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString$1(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError$1(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp$2(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate$1(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError$1(value)) {
        return formatError(value);
      }
    }
    var base = '',
      array = false,
      braces = ['{', '}'];
    if (isArray$5(value)) {
      array = true;
      braces = ['[', ']'];
    }
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }
    if (isRegExp$2(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }
    if (isDate$1(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }
    if (isError$1(value)) {
      base = ' ' + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp$2(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function (key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if (isString$1(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber$1(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean$1(value)) return ctx.stylize('' + value, 'boolean');
    if (isNull(value)) return ctx.stylize('null', 'null');
  }
  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty$1(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function (key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
      value: value[key]
    };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty$1(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function (line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function (line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }
    return name + ': ' + str;
  }
  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function (prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    }
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }
  function isArray$5(ar) {
    return Array.isArray(ar);
  }
  function isBoolean$1(arg) {
    return typeof arg === 'boolean';
  }
  function isNull(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  function isNumber$1(arg) {
    return typeof arg === 'number';
  }
  function isString$1(arg) {
    return typeof arg === 'string';
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  function isRegExp$2(re) {
    return isObject(re) && objectToString$1(re) === '[object RegExp]';
  }
  function isObject(arg) {
    return _typeof(arg) === 'object' && arg !== null;
  }
  function isDate$1(d) {
    return isObject(d) && objectToString$1(d) === '[object Date]';
  }
  function isError$1(e) {
    return isObject(e) && (objectToString$1(e) === '[object Error]' || e instanceof Error);
  }
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function objectToString$1(o) {
    return Object.prototype.toString.call(o);
  }
  function _extend(origin, add) {
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  function hasOwnProperty$1(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  function BufferList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  BufferList.prototype.push = function (v) {
    var entry = {
      data: v,
      next: null
    };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };
  BufferList.prototype.unshift = function (v) {
    var entry = {
      data: v,
      next: this.head
    };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };
  BufferList.prototype.shift = function () {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };
  BufferList.prototype.clear = function () {
    this.head = this.tail = null;
    this.length = 0;
  };
  BufferList.prototype.join = function (s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }
    return ret;
  };
  BufferList.prototype.concat = function (n) {
    if (this.length === 0) return Buffer$1.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer$1.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      p.data.copy(ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var buffer = /*@__PURE__*/getAugmentedNamespace(bufferEs6);

  var safeBuffer = createCommonjsModule(function (module, exports) {
    var Buffer = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length);
    }
    copyProps(Buffer, SafeBuffer);
    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
      }
      return Buffer(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      var buf = Buffer(size);
      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      return Buffer(size);
    };
    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      return buffer.SlowBuffer(size);
    };
  });

  var Buffer = safeBuffer.Buffer;
  var isEncoding = Buffer.isEncoding || function (encoding) {
    encoding = '' + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
      case 'raw':
        return true;
      default:
        return false;
    }
  };
  function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while (true) {
      switch (enc) {
        case 'utf8':
        case 'utf-8':
          return 'utf8';
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 'utf16le';
        case 'latin1':
        case 'binary':
          return 'latin1';
        case 'base64':
        case 'ascii':
        case 'hex':
          return enc;
        default:
          if (retried) return;
          enc = ('' + enc).toLowerCase();
          retried = true;
      }
    }
  }
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
  }
  var StringDecoder_1 = StringDecoder;
  function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case 'utf16le':
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case 'utf8':
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case 'base64':
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
  }
  StringDecoder.prototype.write = function (buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
      r = this.fillLast(buf);
      if (r === undefined) return '';
      i = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
  };
  StringDecoder.prototype.end = utf8End;
  StringDecoder.prototype.text = utf8Text;
  StringDecoder.prototype.fillLast = function (buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  function utf8CheckByte(_byte) {
    if (_byte <= 0x7F) return 0;else if (_byte >> 5 === 0x06) return 2;else if (_byte >> 4 === 0x0E) return 3;else if (_byte >> 3 === 0x1E) return 4;
    return _byte >> 6 === 0x02 ? -1 : -2;
  }
  function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) self.lastNeed = nb - 1;
      return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) self.lastNeed = nb - 2;
      return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }
  function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
      self.lastNeed = 0;
      return "\uFFFD";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 0xC0) !== 0x80) {
        self.lastNeed = 1;
        return "\uFFFD";
      }
      if (self.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 0xC0) !== 0x80) {
          self.lastNeed = 2;
          return "\uFFFD";
        }
      }
    }
  }
  function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
  }
  function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
  }
  function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + "\uFFFD";
    return r;
  }
  function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
      var r = buf.toString('utf16le', i);
      if (r) {
        var c = r.charCodeAt(r.length - 1);
        if (c >= 0xD800 && c <= 0xDBFF) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r.slice(0, -1);
        }
      }
      return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
  }
  function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
  }
  function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
  }
  function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
  }
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }
  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
  }

  Readable.ReadableState = ReadableState;
  var debug = debuglog('stream');
  inherits$1(Readable, events);
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === 'function') {
      return emitter.prependListener(event, fn);
    } else {
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
    }
  }
  function listenerCount(emitter, type) {
    return emitter.listeners(type).length;
  }
  function ReadableState(options, stream) {
    options = options || {};
    this.objectMode = !!options.objectMode;
    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    this.highWaterMark = ~~this.highWaterMark;
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    this.ranOut = false;
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      this.decoder = new StringDecoder_1(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    if (!(this instanceof Readable)) return new Readable(options);
    this._readableState = new ReadableState(options, this);
    this.readable = true;
    if (options && typeof options.read === 'function') this._read = options.read;
    events.call(this);
  }
  Readable.prototype.push = function (chunk, encoding) {
    var state = this._readableState;
    if (!state.objectMode && typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer$1.from(chunk, encoding);
        encoding = '';
      }
    }
    return readableAddChunk(this, state, chunk, encoding, false);
  };
  Readable.prototype.unshift = function (chunk) {
    var state = this._readableState;
    return readableAddChunk(this, state, chunk, '', true);
  };
  Readable.prototype.isPaused = function () {
    return this._readableState.flowing === false;
  };
  function readableAddChunk(stream, state, chunk, encoding, addToFront) {
    var er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (state.ended && !addToFront) {
        var e = new Error('stream.push() after EOF');
        stream.emit('error', e);
      } else if (state.endEmitted && addToFront) {
        var _e = new Error('stream.unshift() after end event');
        stream.emit('error', _e);
      } else {
        var skipAdd;
        if (state.decoder && !addToFront && !encoding) {
          chunk = state.decoder.write(chunk);
          skipAdd = !state.objectMode && chunk.length === 0;
        }
        if (!addToFront) state.reading = false;
        if (!skipAdd) {
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
            if (state.needReadable) emitReadable(stream);
          }
        }
        maybeReadMore(stream, state);
      }
    } else if (!addToFront) {
      state.reading = false;
    }
    return needMoreData(state);
  }
  function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
  }
  Readable.prototype.setEncoding = function (enc) {
    this._readableState.decoder = new StringDecoder_1(enc);
    this._readableState.encoding = enc;
    return this;
  };
  var MAX_HWM = 0x800000;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }
  function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
      if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
    }
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }
  Readable.prototype.read = function (n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
      debug('read: emitReadable', state.length, state.ended);
      if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
      return null;
    }
    n = howMuchToRead(n, state);
    if (n === 0 && state.ended) {
      if (state.length === 0) endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug('need readable', doRead);
    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug('length less than watermark', doRead);
    }
    if (state.ended || state.reading) {
      doRead = false;
      debug('reading or ended', doRead);
    } else if (doRead) {
      debug('do read');
      state.reading = true;
      state.sync = true;
      if (state.length === 0) state.needReadable = true;
      this._read(state.highWaterMark);
      state.sync = false;
      if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);else ret = null;
    if (ret === null) {
      state.needReadable = true;
      n = 0;
    } else {
      state.length -= n;
    }
    if (state.length === 0) {
      if (!state.ended) state.needReadable = true;
      if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
  };
  function chunkInvalid(state, chunk) {
    var er = null;
    if (!isBuffer$1(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    return er;
  }
  function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    emitReadable(stream);
  }
  function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug('emitReadable', state.flowing);
      state.emittedReadable = true;
      if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
    }
  }
  function emitReadable_(stream) {
    debug('emit readable');
    stream.emit('readable');
    flow(stream);
  }
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      nextTick(maybeReadMore_, stream, state);
    }
  }
  function maybeReadMore_(stream, state) {
    var len = state.length;
    while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
      debug('maybeReadMore read 0');
      stream.read(0);
      if (len === state.length) break;else len = state.length;
    }
    state.readingMore = false;
  }
  Readable.prototype._read = function (n) {
    this.emit('error', new Error('not implemented'));
  };
  Readable.prototype.pipe = function (dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = !pipeOpts || pipeOpts.end !== false;
    var endFn = doEnd ? onend : cleanup;
    if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable) {
      debug('onunpipe');
      if (readable === src) {
        cleanup();
      }
    }
    function onend() {
      debug('onend');
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug('cleanup');
      dest.removeListener('close', onclose);
      dest.removeListener('finish', onfinish);
      dest.removeListener('drain', ondrain);
      dest.removeListener('error', onerror);
      dest.removeListener('unpipe', onunpipe);
      src.removeListener('end', onend);
      src.removeListener('end', cleanup);
      src.removeListener('data', ondata);
      cleanedUp = true;
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    var increasedAwaitDrain = false;
    src.on('data', ondata);
    function ondata(chunk) {
      debug('ondata');
      increasedAwaitDrain = false;
      var ret = dest.write(chunk);
      if (false === ret && !increasedAwaitDrain) {
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf$1(state.pipes, dest) !== -1) && !cleanedUp) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          increasedAwaitDrain = true;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug('onerror', er);
      unpipe();
      dest.removeListener('error', onerror);
      if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
    }
    prependListener(dest, 'error', onerror);
    function onclose() {
      dest.removeListener('finish', onfinish);
      unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
      debug('onfinish');
      dest.removeListener('close', onclose);
      unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
      debug('unpipe');
      src.unpipe(dest);
    }
    dest.emit('pipe', src);
    if (!state.flowing) {
      debug('pipe resume');
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function () {
      var state = src._readableState;
      debug('pipeOnDrain', state.awaitDrain);
      if (state.awaitDrain) state.awaitDrain--;
      if (state.awaitDrain === 0 && src.listeners('data').length) {
        state.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function (dest) {
    var state = this._readableState;
    if (state.pipesCount === 0) return this;
    if (state.pipesCount === 1) {
      if (dest && dest !== state.pipes) return this;
      if (!dest) dest = state.pipes;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest) dest.emit('unpipe', this);
      return this;
    }
    if (!dest) {
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      for (var _i = 0; _i < len; _i++) {
        dests[_i].emit('unpipe', this);
      }
      return this;
    }
    var i = indexOf$1(state.pipes, dest);
    if (i === -1) return this;
    state.pipes.splice(i, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this);
    return this;
  };
  Readable.prototype.on = function (ev, fn) {
    var res = events.prototype.on.call(this, ev, fn);
    if (ev === 'data') {
      if (this._readableState.flowing !== false) this.resume();
    } else if (ev === 'readable') {
      var state = this._readableState;
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.emittedReadable = false;
        if (!state.reading) {
          nextTick(nReadingNextTick, this);
        } else if (state.length) {
          emitReadable(this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
  }
  Readable.prototype.resume = function () {
    var state = this._readableState;
    if (!state.flowing) {
      debug('resume');
      state.flowing = true;
      resume(this, state);
    }
    return this;
  };
  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      nextTick(resume_, stream, state);
    }
  }
  function resume_(stream, state) {
    if (!state.reading) {
      debug('resume read 0');
      stream.read(0);
    }
    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
  }
  Readable.prototype.pause = function () {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (false !== this._readableState.flowing) {
      debug('pause');
      this._readableState.flowing = false;
      this.emit('pause');
    }
    return this;
  };
  function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while (state.flowing && stream.read() !== null) {}
  }
  Readable.prototype.wrap = function (stream) {
    var state = this._readableState;
    var paused = false;
    var self = this;
    stream.on('end', function () {
      debug('wrapped end');
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) self.push(chunk);
      }
      self.push(null);
    });
    stream.on('data', function (chunk) {
      debug('wrapped data');
      if (state.decoder) chunk = state.decoder.write(chunk);
      if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
      var ret = self.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === 'function') {
        this[i] = function (method) {
          return function () {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    }
    var events = ['error', 'close', 'destroy', 'pause', 'resume'];
    forEach(events, function (ev) {
      stream.on(ev, self.emit.bind(self, ev));
    });
    self._read = function (n) {
      debug('wrapped _read', n);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return self;
  };
  Readable._fromList = fromList;
  function fromList(n, state) {
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
      if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = fromListPartial(n, state.buffer, state.decoder);
    }
    return ret;
  }
  function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
      ret = list.head.data.slice(0, n);
      list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
      ret = list.shift();
    } else {
      ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
  }
  function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while (p = p.next) {
      var str = p.data;
      var nb = n > str.length ? str.length : n;
      if (nb === str.length) ret += str;else ret += str.slice(0, n);
      n -= nb;
      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = str.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }
  function copyFromBuffer(n, list) {
    var ret = Buffer$1.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while (p = p.next) {
      var buf = p.data;
      var nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;
      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = buf.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }
  function endReadable(stream) {
    var state = stream._readableState;
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    if (!state.endEmitted) {
      state.ended = true;
      nextTick(endReadableNT, state, stream);
    }
  }
  function endReadableNT(state, stream) {
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit('end');
    }
  }
  function forEach(xs, f) {
    for (var i = 0, l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }
  function indexOf$1(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) return i;
    }
    return -1;
  }

  Writable.WritableState = WritableState;
  inherits$1(Writable, events.EventEmitter);
  function nop() {}
  function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
  }
  function WritableState(options, stream) {
    Object.defineProperty(this, 'buffer', {
      get: deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
    options = options || {};
    this.objectMode = !!options.objectMode;
    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    this.highWaterMark = ~~this.highWaterMark;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function (er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function writableStateGetBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  function Writable(options) {
    if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);
    this._writableState = new WritableState(options, this);
    this.writable = true;
    if (options) {
      if (typeof options.write === 'function') this._write = options.write;
      if (typeof options.writev === 'function') this._writev = options.writev;
    }
    events.EventEmitter.call(this);
  }
  Writable.prototype.pipe = function () {
    this.emit('error', new Error('Cannot pipe, not readable'));
  };
  function writeAfterEnd(stream, cb) {
    var er = new Error('write after end');
    stream.emit('error', er);
    nextTick(cb, er);
  }
  function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    if (chunk === null) {
      er = new TypeError('May not write null values to stream');
    } else if (!Buffer$1.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    if (er) {
      stream.emit('error', er);
      nextTick(cb, er);
      valid = false;
    }
    return valid;
  }
  Writable.prototype.write = function (chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }
    if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function () {
    var state = this._writableState;
    state.corked++;
  };
  Writable.prototype.uncork = function () {
    var state = this._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
      chunk = Buffer$1.from(chunk, encoding);
    }
    return chunk;
  }
  function writeOrBuffer(stream, state, chunk, encoding, cb) {
    chunk = decodeChunk(state, chunk, encoding);
    if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) nextTick(cb, er);else cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  }
  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }
  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);else {
      var finished = needFinish(state);
      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }
      if (sync) {
        nextTick(afterWrite, stream, state, finished, cb);
      } else {
        afterWrite(stream, state, finished, cb);
      }
    }
  }
  function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit('drain');
    }
  }
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      while (entry) {
        buffer[count] = entry;
        entry = entry.next;
        count += 1;
      }
      doWrite(stream, state, true, state.length, buffer, '', holder.finish);
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        if (state.writing) {
          break;
        }
      }
      if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequestCount = 0;
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }
  Writable.prototype._write = function (chunk, encoding, cb) {
    cb(new Error('not implemented'));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function (chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (!state.ending && !state.finished) endWritable(this, state, cb);
  };
  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }
  function prefinish(stream, state) {
    if (!state.prefinished) {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      if (state.pendingcb === 0) {
        prefinish(stream, state);
        state.finished = true;
        stream.emit('finish');
      } else {
        prefinish(stream, state);
      }
    }
    return need;
  }
  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished) nextTick(cb);else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
  }
  function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function (err) {
      var entry = _this.entry;
      _this.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = _this;
      } else {
        state.corkedRequestsFree = _this;
      }
    };
  }

  inherits$1(Duplex, Readable);
  var keys = Object.keys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
  function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false) this.readable = false;
    if (options && options.writable === false) this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    this.once('end', onend);
  }
  function onend() {
    if (this.allowHalfOpen || this._writableState.ended) return;
    nextTick(onEndNT, this);
  }
  function onEndNT(self) {
    self.end();
  }

  inherits$1(Transform, Duplex);
  function TransformState(stream) {
    this.afterTransform = function (er, data) {
      return afterTransform(stream, er, data);
    };
    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
    this.writeencoding = null;
  }
  function afterTransform(stream, er, data) {
    var ts = stream._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
    ts.writechunk = null;
    ts.writecb = null;
    if (data !== null && data !== undefined) stream.push(data);
    cb(er);
    var rs = stream._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      stream._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = new TransformState(this);
    var stream = this;
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === 'function') this._transform = options.transform;
      if (typeof options.flush === 'function') this._flush = options.flush;
    }
    this.once('prefinish', function () {
      if (typeof this._flush === 'function') this._flush(function (er) {
        done(stream, er);
      });else done(stream);
    });
  }
  Transform.prototype.push = function (chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform.prototype._transform = function (chunk, encoding, cb) {
    throw new Error('Not implemented');
  };
  Transform.prototype._write = function (chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  };
  Transform.prototype._read = function (n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  function done(stream, er) {
    if (er) return stream.emit('error', er);
    var ws = stream._writableState;
    var ts = stream._transformState;
    if (ws.length) throw new Error('Calling transform done when ws.length != 0');
    if (ts.transforming) throw new Error('Calling transform done when still transforming');
    return stream.push(null);
  }

  inherits$1(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };

  inherits$1(Stream, events);
  Stream.Readable = Readable;
  Stream.Writable = Writable;
  Stream.Duplex = Duplex;
  Stream.Transform = Transform;
  Stream.PassThrough = PassThrough;
  Stream.Stream = Stream;
  function Stream() {
    events.call(this);
  }
  Stream.prototype.pipe = function (dest, options) {
    var source = this;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on('data', ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on('drain', ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }
    var didOnEnd = false;
    function onend() {
      if (didOnEnd) return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd) return;
      didOnEnd = true;
      if (typeof dest.destroy === 'function') dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (events.listenerCount(this, 'error') === 0) {
        throw er;
      }
    }
    source.on('error', onerror);
    dest.on('error', onerror);
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);
      source.removeListener('end', onend);
      source.removeListener('close', onclose);
      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);
      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);
      dest.removeListener('close', cleanup);
    }
    source.on('end', cleanup);
    source.on('close', cleanup);
    dest.on('close', cleanup);
    dest.emit('pipe', source);
    return dest;
  };

  var rStates = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
  };
  function IncomingMessage(xhr, response, mode) {
    var self = this;
    Readable.call(self);
    self._mode = mode;
    self.headers = {};
    self.rawHeaders = [];
    self.trailers = {};
    self.rawTrailers = [];
    self.on('end', function () {
      nextTick(function () {
        self.emit('close');
      });
    });
    var _read;
    if (mode === 'fetch') {
      self._fetchResponse = response;
      self.url = response.url;
      self.statusCode = response.status;
      self.statusMessage = response.statusText;
      for (var header, _i, _it = response.headers[Symbol.iterator](); header = (_i = _it.next()).value, !_i.done;) {
        self.headers[header[0].toLowerCase()] = header[1];
        self.rawHeaders.push(header[0], header[1]);
      }
      var reader = response.body.getReader();
      _read = function read() {
        reader.read().then(function (result) {
          if (self._destroyed) return;
          if (result.done) {
            self.push(null);
            return;
          }
          self.push(new Buffer$1(result.value));
          _read();
        });
      };
      _read();
    } else {
      self._xhr = xhr;
      self._pos = 0;
      self.url = xhr.responseURL;
      self.statusCode = xhr.status;
      self.statusMessage = xhr.statusText;
      var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
      headers.forEach(function (header) {
        var matches = header.match(/^([^:]+):\s*(.*)/);
        if (matches) {
          var key = matches[1].toLowerCase();
          if (key === 'set-cookie') {
            if (self.headers[key] === undefined) {
              self.headers[key] = [];
            }
            self.headers[key].push(matches[2]);
          } else if (self.headers[key] !== undefined) {
            self.headers[key] += ', ' + matches[2];
          } else {
            self.headers[key] = matches[2];
          }
          self.rawHeaders.push(matches[1], matches[2]);
        }
      });
      self._charset = 'x-user-defined';
      if (!overrideMimeType) {
        var mimeType = self.rawHeaders['mime-type'];
        if (mimeType) {
          var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
          if (charsetMatch) {
            self._charset = charsetMatch[1].toLowerCase();
          }
        }
        if (!self._charset) self._charset = 'utf-8';
      }
    }
  }
  inherits$1(IncomingMessage, Readable);
  IncomingMessage.prototype._read = function () {};
  IncomingMessage.prototype._onXHRProgress = function () {
    var self = this;
    var xhr = self._xhr;
    var response = null;
    switch (self._mode) {
      case 'text:vbarray':
        if (xhr.readyState !== rStates.DONE) break;
        try {
          response = new global$1.VBArray(xhr.responseBody).toArray();
        } catch (e) {}
        if (response !== null) {
          self.push(new Buffer$1(response));
          break;
        }
      case 'text':
        try {
          response = xhr.responseText;
        } catch (e) {
          self._mode = 'text:vbarray';
          break;
        }
        if (response.length > self._pos) {
          var newData = response.substr(self._pos);
          if (self._charset === 'x-user-defined') {
            var buffer = new Buffer$1(newData.length);
            for (var i = 0; i < newData.length; i++) buffer[i] = newData.charCodeAt(i) & 0xff;
            self.push(buffer);
          } else {
            self.push(newData, self._charset);
          }
          self._pos = response.length;
        }
        break;
      case 'arraybuffer':
        if (xhr.readyState !== rStates.DONE || !xhr.response) break;
        response = xhr.response;
        self.push(new Buffer$1(new Uint8Array(response)));
        break;
      case 'moz-chunked-arraybuffer':
        response = xhr.response;
        if (xhr.readyState !== rStates.LOADING || !response) break;
        self.push(new Buffer$1(new Uint8Array(response)));
        break;
      case 'ms-stream':
        response = xhr.response;
        if (xhr.readyState !== rStates.LOADING) break;
        var reader = new global$1.MSStreamReader();
        reader.onprogress = function () {
          if (reader.result.byteLength > self._pos) {
            self.push(new Buffer$1(new Uint8Array(reader.result.slice(self._pos))));
            self._pos = reader.result.byteLength;
          }
        };
        reader.onload = function () {
          self.push(null);
        };
        reader.readAsArrayBuffer(response);
        break;
    }
    if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
      self.push(null);
    }
  };

  function toArrayBuffer (buf) {
    if (buf instanceof Uint8Array) {
      if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
      } else if (typeof buf.buffer.slice === 'function') {
        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
      }
    }
    if (isBuffer$1(buf)) {
      var arrayCopy = new Uint8Array(buf.length);
      var len = buf.length;
      for (var i = 0; i < len; i++) {
        arrayCopy[i] = buf[i];
      }
      return arrayCopy.buffer;
    } else {
      throw new Error('Argument must be a Buffer');
    }
  }

  function decideMode(preferBinary, useFetch) {
    if (hasFetch && useFetch) {
      return 'fetch';
    } else if (mozchunkedarraybuffer) {
      return 'moz-chunked-arraybuffer';
    } else if (msstream) {
      return 'ms-stream';
    } else if (arraybuffer && preferBinary) {
      return 'arraybuffer';
    } else if (vbArray && preferBinary) {
      return 'text:vbarray';
    } else {
      return 'text';
    }
  }
  function ClientRequest(opts) {
    var self = this;
    Writable.call(self);
    self._opts = opts;
    self._body = [];
    self._headers = {};
    if (opts.auth) self.setHeader('Authorization', 'Basic ' + new Buffer$1(opts.auth).toString('base64'));
    Object.keys(opts.headers).forEach(function (name) {
      self.setHeader(name, opts.headers[name]);
    });
    var preferBinary;
    var useFetch = true;
    if (opts.mode === 'disable-fetch') {
      useFetch = false;
      preferBinary = true;
    } else if (opts.mode === 'prefer-streaming') {
      preferBinary = false;
    } else if (opts.mode === 'allow-wrong-content-type') {
      preferBinary = !overrideMimeType;
    } else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
      preferBinary = true;
    } else {
      throw new Error('Invalid value for opts.mode');
    }
    self._mode = decideMode(preferBinary, useFetch);
    self.on('finish', function () {
      self._onFinish();
    });
  }
  inherits$1(ClientRequest, Writable);
  var unsafeHeaders = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'user-agent', 'via'];
  ClientRequest.prototype.setHeader = function (name, value) {
    var self = this;
    var lowerName = name.toLowerCase();
    if (unsafeHeaders.indexOf(lowerName) !== -1) return;
    self._headers[lowerName] = {
      name: name,
      value: value
    };
  };
  ClientRequest.prototype.getHeader = function (name) {
    var self = this;
    return self._headers[name.toLowerCase()].value;
  };
  ClientRequest.prototype.removeHeader = function (name) {
    var self = this;
    delete self._headers[name.toLowerCase()];
  };
  ClientRequest.prototype._onFinish = function () {
    var self = this;
    if (self._destroyed) return;
    var opts = self._opts;
    var headersObj = self._headers;
    var body;
    if (opts.method === 'POST' || opts.method === 'PUT' || opts.method === 'PATCH') {
      if (blobConstructor()) {
        body = new global$1.Blob(self._body.map(function (buffer) {
          return toArrayBuffer(buffer);
        }), {
          type: (headersObj['content-type'] || {}).value || ''
        });
      } else {
        body = Buffer$1.concat(self._body).toString();
      }
    }
    if (self._mode === 'fetch') {
      var headers = Object.keys(headersObj).map(function (name) {
        return [headersObj[name].name, headersObj[name].value];
      });
      global$1.fetch(self._opts.url, {
        method: self._opts.method,
        headers: headers,
        body: body,
        mode: 'cors',
        credentials: opts.withCredentials ? 'include' : 'same-origin'
      }).then(function (response) {
        self._fetchResponse = response;
        self._connect();
      }, function (reason) {
        self.emit('error', reason);
      });
    } else {
      var xhr = self._xhr = new global$1.XMLHttpRequest();
      try {
        xhr.open(self._opts.method, self._opts.url, true);
      } catch (err) {
        nextTick(function () {
          self.emit('error', err);
        });
        return;
      }
      if ('responseType' in xhr) xhr.responseType = self._mode.split(':')[0];
      if ('withCredentials' in xhr) xhr.withCredentials = !!opts.withCredentials;
      if (self._mode === 'text' && 'overrideMimeType' in xhr) xhr.overrideMimeType('text/plain; charset=x-user-defined');
      Object.keys(headersObj).forEach(function (name) {
        xhr.setRequestHeader(headersObj[name].name, headersObj[name].value);
      });
      self._response = null;
      xhr.onreadystatechange = function () {
        switch (xhr.readyState) {
          case rStates.LOADING:
          case rStates.DONE:
            self._onXHRProgress();
            break;
        }
      };
      if (self._mode === 'moz-chunked-arraybuffer') {
        xhr.onprogress = function () {
          self._onXHRProgress();
        };
      }
      xhr.onerror = function () {
        if (self._destroyed) return;
        self.emit('error', new Error('XHR error'));
      };
      try {
        xhr.send(body);
      } catch (err) {
        nextTick(function () {
          self.emit('error', err);
        });
        return;
      }
    }
  };
  function statusValid(xhr) {
    try {
      var status = xhr.status;
      return status !== null && status !== 0;
    } catch (e) {
      return false;
    }
  }
  ClientRequest.prototype._onXHRProgress = function () {
    var self = this;
    if (!statusValid(self._xhr) || self._destroyed) return;
    if (!self._response) self._connect();
    self._response._onXHRProgress();
  };
  ClientRequest.prototype._connect = function () {
    var self = this;
    if (self._destroyed) return;
    self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode);
    self.emit('response', self._response);
  };
  ClientRequest.prototype._write = function (chunk, encoding, cb) {
    var self = this;
    self._body.push(chunk);
    cb();
  };
  ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
    var self = this;
    self._destroyed = true;
    if (self._response) self._response._destroyed = true;
    if (self._xhr) self._xhr.abort();
  };
  ClientRequest.prototype.end = function (data, encoding, cb) {
    var self = this;
    if (typeof data === 'function') {
      cb = data;
      data = undefined;
    }
    Writable.prototype.end.call(self, data, encoding, cb);
  };
  ClientRequest.prototype.flushHeaders = function () {};
  ClientRequest.prototype.setTimeout = function () {};
  ClientRequest.prototype.setNoDelay = function () {};
  ClientRequest.prototype.setSocketKeepAlive = function () {};

  var maxInt = 2147483647;
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128;
  var delimiter$1 = '-';
  var regexNonASCII = /[^\x20-\x7E]/;
  var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
  var errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  };
  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;
  function error(type) {
    throw new RangeError(errors[type]);
  }
  function map$1(array, fn) {
    var length = array.length;
    var result = [];
    while (length--) {
      result[length] = fn(array[length]);
    }
    return result;
  }
  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';
    if (parts.length > 1) {
      result = parts[0] + '@';
      string = parts[1];
    }
    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map$1(labels, fn).join('.');
    return result + encoded;
  }
  function ucs2decode(string) {
    var output = [],
      counter = 0,
      length = string.length,
      value,
      extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) {
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  function digitToBasic(digit, flag) {
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  function encode$1(input) {
    var n,
      delta,
      handledCPCount,
      basicLength,
      bias,
      j,
      m,
      q,
      k,
      t,
      currentValue,
      output = [],
      inputLength,
      handledCPCountPlusOne,
      baseMinusT,
      qMinusT;
    input = ucs2decode(input);
    inputLength = input.length;
    n = initialN;
    delta = 0;
    bias = initialBias;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }
    handledCPCount = basicLength = output.length;
    if (basicLength) {
      output.push(delimiter$1);
    }
    while (handledCPCount < inputLength) {
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }
      handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }
        if (currentValue == n) {
          for (q = delta, k = base;; k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) {
              break;
            }
            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n;
    }
    return output.join('');
  }
  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode$1(string) : string;
    });
  }

  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var isArray$4 = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  function stringifyPrimitive(v) {
    switch (_typeof(v)) {
      case 'string':
        return v;
      case 'boolean':
        return v ? 'true' : 'false';
      case 'number':
        return isFinite(v) ? v : '';
      default:
        return '';
    }
  }
  function stringify$2(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
    if (_typeof(obj) === 'object') {
      return map(objectKeys(obj), function (k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray$4(obj[k])) {
          return map(obj[k], function (v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }
    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  }
  function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }
  var objectKeys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  };
  function parse$3(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (isArray$4(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  }

  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
    autoEscape = ['\''].concat(unwise),
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    };
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && isObject(url) && url instanceof Url) return url;
    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    return parse$2(this, url, parseQueryString, slashesDenoteHost);
  };
  function parse$2(self, url, parseQueryString, slashesDenoteHost) {
    if (!isString$1(url)) {
      throw new TypeError('Parameter \'url\' must be a string, not ' + _typeof(url));
    }
    var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);
    var rest = url;
    rest = rest.trim();
    if (!slashesDenoteHost && url.split('#').length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        self.path = rest;
        self.href = rest;
        self.pathname = simplePath[1];
        if (simplePath[2]) {
          self.search = simplePath[2];
          if (parseQueryString) {
            self.query = parse$3(self.search.substr(1));
          } else {
            self.query = self.search.substr(1);
          }
        } else if (parseQueryString) {
          self.search = '';
          self.query = {};
        }
        return self;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      self.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        self.slashes = true;
      }
    }
    var i, hec, l, p;
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      var hostEnd = -1;
      for (i = 0; i < hostEndingChars.length; i++) {
        hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      var auth, atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf('@');
      } else {
        atSign = rest.lastIndexOf('@', hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        self.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (i = 0; i < nonHostChars.length; i++) {
        hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      if (hostEnd === -1) hostEnd = rest.length;
      self.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      parseHost(self);
      self.hostname = self.hostname || '';
      var ipv6Hostname = self.hostname[0] === '[' && self.hostname[self.hostname.length - 1] === ']';
      if (!ipv6Hostname) {
        var hostparts = self.hostname.split(/\./);
        for (i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              self.hostname = validParts.join('.');
              break;
            }
          }
        }
      }
      if (self.hostname.length > hostnameMaxLen) {
        self.hostname = '';
      } else {
        self.hostname = self.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        self.hostname = toASCII(self.hostname);
      }
      p = self.port ? ':' + self.port : '';
      var h = self.hostname || '';
      self.host = h + p;
      self.href += self.host;
      if (ipv6Hostname) {
        self.hostname = self.hostname.substr(1, self.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }
    if (!unsafeProtocol[lowerProto]) {
      for (i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      self.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      self.search = rest.substr(qm);
      self.query = rest.substr(qm + 1);
      if (parseQueryString) {
        self.query = parse$3(self.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      self.search = '';
      self.query = {};
    }
    if (rest) self.pathname = rest;
    if (slashedProtocol[lowerProto] && self.hostname && !self.pathname) {
      self.pathname = '/';
    }
    if (self.pathname || self.search) {
      p = self.pathname || '';
      var s = self.search || '';
      self.path = p + s;
    }
    self.href = format(self);
    return self;
  }
  function format(self) {
    var auth = self.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }
    var protocol = self.protocol || '',
      pathname = self.pathname || '',
      hash = self.hash || '',
      host = false,
      query = '';
    if (self.host) {
      host = auth + self.host;
    } else if (self.hostname) {
      host = auth + (self.hostname.indexOf(':') === -1 ? self.hostname : '[' + this.hostname + ']');
      if (self.port) {
        host += ':' + self.port;
      }
    }
    if (self.query && isObject(self.query) && Object.keys(self.query).length) {
      query = stringify$2(self.query);
    }
    var search = self.search || query && '?' + query || '';
    if (protocol && protocol.substr(-1) !== ':') protocol += ':';
    if (self.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }
    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
    return protocol + host + pathname + search + hash;
  }
  Url.prototype.format = function () {
    return format(this);
  };
  Url.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  Url.prototype.resolveObject = function (relative) {
    if (isString$1(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
    result.hash = relative.hash;
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }
    if (relative.slashes && !relative.protocol) {
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol') result[rkey] = relative[rkey];
      }
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }
      result.href = result.format();
      return result;
    }
    var relPath;
    if (relative.protocol && relative.protocol !== result.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()));
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];
    relPath = relative.pathname && relative.pathname.split('/') || [];
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
    var authInHost;
    if (isRelAbs) {
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!isNullOrUndefined(relative.search)) {
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      result.pathname = null;
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }
    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
      srcPath.push('');
    }
    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  Url.prototype.parseHost = function () {
    return parseHost(this);
  };
  function parseHost(self) {
    var host = self.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        self.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) self.hostname = host;
  }

  function request(opts, cb) {
    if (typeof opts === 'string') opts = urlParse(opts);
    var defaultProtocol = global$1.location.protocol.search(/^https?:$/) === -1 ? 'http:' : '';
    var protocol = opts.protocol || defaultProtocol;
    var host = opts.hostname || opts.host;
    var port = opts.port;
    var path = opts.path || '/';
    if (host && host.indexOf(':') !== -1) host = '[' + host + ']';
    opts.url = (host ? protocol + '//' + host : '') + (port ? ':' + port : '') + path;
    opts.method = (opts.method || 'GET').toUpperCase();
    opts.headers = opts.headers || {};
    var req = new ClientRequest(opts);
    if (cb) req.on('response', cb);
    return req;
  }
  function get(opts, cb) {
    var req = request(opts, cb);
    req.end();
    return req;
  }
  function Agent() {}
  Agent.defaultMaxSockets = 4;
  var METHODS = ['CHECKOUT', 'CONNECT', 'COPY', 'DELETE', 'GET', 'HEAD', 'LOCK', 'M-SEARCH', 'MERGE', 'MKACTIVITY', 'MKCOL', 'MOVE', 'NOTIFY', 'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH', 'PURGE', 'PUT', 'REPORT', 'SEARCH', 'SUBSCRIBE', 'TRACE', 'UNLOCK', 'UNSUBSCRIBE'];
  var STATUS_CODES = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Moved Temporarily',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Time-out',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Large',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a teapot',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Unordered Collection',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Time-out',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',
    511: 'Network Authentication Required'
  };
  var http = {
    request: request,
    get: get,
    Agent: Agent,
    METHODS: METHODS,
    STATUS_CODES: STATUS_CODES
  };

  var http$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    request: request,
    get: get,
    Agent: Agent,
    METHODS: METHODS,
    STATUS_CODES: STATUS_CODES,
    'default': http
  });

  function normalizeArray(parts, allowAboveRoot) {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up--; up) {
        parts.unshift('..');
      }
    }
    return parts;
  }
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  var splitPath = function splitPath(filename) {
    return splitPathRe.exec(filename).slice(1);
  };
  function resolve() {
    var resolvedPath = '',
      resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? arguments[i] : '/';
      if (typeof path !== 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        continue;
      }
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charAt(0) === '/';
    }
    resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
      return !!p;
    }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
  }
  function normalize(path) {
    var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';
    path = normalizeArray(filter(path.split('/'), function (p) {
      return !!p;
    }), !isPathAbsolute).join('/');
    if (!path && !isPathAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }
    return (isPathAbsolute ? '/' : '') + path;
  }
  function isAbsolute(path) {
    return path.charAt(0) === '/';
  }
  function join() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return normalize(filter(paths, function (p, index) {
      if (typeof p !== 'string') {
        throw new TypeError('Arguments to path.join must be strings');
      }
      return p;
    }).join('/'));
  }
  function relative(from, to) {
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
  }
  var sep = '/';
  var delimiter = ':';
  function dirname(path) {
    var result = splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return '.';
    }
    if (dir) {
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  }
  function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(-1 * ext.length) === ext) {
      f = f.substr(0, f.length - ext.length);
    }
    return f;
  }
  function extname(path) {
    return splitPath(path)[3];
  }
  var path$1 = {
    extname: extname,
    basename: basename,
    dirname: dirname,
    sep: sep,
    delimiter: delimiter,
    relative: relative,
    join: join,
    isAbsolute: isAbsolute,
    normalize: normalize,
    resolve: resolve
  };
  function filter(xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
  }
  var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
    return str.substr(start, len);
  } : function (str, start, len) {
    if (start < 0) start = str.length + start;
    return str.substr(start, len);
  };

  var path$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    sep: sep,
    delimiter: delimiter,
    dirname: dirname,
    basename: basename,
    extname: extname,
    'default': path$1
  });

  var esErrors = Error;

  var _eval = EvalError;

  var range = RangeError;

  var ref = ReferenceError;

  var syntax = SyntaxError;

  var type = TypeError;

  var uri = URIError;

  var shams = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
      return false;
    }
    if (_typeof(Symbol.iterator) === 'symbol') {
      return true;
    }
    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) {
      return false;
    }
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };

  var origSymbol = typeof Symbol !== 'undefined' && Symbol;
  var hasSymbols$1 = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
      return false;
    }
    if (typeof Symbol !== 'function') {
      return false;
    }
    if (_typeof(origSymbol('foo')) !== 'symbol') {
      return false;
    }
    if (_typeof(Symbol('bar')) !== 'symbol') {
      return false;
    }
    return shams();
  };

  var test = {
    __proto__: null,
    foo: {}
  };
  var $Object = Object;
  var hasProto$1 = function hasProto() {
    return {
      __proto__: test
    }.foo === test.foo && !(test instanceof $Object);
  };

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var toStr$1 = Object.prototype.toString;
  var max = Math.max;
  var funcType = '[object Function]';
  var concatty = function concatty(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
      arr[j + a.length] = b[j];
    }
    return arr;
  };
  var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function joiny(arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  var implementation = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$1.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function binder() {
      if (this instanceof bound) {
        var result = target.apply(this, concatty(args, arguments));
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
      var Empty = function Empty() {};
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };

  var functionBind = Function.prototype.bind || implementation;

  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var hasown = functionBind.call(call, $hasOwn);

  var $Error = esErrors;

  var $EvalError = _eval;

  var $RangeError = range;

  var $ReferenceError = ref;

  var $SyntaxError = syntax;

  var $TypeError = type;

  var $URIError = uri;

  var require$$1 = hasProto$1;

  var hasOwn$1 = hasown;

  var undefined$1;
  var $Function = Function;
  var getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
  };
  var $gOPD$1 = Object.getOwnPropertyDescriptor;
  if ($gOPD$1) {
    try {
      $gOPD$1({}, '');
    } catch (e) {
      $gOPD$1 = null;
    }
  }
  var throwTypeError = function throwTypeError() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD$1 ? function () {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD$1(arguments, 'callee').get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols = hasSymbols$1();
  var hasProto = require$$1();
  var getProto = Object.getPrototypeOf || (hasProto ? function (x) {
    return x.__proto__;
  } : null);
  var needsEval = {};
  var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
    '%AsyncFromSyncIteratorPrototype%': undefined$1,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
    '%JSON%': (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object' ? JSON : undefined$1,
    '%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
    '%Symbol%': hasSymbols ? Symbol : undefined$1,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
  };
  if (getProto) {
    try {
      null.error;
    } catch (e) {
      var errorProto = getProto(getProto(e));
      INTRINSICS['%Error.prototype%'] = errorProto;
    }
  }
  var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
      value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
      value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
      value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
      var fn = doEval('%AsyncGeneratorFunction%');
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === '%AsyncIteratorPrototype%') {
      var gen = doEval('%AsyncGenerator%');
      if (gen && getProto) {
        value = getProto(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype']
  };
  var $concat$1 = functionBind.call(Function.call, Array.prototype.concat);
  var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
  var $replace$1 = functionBind.call(Function.call, String.prototype.replace);
  var $strSlice = functionBind.call(Function.call, String.prototype.slice);
  var $exec = functionBind.call(Function.call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
      throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
      throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace$1(string, rePropName, function (match, number, quote, subString) {
      result[result.length] = quote ? $replace$1(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn$1(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === 'undefined' && !allowMissing) {
        throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
      }
      return {
        alias: alias,
        name: intrinsicName,
        value: value
      };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
  };
  var getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat$1([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
        throw new $SyntaxError('property names with quotes must have matching quotes');
      }
      if (part === 'constructor' || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += '.' + part;
      intrinsicRealName = '%' + intrinsicBaseName + '%';
      if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
          }
          return void undefined$1;
        }
        if ($gOPD$1 && i + 1 >= parts.length) {
          var desc = $gOPD$1(value, part);
          isOwn = !!desc;
          if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn$1(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };

  var GetIntrinsic = getIntrinsic;

  var $defineProperty$1 = GetIntrinsic('%Object.defineProperty%', true) || false;
  if ($defineProperty$1) {
    try {
      $defineProperty$1({}, 'a', {
        value: 1
      });
    } catch (e) {
      $defineProperty$1 = false;
    }
  }
  var esDefineProperty = $defineProperty$1;

  var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
  if ($gOPD) {
    try {
      $gOPD([], 'length');
    } catch (e) {
      $gOPD = null;
    }
  }
  var gopd = $gOPD;

  var $defineProperty = esDefineProperty;

  var gOPD = gopd;

  var defineDataProperty = function defineDataProperty(obj, property, value) {
    if (!obj || _typeof(obj) !== 'object' && typeof obj !== 'function') {
      throw new $TypeError('`obj` must be an object or a function`');
    }
    if (typeof property !== 'string' && _typeof(property) !== 'symbol') {
      throw new $TypeError('`property` must be a string or a symbol`');
    }
    if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
      throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
      throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
      throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
      throw new $TypeError('`loose`, if provided, must be a boolean');
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    var desc = !!gOPD && gOPD(obj, property);
    if ($defineProperty) {
      $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
      });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
      obj[property] = value;
    } else {
      throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
    }
  };

  var hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$defineProperty;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!$defineProperty) {
      return null;
    }
    try {
      return $defineProperty([], 'length', {
        value: 1
      }).length !== 1;
    } catch (e) {
      return true;
    }
  };
  var hasPropertyDescriptors_1 = hasPropertyDescriptors;

  var define = defineDataProperty;

  var require$$0 = hasPropertyDescriptors_1;

  var hasDescriptors = require$$0();
  var $floor$1 = GetIntrinsic('%Math.floor%');
  var setFunctionLength$1 = function setFunctionLength(fn, length) {
    if (typeof fn !== 'function') {
      throw new $TypeError('`fn` is not a function');
    }
    if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor$1(length) !== length) {
      throw new $TypeError('`length` must be a positive 32-bit integer');
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ('length' in fn && gOPD) {
      var desc = gOPD(fn, 'length');
      if (desc && !desc.configurable) {
        functionLengthIsConfigurable = false;
      }
      if (desc && !desc.writable) {
        functionLengthIsWritable = false;
      }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
      if (hasDescriptors) {
        define(fn, 'length', length, true, true);
      } else {
        define(fn, 'length', length);
      }
    }
    return fn;
  };

  var setFunctionLength = setFunctionLength$1;

  var callBind = createCommonjsModule(function (module) {
    var $apply = GetIntrinsic('%Function.prototype.apply%');
    var $call = GetIntrinsic('%Function.prototype.call%');
    var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || functionBind.call($call, $apply);
    var $max = GetIntrinsic('%Math.max%');
    module.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== 'function') {
        throw new $TypeError('a function is required');
      }
      var func = $reflectApply(functionBind, $call, arguments);
      return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
    };
    var applyBind = function applyBind() {
      return $reflectApply(functionBind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, 'apply', {
        value: applyBind
      });
    } else {
      module.exports.apply = applyBind;
    }
  });

  var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
  var callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
      return callBind(intrinsic);
    }
    return intrinsic;
  };

  var _nodeResolve_empty = {};

  var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
  });

  var utilInspect = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

  var hasMap = typeof Map === 'function' && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === 'function' && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'object';
  var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (_typeof(Symbol.toStringTag) === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (O) {
    return O.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
      var _int = num < 0 ? -$floor(-num) : $floor(num);
      if (_int !== num) {
        var intStr = String(_int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
      }
    }
    return $replace.call(str, sepRegex, '$&_');
  }
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
  var objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has$3(opts, 'quoteStyle') && opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double') {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has$3(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has$3(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
      throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }
    if (has$3(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has$3(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') {
      return 'undefined';
    }
    if (obj === null) {
      return 'null';
    }
    if (typeof obj === 'boolean') {
      return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
      return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
      if (obj === 0) {
        return Infinity / obj > 0 ? '0' : '-0';
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
      var bigIntStr = String(obj) + 'n';
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && _typeof(obj) === 'object') {
      return isArray$3(obj) ? '[Array]' : '[Object]';
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') {
      seen = [];
    } else if (indexOf(seen, obj) >= 0) {
      return '[Circular]';
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen = $arrSlice.call(seen);
        seen.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has$3(opts, 'quoteStyle')) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen);
      }
      return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp$1(obj)) {
      var name = nameOf(obj);
      var keys = arrObjKeys(obj, inspect);
      return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
      return _typeof(obj) === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
      var s = '<' + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i = 0; i < attrs.length; i++) {
        s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
      }
      s += '>';
      if (obj.childNodes && obj.childNodes.length) {
        s += '...';
      }
      s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
      return s;
    }
    if (isArray$3(obj)) {
      if (obj.length === 0) {
        return '[]';
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return '[' + indentedJoin(xs, indent) + ']';
      }
      return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
        return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
      }
      if (parts.length === 0) {
        return '[' + String(obj) + ']';
      }
      return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (_typeof(obj) === 'object' && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
        return utilInspect(obj, {
          depth: maxDepth - depth
        });
      } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
        return obj.inspect();
      }
    }
    if (isMap(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function (value, key) {
          mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
      }
      return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function (value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== 'undefined' && obj === window) {
      return '{ [object Window] }';
    }
    if (obj === commonjsGlobal) {
      return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp$1(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? '' : 'null prototype';
      var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
      var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
      var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
      if (ys.length === 0) {
        return tag + '{}';
      }
      if (indent) {
        return tag + '{' + indentedJoin(ys, indent) + '}';
      }
      return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
  };
  function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
  }
  function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
  }
  function isArray$3(obj) {
    return toStr(obj) === '[object Array]' && (!toStringTag || !(_typeof(obj) === 'object' && toStringTag in obj));
  }
  function isDate(obj) {
    return toStr(obj) === '[object Date]' && (!toStringTag || !(_typeof(obj) === 'object' && toStringTag in obj));
  }
  function isRegExp$1(obj) {
    return toStr(obj) === '[object RegExp]' && (!toStringTag || !(_typeof(obj) === 'object' && toStringTag in obj));
  }
  function isError(obj) {
    return toStr(obj) === '[object Error]' && (!toStringTag || !(_typeof(obj) === 'object' && toStringTag in obj));
  }
  function isString(obj) {
    return toStr(obj) === '[object String]' && (!toStringTag || !(_typeof(obj) === 'object' && toStringTag in obj));
  }
  function isNumber(obj) {
    return toStr(obj) === '[object Number]' && (!toStringTag || !(_typeof(obj) === 'object' && toStringTag in obj));
  }
  function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && (!toStringTag || !(_typeof(obj) === 'object' && toStringTag in obj));
  }
  function isSymbol(obj) {
    if (hasShammedSymbols) {
      return obj && _typeof(obj) === 'object' && obj instanceof Symbol;
    }
    if (_typeof(obj) === 'symbol') {
      return true;
    }
    if (!obj || _typeof(obj) !== 'object' || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e) {}
    return false;
  }
  function isBigInt(obj) {
    if (!obj || _typeof(obj) !== 'object' || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e) {}
    return false;
  }
  var hasOwn = Object.prototype.hasOwnProperty || function (key) {
    return key in this;
  };
  function has$3(obj, key) {
    return hasOwn.call(obj, key);
  }
  function toStr(obj) {
    return objectToString.call(obj);
  }
  function nameOf(f) {
    if (f.name) {
      return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
      return m[1];
    }
    return null;
  }
  function indexOf(xs, x) {
    if (xs.indexOf) {
      return xs.indexOf(x);
    }
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  }
  function isMap(x) {
    if (!mapSize || !x || _typeof(x) !== 'object') {
      return false;
    }
    try {
      mapSize.call(x);
      try {
        setSize.call(x);
      } catch (s) {
        return true;
      }
      return x instanceof Map;
    } catch (e) {}
    return false;
  }
  function isWeakMap(x) {
    if (!weakMapHas || !x || _typeof(x) !== 'object') {
      return false;
    }
    try {
      weakMapHas.call(x, weakMapHas);
      try {
        weakSetHas.call(x, weakSetHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakMap;
    } catch (e) {}
    return false;
  }
  function isWeakRef(x) {
    if (!weakRefDeref || !x || _typeof(x) !== 'object') {
      return false;
    }
    try {
      weakRefDeref.call(x);
      return true;
    } catch (e) {}
    return false;
  }
  function isSet(x) {
    if (!setSize || !x || _typeof(x) !== 'object') {
      return false;
    }
    try {
      setSize.call(x);
      try {
        mapSize.call(x);
      } catch (m) {
        return true;
      }
      return x instanceof Set;
    } catch (e) {}
    return false;
  }
  function isWeakSet(x) {
    if (!weakSetHas || !x || _typeof(x) !== 'object') {
      return false;
    }
    try {
      weakSetHas.call(x, weakSetHas);
      try {
        weakMapHas.call(x, weakMapHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakSet;
    } catch (e) {}
    return false;
  }
  function isElement(x) {
    if (!x || _typeof(x) !== 'object') {
      return false;
    }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
      return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
  }
  function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
      8: 'b',
      9: 't',
      10: 'n',
      12: 'f',
      13: 'r'
    }[n];
    if (x) {
      return '\\' + x;
    }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
  }
  function markBoxed(str) {
    return 'Object(' + str + ')';
  }
  function weakCollectionOf(type) {
    return type + ' { ? }';
  }
  function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
  }
  function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
      if (indexOf(xs[i], '\n') >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
      baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return '';
    }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray$3(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i = 0; i < obj.length; i++) {
        xs[i] = has$3(obj, i) ? inspect(obj[i], obj) : '';
      }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k = 0; k < syms.length; k++) {
        symMap['$' + syms[k]] = syms[k];
      }
    }
    for (var key in obj) {
      if (!has$3(obj, key)) {
        continue;
      }
      if (isArr && String(Number(key)) === key && key < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key)) {
        xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
      } else {
        xs.push(key + ': ' + inspect(obj[key], obj));
      }
    }
    if (typeof gOPS === 'function') {
      for (var j = 0; j < syms.length; j++) {
        if (isEnumerable.call(obj, syms[j])) {
          xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
        }
      }
    }
    return xs;
  }

  var inspect = objectInspect;

  var $WeakMap = GetIntrinsic('%WeakMap%', true);
  var $Map = GetIntrinsic('%Map%', true);
  var $weakMapGet = callBound('WeakMap.prototype.get', true);
  var $weakMapSet = callBound('WeakMap.prototype.set', true);
  var $weakMapHas = callBound('WeakMap.prototype.has', true);
  var $mapGet = callBound('Map.prototype.get', true);
  var $mapSet = callBound('Map.prototype.set', true);
  var $mapHas = callBound('Map.prototype.has', true);
  var listGetNode = function listGetNode(list, key) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) !== null; prev = curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        curr.next = list.next;
        list.next = curr;
        return curr;
      }
    }
  };
  var listGet = function listGet(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
  };
  var listSet = function listSet(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
      node.value = value;
    } else {
      objects.next = {
        key: key,
        next: objects.next,
        value: value
      };
    }
  };
  var listHas = function listHas(objects, key) {
    return !!listGetNode(objects, key);
  };
  var sideChannel = function getSideChannel() {
    var $wm;
    var $m;
    var $o;
    var channel = {
      assert: function assert(key) {
        if (!channel.has(key)) {
          throw new $TypeError('Side channel does not contain ' + inspect(key));
        }
      },
      get: function get(key) {
        if ($WeakMap && key && (_typeof(key) === 'object' || typeof key === 'function')) {
          if ($wm) {
            return $weakMapGet($wm, key);
          }
        } else if ($Map) {
          if ($m) {
            return $mapGet($m, key);
          }
        } else {
          if ($o) {
            return listGet($o, key);
          }
        }
      },
      has: function has(key) {
        if ($WeakMap && key && (_typeof(key) === 'object' || typeof key === 'function')) {
          if ($wm) {
            return $weakMapHas($wm, key);
          }
        } else if ($Map) {
          if ($m) {
            return $mapHas($m, key);
          }
        } else {
          if ($o) {
            return listHas($o, key);
          }
        }
        return false;
      },
      set: function set(key, value) {
        if ($WeakMap && key && (_typeof(key) === 'object' || typeof key === 'function')) {
          if (!$wm) {
            $wm = new $WeakMap();
          }
          $weakMapSet($wm, key, value);
        } else if ($Map) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        } else {
          if (!$o) {
            $o = {
              key: {},
              next: null
            };
          }
          listSet($o, key, value);
        }
      }
    };
    return channel;
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
  };
  var formats$1 = {
    'default': Format.RFC3986,
    formatters: {
      RFC1738: function RFC1738(value) {
        return replace.call(value, percentTwenties, '+');
      },
      RFC3986: function RFC3986(value) {
        return String(value);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  };

  var formats = formats$1;

  var has$2 = Object.prototype.hasOwnProperty;
  var isArray$2 = Array.isArray;
  var hexTable = function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
      array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }
    return array;
  }();
  var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
      var item = queue.pop();
      var obj = item.obj[item.prop];
      if (isArray$2(obj)) {
        var compacted = [];
        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== 'undefined') {
            compacted.push(obj[j]);
          }
        }
        item.obj[item.prop] = compacted;
      }
    }
  };
  var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
      if (typeof source[i] !== 'undefined') {
        obj[i] = source[i];
      }
    }
    return obj;
  };
  var merge = function merge(target, source, options) {
    if (!source) {
      return target;
    }
    if (_typeof(source) !== 'object') {
      if (isArray$2(target)) {
        target.push(source);
      } else if (target && _typeof(target) === 'object') {
        if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }
      return target;
    }
    if (!target || _typeof(target) !== 'object') {
      return [target].concat(source);
    }
    var mergeTarget = target;
    if (isArray$2(target) && !isArray$2(source)) {
      mergeTarget = arrayToObject(target, options);
    }
    if (isArray$2(target) && isArray$2(source)) {
      source.forEach(function (item, i) {
        if (has$2.call(target, i)) {
          var targetItem = target[i];
          if (targetItem && _typeof(targetItem) === 'object' && item && _typeof(item) === 'object') {
            target[i] = merge(targetItem, item, options);
          } else {
            target.push(item);
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }
    return Object.keys(source).reduce(function (acc, key) {
      var value = source[key];
      if (has$2.call(acc, key)) {
        acc[key] = merge(acc[key], value, options);
      } else {
        acc[key] = value;
      }
      return acc;
    }, mergeTarget);
  };
  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
      acc[key] = source[key];
      return acc;
    }, target);
  };
  var decode = function decode(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };
  var encode = function encode(str, defaultEncoder, charset, kind, format) {
    if (str.length === 0) {
      return str;
    }
    var string = str;
    if (_typeof(str) === 'symbol') {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
      string = String(str);
    }
    if (charset === 'iso-8859-1') {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
        return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
      });
    }
    var out = '';
    for (var i = 0; i < string.length; ++i) {
      var c = string.charCodeAt(i);
      if (c === 0x2D || c === 0x2E || c === 0x5F || c === 0x7E || c >= 0x30 && c <= 0x39 || c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || format === formats.RFC1738 && (c === 0x28 || c === 0x29)) {
        out += string.charAt(i);
        continue;
      }
      if (c < 0x80) {
        out = out + hexTable[c];
        continue;
      }
      if (c < 0x800) {
        out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
        continue;
      }
      if (c < 0xD800 || c >= 0xE000) {
        out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
        continue;
      }
      i += 1;
      c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
      out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }
    return out;
  };
  var compact = function compact(value) {
    var queue = [{
      obj: {
        o: value
      },
      prop: 'o'
    }];
    var refs = [];
    for (var i = 0; i < queue.length; ++i) {
      var item = queue[i];
      var obj = item.obj[item.prop];
      var keys = Object.keys(obj);
      for (var j = 0; j < keys.length; ++j) {
        var key = keys[j];
        var val = obj[key];
        if (_typeof(val) === 'object' && val !== null && refs.indexOf(val) === -1) {
          queue.push({
            obj: obj,
            prop: key
          });
          refs.push(val);
        }
      }
    }
    compactQueue(queue);
    return value;
  };
  var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  };
  var isBuffer = function isBuffer(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  var combine = function combine(a, b) {
    return [].concat(a, b);
  };
  var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
      var mapped = [];
      for (var i = 0; i < val.length; i += 1) {
        mapped.push(fn(val[i]));
      }
      return mapped;
    }
    return fn(val);
  };
  var utils$1 = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
  };

  var utils = utils$1;

  var has$1 = Object.prototype.hasOwnProperty;
  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
      return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
      return prefix;
    }
  };
  var isArray$1 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function pushToArray(arr, valueOrArray) {
    push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats['default'];
  var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: 'indices',
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || _typeof(v) === 'symbol' || typeof v === 'bigint';
  };
  var sentinel = {};
  var stringify$1 = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel$1) {
    var obj = object;
    var tmpSc = sideChannel$1;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
      var pos = tmpSc.get(object);
      step += 1;
      if (typeof pos !== 'undefined') {
        if (pos === step) {
          throw new RangeError('Cyclic object value');
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === 'undefined') {
        step = 0;
      }
    }
    if (typeof filter === 'function') {
      obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
      obj = utils.maybeMap(obj, function (value) {
        if (value instanceof Date) {
          return serializeDate(value);
        }
        return value;
      });
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key', format) : prefix;
      }
      obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
      if (encoder) {
        var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key', format);
        return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value', format))];
      }
      return [formatter(prefix) + '=' + formatter(String(obj))];
    }
    var values = [];
    if (typeof obj === 'undefined') {
      return values;
    }
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
      if (encodeValuesOnly && encoder) {
        obj = utils.maybeMap(obj, encoder);
      }
      objKeys = [{
        value: obj.length > 0 ? obj.join(',') || null : void undefined
      }];
    } else if (isArray$1(filter)) {
      objKeys = filter;
    } else {
      var keys = Object.keys(obj);
      objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, '%2E') : prefix;
    var adjustedPrefix = commaRoundTrip && isArray$1(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
    if (allowEmptyArrays && isArray$1(obj) && obj.length === 0) {
      return adjustedPrefix + '[]';
    }
    for (var j = 0; j < objKeys.length; ++j) {
      var key = objKeys[j];
      var value = _typeof(key) === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
      if (skipNulls && value === null) {
        continue;
      }
      var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, '%2E') : key;
      var keyPrefix = isArray$1(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
      sideChannel$1.set(object, step);
      var valueSideChannel = sideChannel();
      valueSideChannel.set(sentinel, sideChannel$1);
      pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray$1(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
  };
  var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
      return defaults$1;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
      throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
      throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
      throw new TypeError('Encoder has to be a function.');
    }
    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
      if (!has$1.call(formats.formatters, opts.format)) {
        throw new TypeError('Unknown format option provided.');
      }
      format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults$1.filter;
    if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
      filter = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = opts.arrayFormat;
    } else if ('indices' in opts) {
      arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
      arrayFormat = defaults$1.arrayFormat;
    }
    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
      throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults$1.allowDots : !!opts.allowDots;
    return {
      addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
      allowDots: allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults$1.allowEmptyArrays,
      arrayFormat: arrayFormat,
      charset: charset,
      charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
      commaRoundTrip: opts.commaRoundTrip,
      delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
      encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
      encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults$1.encodeDotInKeys,
      encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
      encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
      filter: filter,
      format: format,
      formatter: formatter,
      serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
      skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
      sort: typeof opts.sort === 'function' ? opts.sort : null,
      strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
  };
  var stringify_1 = function stringify_1(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
      filter = options.filter;
      obj = filter('', obj);
    } else if (isArray$1(options.filter)) {
      filter = options.filter;
      objKeys = filter;
    }
    var keys = [];
    if (_typeof(obj) !== 'object' || obj === null) {
      return '';
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
    if (!objKeys) {
      objKeys = Object.keys(obj);
    }
    if (options.sort) {
      objKeys.sort(options.sort);
    }
    var sideChannel$1 = sideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
      var key = objKeys[i];
      if (options.skipNulls && obj[key] === null) {
        continue;
      }
      pushToArray(keys, stringify$1(obj[key], key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel$1));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
      if (options.charset === 'iso-8859-1') {
        prefix += 'utf8=%26%2310003%3B&';
      } else {
        prefix += 'utf8=%E2%9C%93&';
      }
    }
    return joined.length > 0 ? prefix + joined : '';
  };

  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: true,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    duplicates: 'combine',
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
  };
  var interpretNumericEntities = function interpretNumericEntities(str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };
  var parseArrayValue = function parseArrayValue(val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
      return val.split(',');
    }
    return val;
  };
  var isoSentinel = 'utf8=%26%2310003%3B';
  var charsetSentinel = 'utf8=%E2%9C%93';
  var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
      __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1;
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf('utf8=') === 0) {
          if (parts[i] === charsetSentinel) {
            charset = 'utf-8';
          } else if (parts[i] === isoSentinel) {
            charset = 'iso-8859-1';
          }
          skipIndex = i;
          i = parts.length;
        }
      }
    }
    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }
      var part = parts[i];
      var bracketEqualsPos = part.indexOf(']=');
      var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
      var key, val;
      if (pos === -1) {
        key = options.decoder(part, defaults.decoder, charset, 'key');
        val = options.strictNullHandling ? null : '';
      } else {
        key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
        val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function (encodedVal) {
          return options.decoder(encodedVal, defaults.decoder, charset, 'value');
        });
      }
      if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
        val = interpretNumericEntities(val);
      }
      if (part.indexOf('[]=') > -1) {
        val = isArray(val) ? [val] : val;
      }
      var existing = has.call(obj, key);
      if (existing && options.duplicates === 'combine') {
        obj[key] = utils.combine(obj[key], val);
      } else if (!existing || options.duplicates === 'last') {
        obj[key] = val;
      }
    }
    return obj;
  };
  var parseObject = function parseObject(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for (var i = chain.length - 1; i >= 0; --i) {
      var obj;
      var root = chain[i];
      if (root === '[]' && options.parseArrays) {
        obj = options.allowEmptyArrays && leaf === '' ? [] : [].concat(leaf);
      } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
        var index = parseInt(decodedRoot, 10);
        if (!options.parseArrays && decodedRoot === '') {
          obj = {
            0: leaf
          };
        } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
          obj = [];
          obj[index] = leaf;
        } else if (decodedRoot !== '__proto__') {
          obj[decodedRoot] = leaf;
        }
      }
      leaf = obj;
    }
    return leaf;
  };
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    }
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
      if (!options.plainObjects && has.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(parent);
    }
    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
      i += 1;
      if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(segment[1]);
    }
    if (segment) {
      keys.push('[' + key.slice(segment.index) + ']');
    }
    return parseObject(keys, val, options, valuesParsed);
  };
  var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
      return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
      throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
      throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
      throw new TypeError('Decoder has to be a function.');
    }
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
      throw new TypeError('The duplicates option must be either combine, first, or last');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
      allowDots: allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
      allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
      allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
      arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
      charset: charset,
      charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
      comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
      decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
      decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
      delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
      depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
      duplicates: duplicates,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
      strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
  };
  var parse$1 = function parse(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') {
      return options.plainObjects ? Object.create(null) : {};
    }
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
      obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
      return obj;
    }
    return utils.compact(obj);
  };

  var stringify = stringify_1;

  var parse = parse$1;

  var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify
  };

  var qs = lib;

  var utils_1 = createCommonjsModule(function (module) {
    var hasOwn = function hasOwn(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    var OPTIONS_KEYS = ['maxNetworkRetries', 'timeout'];
    var DEPRECATED_OPTIONS = {};
    var DEPRECATED_OPTIONS_KEYS = Object.keys(DEPRECATED_OPTIONS);
    var utils = module.exports = {
      isOptionsHash: function isOptionsHash(o) {
        return o && _typeof(o) === 'object' && (OPTIONS_KEYS.some(function (prop) {
          return hasOwn(o, prop);
        }) || DEPRECATED_OPTIONS_KEYS.some(function (prop) {
          return hasOwn(o, prop);
        }));
      },
      stringifyRequestData: function stringifyRequestData(data) {
        return qs.stringify(data, {
          serializeDate: function serializeDate(d) {
            return Math.floor(d.getTime() / 1000);
          }
        }).replace(/%5B/g, '[').replace(/%5D/g, ']');
      },
      makeURLInterpolator: function () {
        var rc = {
          '\n': '\\n',
          '"': '\\"',
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
        };
        return function (str) {
          var cleanString = str.replace(/["\n\r\u2028\u2029]/g, function ($0) {
            return rc[$0];
          });
          return function (outputs) {
            return cleanString.replace(/\{([\s\S]+?)\}/g, function ($0, $1) {
              return encodeURIComponent(outputs[$1] || '');
            });
          };
        };
      }(),
      extractUrlParams: function extractUrlParams(path) {
        var params = path.match(/\{\w+\}/g);
        if (!params) {
          return [];
        }
        return params.map(function (param) {
          return param.replace(/[{}]/g, '');
        });
      },
      getDataFromArgs: function getDataFromArgs(args) {
        if (!Array.isArray(args) || !args[0] || _typeof(args[0]) !== 'object') {
          return {};
        }
        if (!utils.isOptionsHash(args[0])) {
          return args.shift();
        }
        var argKeys = Object.keys(args[0]);
        var optionKeysInArgs = argKeys.filter(function (key) {
          return OPTIONS_KEYS.includes(key);
        });
        if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
          emitWarning("Options found in arguments (".concat(optionKeysInArgs.join(', '), "). Did you mean to pass an options object? See https://github.com/swiftyper-sk/swiftyper-node/wiki/Passing-Options."));
        }
        return {};
      },
      getOptionsFromArgs: function getOptionsFromArgs(args) {
        var opts = {
          auth: null,
          headers: {},
          settings: {}
        };
        if (args.length > 0) {
          var arg = args[args.length - 1];
          if (typeof arg === 'string') {
            opts.auth = args.pop();
          } else if (utils.isOptionsHash(arg)) {
            var params = _objectSpread2({}, args.pop());
            var extraKeys = Object.keys(params).filter(function (key) {
              return !OPTIONS_KEYS.includes(key);
            });
            if (extraKeys.length) {
              var nonDeprecated = extraKeys.filter(function (key) {
                if (!DEPRECATED_OPTIONS[key]) {
                  return true;
                }
                var newParam = DEPRECATED_OPTIONS[key];
                if (params[newParam]) {
                  throw Error("Both '".concat(newParam, "' and '").concat(key, "' were provided; please remove '").concat(key, "', which is deprecated."));
                }
                emitWarning("'".concat(key, "' is deprecated; use '").concat(newParam, "' instead."));
                params[newParam] = params[key];
              });
              if (nonDeprecated.length) {
                emitWarning("Invalid options found (".concat(extraKeys.join(', '), "); ignoring."));
              }
            }
            if (Number.isInteger(params.maxNetworkRetries)) {
              opts.settings.maxNetworkRetries = params.maxNetworkRetries;
            }
            if (Number.isInteger(params.timeout)) {
              opts.settings.timeout = params.timeout;
            }
          }
        }
        return opts;
      },
      protoExtend: function protoExtend(sub) {
        var Super = this;
        var Constructor = hasOwn(sub, 'constructor') ? sub.constructor : function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Super.apply(this, args);
        };
        Object.assign(Constructor, Super);
        Constructor.prototype = Object.create(Super.prototype);
        Object.assign(Constructor.prototype, sub);
        return Constructor;
      },
      removeNullish: function removeNullish(obj) {
        if (_typeof(obj) !== 'object') {
          throw new Error('Argument must be an object');
        }
        return Object.keys(obj).reduce(function (result, key) {
          if (obj[key] != null) {
            result[key] = obj[key];
          }
          return result;
        }, {});
      },
      normalizeHeaders: function normalizeHeaders(obj) {
        if (!(obj && _typeof(obj) === 'object')) {
          return obj;
        }
        return Object.keys(obj).reduce(function (result, header) {
          result[utils.normalizeHeader(header)] = obj[header];
          return result;
        }, {});
      },
      normalizeHeader: function normalizeHeader(header) {
        return header.split('-').map(function (text) {
          return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        }).join('-');
      },
      callbackifyPromiseWithTimeout: function callbackifyPromiseWithTimeout(promise, callback) {
        if (callback) {
          return promise.then(function (res) {
            setTimeout(function () {
              callback(null, res);
            }, 0);
          }, function (err) {
            setTimeout(function () {
              callback(err, null);
            }, 0);
          });
        }
        return promise;
      },
      pascalToCamelCase: function pascalToCamelCase(name) {
        return name[0].toLowerCase() + name.substring(1);
      },
      emitWarning: emitWarning,
      validateInteger: function validateInteger(name, n, defaultVal) {
        if (!Number.isInteger(n)) {
          if (defaultVal !== undefined) {
            return defaultVal;
          } else {
            throw new Error("".concat(name, " must be an integer"));
          }
        }
        return n;
      }
    };
    function emitWarning(warning) {
      if (typeof process.emitWarning !== 'function') {
        return console.warn("Swiftyper: ".concat(warning));
      }
      return process.emitWarning(warning, 'Swiftyper');
    }
  });

  var SwiftyperError$1 = function (_Error2) {
    _inherits(SwiftyperError, _Error2);
    function SwiftyperError() {
      var _this;
      var raw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, SwiftyperError);
      _this = _callSuper(this, SwiftyperError, [raw.message]);
      _this.type = _this.constructor.name;
      _this.raw = raw;
      _this.rawType = raw.type;
      _this.code = raw.code;
      _this.param = raw.param;
      _this.headers = raw.headers;
      _this.statusCode = raw.statusCode;
      _this.message = raw.message;
      return _this;
    }
    _createClass(SwiftyperError, null, [{
      key: "generate",
      value: function generate(rawSwiftyperError) {
        switch (rawSwiftyperError.type) {
          case 'over_query_limit':
            return new SwiftyperQuotaError(rawSwiftyperError);
          case 'missing':
            return new SwiftyperMissingError(rawSwiftyperError);
          case 'restricted':
            return new SwiftyperRestrictedError(rawSwiftyperError);
          case 'unexpected_parameter':
            return new SwiftyperUnexpectedParameterError(rawSwiftyperError);
          case 'invalid_request':
            return new SwiftyperInvalidRequestError(rawSwiftyperError);
          case 'invalid_parameter':
            return new SwiftyperInvalidParameterError(rawSwiftyperError);
          case 'missing_parameter':
            return new SwiftyperMissingParameterError(rawSwiftyperError);
          case 'invalid_api_key':
            return new SwiftyperInvalidApiKeyError(rawSwiftyperError);
          case 'rate_limit':
            return new SwiftyperRateLimitError(rawSwiftyperError);
          default:
            return new GenericError({
              message: 'Unknown Error'
            });
        }
      }
    }]);
    return SwiftyperError;
  }( _wrapNativeSuper(Error));
  var GenericError = function (_SwiftyperError) {
    _inherits(GenericError, _SwiftyperError);
    function GenericError() {
      _classCallCheck(this, GenericError);
      return _callSuper(this, GenericError, arguments);
    }
    return _createClass(GenericError);
  }(SwiftyperError$1);
  var SwiftyperUnexpectedParameterError = function (_SwiftyperError2) {
    _inherits(SwiftyperUnexpectedParameterError, _SwiftyperError2);
    function SwiftyperUnexpectedParameterError() {
      _classCallCheck(this, SwiftyperUnexpectedParameterError);
      return _callSuper(this, SwiftyperUnexpectedParameterError, arguments);
    }
    return _createClass(SwiftyperUnexpectedParameterError);
  }(SwiftyperError$1);
  var SwiftyperRateLimitError = function (_SwiftyperError3) {
    _inherits(SwiftyperRateLimitError, _SwiftyperError3);
    function SwiftyperRateLimitError() {
      _classCallCheck(this, SwiftyperRateLimitError);
      return _callSuper(this, SwiftyperRateLimitError, arguments);
    }
    return _createClass(SwiftyperRateLimitError);
  }(SwiftyperError$1);
  var SwiftyperInvalidRequestError = function (_SwiftyperError4) {
    _inherits(SwiftyperInvalidRequestError, _SwiftyperError4);
    function SwiftyperInvalidRequestError() {
      _classCallCheck(this, SwiftyperInvalidRequestError);
      return _callSuper(this, SwiftyperInvalidRequestError, arguments);
    }
    return _createClass(SwiftyperInvalidRequestError);
  }(SwiftyperError$1);
  var SwiftyperInvalidParameterError = function (_SwiftyperError5) {
    _inherits(SwiftyperInvalidParameterError, _SwiftyperError5);
    function SwiftyperInvalidParameterError() {
      _classCallCheck(this, SwiftyperInvalidParameterError);
      return _callSuper(this, SwiftyperInvalidParameterError, arguments);
    }
    return _createClass(SwiftyperInvalidParameterError);
  }(SwiftyperError$1);
  var SwiftyperMissingParameterError = function (_SwiftyperError6) {
    _inherits(SwiftyperMissingParameterError, _SwiftyperError6);
    function SwiftyperMissingParameterError() {
      _classCallCheck(this, SwiftyperMissingParameterError);
      return _callSuper(this, SwiftyperMissingParameterError, arguments);
    }
    return _createClass(SwiftyperMissingParameterError);
  }(SwiftyperError$1);
  var SwiftyperInvalidApiKeyError = function (_SwiftyperError7) {
    _inherits(SwiftyperInvalidApiKeyError, _SwiftyperError7);
    function SwiftyperInvalidApiKeyError() {
      _classCallCheck(this, SwiftyperInvalidApiKeyError);
      return _callSuper(this, SwiftyperInvalidApiKeyError, arguments);
    }
    return _createClass(SwiftyperInvalidApiKeyError);
  }(SwiftyperError$1);
  var SwiftyperAPIError$1 = function (_SwiftyperError8) {
    _inherits(SwiftyperAPIError, _SwiftyperError8);
    function SwiftyperAPIError() {
      _classCallCheck(this, SwiftyperAPIError);
      return _callSuper(this, SwiftyperAPIError, arguments);
    }
    return _createClass(SwiftyperAPIError);
  }(SwiftyperError$1);
  var SwiftyperQuotaError = function (_SwiftyperError9) {
    _inherits(SwiftyperQuotaError, _SwiftyperError9);
    function SwiftyperQuotaError() {
      _classCallCheck(this, SwiftyperQuotaError);
      return _callSuper(this, SwiftyperQuotaError, arguments);
    }
    return _createClass(SwiftyperQuotaError);
  }(SwiftyperError$1);
  var SwiftyperMissingError = function (_SwiftyperError10) {
    _inherits(SwiftyperMissingError, _SwiftyperError10);
    function SwiftyperMissingError() {
      _classCallCheck(this, SwiftyperMissingError);
      return _callSuper(this, SwiftyperMissingError, arguments);
    }
    return _createClass(SwiftyperMissingError);
  }(SwiftyperError$1);
  var SwiftyperRestrictedError = function (_SwiftyperError11) {
    _inherits(SwiftyperRestrictedError, _SwiftyperError11);
    function SwiftyperRestrictedError() {
      _classCallCheck(this, SwiftyperRestrictedError);
      return _callSuper(this, SwiftyperRestrictedError, arguments);
    }
    return _createClass(SwiftyperRestrictedError);
  }(SwiftyperError$1);
  var SwiftyperConnectionError$1 = function (_SwiftyperError12) {
    _inherits(SwiftyperConnectionError, _SwiftyperError12);
    function SwiftyperConnectionError() {
      _classCallCheck(this, SwiftyperConnectionError);
      return _callSuper(this, SwiftyperConnectionError, arguments);
    }
    return _createClass(SwiftyperConnectionError);
  }(SwiftyperError$1);
  var generate = SwiftyperError$1.generate;
  var SwiftyperError_1 = SwiftyperError$1;
  var SwiftyperUnexpectedParameterError_1 = SwiftyperUnexpectedParameterError;
  var SwiftypeRateLimitError = SwiftyperRateLimitError;
  var SwiftyperInvalidApiKeyError_1 = SwiftyperInvalidApiKeyError;
  var SwiftyperInvalidParameterError_1 = SwiftyperInvalidParameterError;
  var SwiftyperAPIError_1 = SwiftyperAPIError$1;
  var SwiftyperMissingError_1 = SwiftyperMissingError;
  var SwiftyperRestrictedError_1 = SwiftyperRestrictedError;
  var SwiftyperConnectionError_1 = SwiftyperConnectionError$1;
  var _Error = {
    generate: generate,
    SwiftyperError: SwiftyperError_1,
    SwiftyperUnexpectedParameterError: SwiftyperUnexpectedParameterError_1,
    SwiftypeRateLimitError: SwiftypeRateLimitError,
    SwiftyperInvalidApiKeyError: SwiftyperInvalidApiKeyError_1,
    SwiftyperInvalidParameterError: SwiftyperInvalidParameterError_1,
    SwiftyperAPIError: SwiftyperAPIError_1,
    SwiftyperMissingError: SwiftyperMissingError_1,
    SwiftyperRestrictedError: SwiftyperRestrictedError_1,
    SwiftyperConnectionError: SwiftyperConnectionError_1
  };

  function getRequestOpts(self, requestArgs, spec, overrideData) {
    var commandPath = utils_1.makeURLInterpolator(spec.path || '');
    var requestMethod = (spec.method || 'POST').toUpperCase();
    var urlParams = spec.urlParams || [];
    var encode = spec.encode || function (data) {
      return data;
    };
    var host = spec.host;
    var path = self.createResourcePathWithSymbols(spec.path);
    var args = [].slice.call(requestArgs);
    var urlData = urlParams.reduce(function (urlData, param) {
      var arg = args.shift();
      if (typeof arg !== 'string') {
        throw new Error("Swiftyper: Argument \"".concat(param, "\" must be a string, but got: ").concat(arg, " (on API request to `").concat(requestMethod, " ").concat(path, "`)"));
      }
      urlData[param] = arg;
      return urlData;
    }, {});
    var dataFromArgs = utils_1.getDataFromArgs(args);
    var data = encode(Object.assign({}, dataFromArgs, overrideData));
    var options = utils_1.getOptionsFromArgs(args);
    if (args.filter(function (x) {
      return x != null;
    }).length) {
      throw new Error("Swiftyper: Unknown arguments (".concat(args, "). Did you mean to pass an options object? See https://github.com/swiftyper-sk/swiftyper-node/wiki/Passing-Options. (on API request to ").concat(requestMethod, " `").concat(path, "`)"));
    }
    var requestPath = self.createFullPath(commandPath, urlData);
    var headers = Object.assign(options.headers, spec.headers);
    if (spec.validator) {
      spec.validator(data, {
        headers: headers
      });
    }
    var dataInQuery = spec.method === 'GET';
    var bodyData = dataInQuery ? {} : data;
    var queryData = dataInQuery ? data : {};
    return {
      requestMethod: requestMethod,
      requestPath: requestPath,
      bodyData: bodyData,
      queryData: queryData,
      auth: options.auth,
      headers: headers,
      host: host,
      settings: options.settings
    };
  }
  function makeRequest(self, requestArgs, spec, overrideData) {
    return new Promise(function (resolve, reject) {
      var opts;
      try {
        opts = getRequestOpts(self, requestArgs, spec, overrideData);
      } catch (err) {
        reject(err);
        return;
      }
      function requestCallback(err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
        }
      }
      var emptyQuery = Object.keys(opts.queryData).length === 0;
      var path = [opts.requestPath, emptyQuery ? '' : '?', utils_1.stringifyRequestData(opts.queryData)].join('');
      var _opts = opts,
        headers = _opts.headers,
        settings = _opts.settings;
      self._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.auth, {
        headers: headers,
        settings: settings
      }, requestCallback);
    });
  }
  var makeRequest_1 = makeRequest;

  function swiftyperMethod$6(spec) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var callback = typeof args[args.length - 1] == 'function' && args.pop();
      spec.urlParams = utils_1.extractUrlParams(this.createResourcePathWithSymbols(spec.path || ''));
      return utils_1.callbackifyPromiseWithTimeout(makeRequest_1(this, args, spec, {}), callback);
    };
  }
  var SwiftyperMethod = swiftyperMethod$6;

  var https = /*@__PURE__*/getAugmentedNamespace(http$1);

  var path = /*@__PURE__*/getAugmentedNamespace(path$2);

  var SwiftyperConnectionError = _Error.SwiftyperConnectionError,
    SwiftyperError = _Error.SwiftyperError,
    SwiftyperAPIError = _Error.SwiftyperAPIError;
  var defaultHttpAgent = new https.Agent({
    keepAlive: true
  });
  var defaultHttpsAgent = new https.Agent({
    keepAlive: true
  });
  var requests = 0;
  SwiftyperResource.extend = utils_1.protoExtend;
  SwiftyperResource.method = SwiftyperMethod;
  var MAX_RETRY_AFTER_WAIT = 60;
  function SwiftyperResource(swiftyper) {
    this._swiftyper = swiftyper;
    this.basePath = utils_1.makeURLInterpolator(this.basePath || swiftyper.getApiField('basePath'));
    this.resourcePath = this.path;
    this.path = utils_1.makeURLInterpolator(this.path);
    this.initialize.apply(this, arguments);
  }
  SwiftyperResource.prototype = {
    path: '',
    basePath: null,
    initialize: function initialize() {},
    requestDataProcessor: null,
    createFullPath: function createFullPath(commandPath, urlData) {
      return path.join(this.basePath(urlData), this.path(urlData), typeof commandPath == 'function' ? commandPath(urlData) : commandPath).replace(/\\/g, '/');
    },
    createResourcePathWithSymbols: function createResourcePathWithSymbols(pathWithSymbols) {
      return "/".concat(path.join(this.resourcePath, pathWithSymbols || '').replace(/\\/g, '/'));
    },
    _timeoutHandler: function _timeoutHandler(timeout, req) {
      return function () {
        var timeoutErr = new TypeError('ETIMEDOUT');
        timeoutErr.code = 'ETIMEDOUT';
        req.destroy(timeoutErr);
      };
    },
    _responseHandler: function _responseHandler(req, callback) {
      var _this = this;
      return function (res) {
        var response = '';
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          response += chunk;
        });
        res.once('end', function () {
          var headers = res.headers || {};
          var requestEndTime = Date.now();
          var requestDurationMs = requestEndTime - req._requestStart;
          var responseEvent = utils_1.removeNullish({
            method: req._requestEvent.method,
            path: req._requestEvent.path,
            status: res.statusCode,
            elapsed: requestDurationMs,
            request_start_time: req._requestStart,
            request_end_time: requestEndTime
          });
          _this._swiftyper._emitter.emit('response', responseEvent);
          try {
            response = JSON.parse(response);
            if (response.error) {
              var err;
              response.error.headers = headers;
              response.error.statusCode = res.statusCode;
              if (res.statusCode === 500) {
                err = new SwiftyperAPIError(response.error);
              } else {
                err = SwiftyperError.generate(response.error);
              }
              return callback.call(_this, err, null);
            }
          } catch (e) {
            return callback.call(_this, new SwiftyperAPIError({
              message: 'Invalid JSON received from the Swiftyper API',
              response: response,
              exception: e
            }), null);
          }
          Object.defineProperty(response, 'lastResponse', {
            enumerable: false,
            writable: false,
            value: res
          });
          callback.call(_this, null, response);
        });
      };
    },
    _generateConnectionErrorMessage: function _generateConnectionErrorMessage(requestRetries) {
      return "An error occurred with our connection to Swiftyper.".concat(requestRetries > 0 ? " Request was retried ".concat(requestRetries, " times.") : '');
    },
    _shouldRetry: function _shouldRetry(res, numRetries, maxRetries) {
      if (numRetries >= maxRetries) {
        return false;
      }
      if (!res) {
        return true;
      }
      if (res.headers && res.headers['swiftyper-should-retry'] === 'false') {
        return false;
      }
      if (res.headers && res.headers['swiftyper-should-retry'] === 'true') {
        return true;
      }
      if (res.statusCode === 409) {
        return true;
      }
      if (res.statusCode >= 500) {
        return true;
      }
      return false;
    },
    _getSleepTimeInMS: function _getSleepTimeInMS(numRetries) {
      var retryAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var initialNetworkRetryDelay = this._swiftyper.getInitialNetworkRetryDelay();
      var maxNetworkRetryDelay = this._swiftyper.getMaxNetworkRetryDelay();
      var sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(numRetries - 1, 2), maxNetworkRetryDelay);
      sleepSeconds *= 0.5 * (1 + Math.random());
      sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
      if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
        sleepSeconds = Math.max(sleepSeconds, retryAfter);
      }
      return sleepSeconds * 1000;
    },
    _getMaxNetworkRetries: function _getMaxNetworkRetries() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return settings.maxNetworkRetries && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._swiftyper.getMaxNetworkRetries();
    },
    _makeHeaders: function _makeHeaders(contentLength, method, userSuppliedHeaders) {
      var defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': contentLength
      };
      return Object.assign(utils_1.removeNullish(defaultHeaders), utils_1.normalizeHeaders(userSuppliedHeaders));
    },
    _request: function _request(method, host, path, data, auth) {
      var _this2 = this;
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
      var callback = arguments.length > 6 ? arguments[6] : undefined;
      var requestData;
      data.__req = requests++;
      data.api_key = auth ? auth : this._swiftyper.getApiField('auth');
      var retryRequest = function retryRequest(requestFn, headers, requestRetries, retryAfter) {
        return setTimeout(requestFn, _this2._getSleepTimeInMS(requestRetries, retryAfter), headers, requestRetries + 1);
      };
      var makeRequest = function makeRequest(headers, numRetries) {
        var protocol = _this2._swiftyper.getApiField('protocol');
        var timeout = options.settings && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : _this2._swiftyper.getApiField('timeout');
        var isInsecureConnection = protocol === 'http';
        var agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
        var req = (isInsecureConnection ? https : https).request({
          host: host || _this2._swiftyper.getApiField('host'),
          port: _this2._swiftyper.getApiField('port'),
          protocol: protocol + ':',
          path: path,
          method: method,
          agent: agent,
          headers: headers,
          ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5'
        });
        _this2._swiftyper._lastRequest = req;
        var requestStartTime = Date.now();
        var requestEvent = utils_1.removeNullish({
          method: method,
          path: path,
          request_start_time: requestStartTime
        });
        var requestRetries = numRetries || 0;
        var maxRetries = _this2._getMaxNetworkRetries(options.settings);
        req._requestEvent = requestEvent;
        req._requestStart = requestStartTime;
        _this2._swiftyper._emitter.emit('request', requestEvent);
        req.setTimeout(timeout, _this2._timeoutHandler(timeout, req));
        req.once('response', function (res) {
          if (_this2._shouldRetry(res, requestRetries, maxRetries)) {
            return retryRequest(makeRequest, headers, requestRetries, ((res || {}).headers || {})['retry-after']);
          } else {
            return _this2._responseHandler(req, callback)(res);
          }
        });
        req.on('error', function (error) {
          if (_this2._shouldRetry(null, requestRetries, maxRetries)) {
            return retryRequest(makeRequest, headers, requestRetries, null);
          } else {
            if (error.code === 'ETIMEDOUT') {
              return callback.call(_this2, new SwiftyperConnectionError({
                message: "Request aborted due to timeout being reached (".concat(timeout, "ms)"),
                detail: error
              }));
            }
            return callback.call(_this2, new SwiftyperConnectionError({
              message: _this2._generateConnectionErrorMessage(requestRetries),
              detail: error
            }), null);
          }
        });
        req.write(requestData);
        req.end();
      };
      var transformRequestData = function transformRequestData(data) {
        if (typeof data === 'boolean') {
          return data.toString();
        } else if (Array.isArray(data)) {
          return data.map(transformRequestData);
        } else if (_typeof(data) === 'object' && data !== null) {
          return Object.fromEntries(Object.entries(data).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            return [key, transformRequestData(value)];
          }));
        }
        return data;
      };
      var prepareAndMakeRequest = function prepareAndMakeRequest(error, data) {
        if (error) {
          return callback(error);
        }
        requestData = JSON.stringify(transformRequestData(data));
        var headers = _this2._makeHeaders(Buffer$1.byteLength(requestData, 'utf-8'), method, options.headers, options.settings);
        makeRequest(headers);
      };
      if (this.requestDataProcessor) {
        this.requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
      } else {
        prepareAndMakeRequest(null, data);
      }
    }
  };
  var SwiftyperResource_1 = SwiftyperResource;

  var swiftyperMethod$5 = SwiftyperResource_1.method;
  var Translation = SwiftyperResource_1.extend({
    path: 'intl/translations',
    query: swiftyperMethod$5({
      method: 'POST',
      path: '/query'
    }),
    translate: swiftyperMethod$5({
      method: 'POST',
      path: '/submit'
    }),
    upload: swiftyperMethod$5({
      method: 'POST',
      path: '/upload'
    }),
    vote: swiftyperMethod$5({
      method: 'POST',
      path: '/vote'
    }),
    raw: swiftyperMethod$5({
      method: 'GET',
      path: '/raw'
    }),
    variationGrid: swiftyperMethod$5({
      method: 'POST',
      path: '/variationGrid'
    })
  });

  var swiftyperMethod$4 = SwiftyperResource_1.method;
  var EmailUtil = SwiftyperResource_1.extend({
    path: 'utils/email',
    validate: swiftyperMethod$4({
      method: 'POST',
      path: '/validate'
    })
  });

  var swiftyperMethod$3 = SwiftyperResource_1.method;
  var Business = SwiftyperResource_1.extend({
    path: 'business',
    query: swiftyperMethod$3({
      method: 'POST',
      path: '/query'
    }),
    identifier: swiftyperMethod$3({
      method: 'POST',
      path: '/identifier'
    }),
    detail: swiftyperMethod$3({
      method: 'POST',
      path: '/{business_id}'
    })
  });

  var swiftyperMethod$2 = SwiftyperResource_1.method;
  var Phrase = SwiftyperResource_1.extend({
    path: 'intl/phrases',
    query: swiftyperMethod$2({
      method: 'POST',
      path: '/query'
    }),
    upload: swiftyperMethod$2({
      method: 'POST',
      path: '/upload'
    }),
    raw: swiftyperMethod$2({
      method: 'GET',
      path: '/raw'
    })
  });

  var swiftyperMethod$1 = SwiftyperResource_1.method;
  var Places = SwiftyperResource_1.extend({
    path: 'places',
    query: swiftyperMethod$1({
      method: 'POST',
      path: '/query'
    }),
    validate: swiftyperMethod$1({
      method: 'POST',
      path: '/validate'
    }),
    street: swiftyperMethod$1({
      method: 'POST',
      path: '/street'
    }),
    municipality: swiftyperMethod$1({
      method: 'POST',
      path: '/municipality'
    }),
    postal: swiftyperMethod$1({
      method: 'POST',
      path: '/postal'
    }),
    reverse: swiftyperMethod$1({
      method: 'POST',
      path: '/reverse'
    }),
    regions: swiftyperMethod$1({
      method: 'POST',
      path: '/regions'
    }),
    counties: swiftyperMethod$1({
      method: 'POST',
      path: '/counties'
    }),
    municipalities: swiftyperMethod$1({
      method: 'POST',
      path: '/municipalities'
    }),
    detail: swiftyperMethod$1({
      method: 'POST',
      path: '/{place_id}'
    })
  });

  var swiftyperMethod = SwiftyperResource_1.method;
  var Fbt = SwiftyperResource_1.extend({
    path: 'intl/fbt',
    init: swiftyperMethod({
      method: 'POST',
      path: '/initialize'
    })
  });

  var resources = {
    Translations: Translation,
    EmailUtil: EmailUtil,
    Business: Business,
    Phrases: Phrase,
    Places: Places,
    Fbt: Fbt
  };

  var DEFAULT_HOST = 'api.swiftyper.sk';
  var DEFAULT_PORT = '443';
  var DEFAULT_BASE_PATH = '/v1/';
  var DEFAULT_TIMEOUT = 8000;
  var MAX_NETWORK_RETRY_DELAY_SEC = 2;
  var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
  var ALLOWED_CONFIG_PROPERTIES = ['maxNetworkRetries', 'timeout', 'host', 'port', 'protocol'];
  var EventEmitter = events.EventEmitter;
  Swiftyper.SwiftyperResource = SwiftyperResource_1;
  Swiftyper.resources = resources;
  function Swiftyper(key) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!(this instanceof Swiftyper)) {
      return new Swiftyper(key, config);
    }
    var props = this._getPropsFromConfig(config);
    Object.defineProperty(this, '_emitter', {
      value: new EventEmitter(),
      enumerable: false,
      configurable: false,
      writable: false
    });
    this.on = this._emitter.on.bind(this._emitter);
    this.once = this._emitter.once.bind(this._emitter);
    this.off = this._emitter.removeListener.bind(this._emitter);
    if (props.protocol && props.protocol !== 'https' && (!props.host || /\.swiftyper\.(cz|pl|sk)/.test(props.host))) {
      throw new Error('The `https` protocol must be used when sending requests to Swiftyper');
    }
    this._api = {
      auth: null,
      host: props.host || DEFAULT_HOST,
      port: props.port || DEFAULT_PORT,
      protocol: props.protocol || 'https',
      basePath: DEFAULT_BASE_PATH,
      timeout: utils_1.validateInteger('timeout', props.timeout, DEFAULT_TIMEOUT),
      maxNetworkRetries: utils_1.validateInteger('maxNetworkRetries', props.maxNetworkRetries, 0)
    };
    this._prepResources();
    this._setApiKey(key);
    this.errors = _Error;
    this.SwiftyperResource = Swiftyper.SwiftyperResource;
  }
  Swiftyper.errors = _Error;
  Swiftyper.prototype = {
    _setApiKey: function _setApiKey(key) {
      if (key) {
        this._setApiField('auth', key);
      }
    },
    _setApiField: function _setApiField(key, value) {
      this._api[key] = value;
    },
    getApiField: function getApiField(key) {
      return this._api[key];
    },
    getMaxNetworkRetries: function getMaxNetworkRetries() {
      return this.getApiField('maxNetworkRetries');
    },
    getMaxNetworkRetryDelay: function getMaxNetworkRetryDelay() {
      return MAX_NETWORK_RETRY_DELAY_SEC;
    },
    getInitialNetworkRetryDelay: function getInitialNetworkRetryDelay() {
      return INITIAL_NETWORK_RETRY_DELAY_SEC;
    },
    _prepResources: function _prepResources() {
      for (var name in resources) {
        this[utils_1.pascalToCamelCase(name)] = new resources[name](this);
      }
    },
    _getPropsFromConfig: function _getPropsFromConfig(config) {
      if (!config) {
        return {};
      }
      var isObject = config === Object(config) && !Array.isArray(config);
      if (!isObject) {
        throw new Error('Config must be an object');
      }
      var values = Object.keys(config).filter(function (value) {
        return !ALLOWED_CONFIG_PROPERTIES.includes(value);
      });
      if (values.length > 0) {
        throw new Error("Config object may only contain the following: ".concat(ALLOWED_CONFIG_PROPERTIES.join(', ')));
      }
      return config;
    }
  };
  var swiftyper$1 = Swiftyper;
  var Swiftyper_1 = Swiftyper;
  var _default = Swiftyper;
  swiftyper$1.Swiftyper = Swiftyper_1;
  swiftyper$1["default"] = _default;

  var containers = [];
  var styleElements = [];
  var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';
  function insertCss(css, options) {
    options = options || {};
    if (css === undefined) {
      throw new Error(usage);
    }
    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);
    if (containerId === -1) {
      containerId = containers.push(container) - 1;
      styleElements[containerId] = {};
    }
    var styleElement;
    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
      styleElement = styleElements[containerId][position];
    } else {
      styleElement = styleElements[containerId][position] = createStyleElement();
      if (position === 'prepend') {
        container.insertBefore(styleElement, container.childNodes[0]);
      } else {
        container.appendChild(styleElement);
      }
    }
    if (css.charCodeAt(0) === 0xFEFF) {
      css = css.substr(1, css.length);
    }
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText += css;
    } else {
      styleElement.textContent += css;
    }
    return styleElement;
  }
  function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
  }
  var insertCss_1 = insertCss;
  var insertCss_2 = insertCss;
  insertCss_1.insertCss = insertCss_2;

  var modernLight = ".swiftyper_wrapper {\r\n  position: relative;\r\n}\r\n\r\n#swiftyper {\r\n  height: 3rem;\r\n  width: 370px;\r\n  margin: 0;\r\n  padding: 0 2rem 0 3.2rem;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  font-size: 1rem;\r\n  text-overflow: ellipsis;\r\n  color: rgba(255, 122, 122, 0.3);\r\n  outline: none;\r\n  border-radius: 10rem;\r\n  border: 0;\r\n  border: 0.05rem solid rgba(255, 122, 122, 0.5);\r\n  background-image: url(./images/search.svg);\r\n  background-size: 1.4rem;\r\n  background-position: left 1.05rem top 0.8rem;\r\n  background-repeat: no-repeat;\r\n  background-origin: border-box;\r\n  background-color: #fff;\r\n  transition: all 0.4s ease;\r\n  -webkit-transition: all -webkit-transform 0.4s ease;\r\n}\r\n\r\n#swiftyper::placeholder {\r\n  color: rgba(255, 122, 122, 0.5);\r\n  transition: all 0.3s ease;\r\n  -webkit-transition: all -webkit-transform 0.3s ease;\r\n}\r\n\r\n#swiftyper:hover::placeholder {\r\n  color: rgba(255, 122, 122, 0.6);\r\n  transition: all 0.3s ease;\r\n  -webkit-transition: all -webkit-transform 0.3s ease;\r\n}\r\n\r\n#swiftyper:focus::placeholder {\r\n  padding: 0.1rem 0.6rem;\r\n  font-size: 0.95rem;\r\n  color: rgba(255, 122, 122, 0.4);\r\n}\r\n\r\n#swiftyper:focus::selection {\r\n  background-color: rgba(255, 122, 122, 0.15);\r\n}\r\n\r\n#swiftyper::selection {\r\n  background-color: rgba(255, 122, 122, 0.15);\r\n}\r\n\r\n#swiftyper:hover {\r\n  color: rgba(255, 122, 122, 0.8);\r\n  transition: all 0.3s ease;\r\n  -webkit-transition: all -webkit-transform 0.3s ease;\r\n}\r\n\r\n#swiftyper:focus {\r\n  color: rgba(255, 122, 122, 1);\r\n  border: 0.06rem solid rgba(255, 122, 122, 0.8);\r\n}\r\n\r\n#swiftyper_list {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  padding: 0;\r\n  margin-top: 5px;\r\n  border-radius: 0.6rem;\r\n  background-color: #fff;\r\n  box-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);\r\n  border: 1px solid rgba(33, 33, 33, 0.07);\r\n  z-index: 1000;\r\n  outline: none;\r\n}\r\n\r\n.swiftyper_result, .swiftyper_footer {\r\n  margin: 0.3rem;\r\n  padding: 0.3rem 0.5rem;\r\n  list-style: none;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n  color: #212121;\r\n  transition: all 0.1s ease-in-out;\r\n  border-radius: 0.35rem;\r\n  background-color: rgba(255, 255, 255, 1);\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.swiftyper_footer svg {\r\n  display: inline-block;\r\n}\r\n\r\n.swiftyper_result::selection {\r\n  color: rgba(#ffffff, 0);\r\n  background-color: rgba(#ffffff, 0);\r\n}\r\n\r\n.swiftyper_result:hover {\r\n  cursor: pointer;\r\n  background: #e43a15;\r\n  background: -webkit-linear-gradient(to right, #e43a15, #e65245);\r\n  background: linear-gradient(to right, #e43a15, #e65245);\r\n}\r\n\r\n.swiftyper_result:hover * {\r\n  color: #ffffff!important;\r\n}\r\n\r\n.swiftyper_footer {\r\n  opacity: .8;\r\n  text-align: center;\r\n  padding: 0.2rem 0;\r\n  background: #ffffff!important;\r\n}\r\n\r\n.swiftyper_footer:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#swiftyper_list .no_result {\r\n  margin: 0.3rem;\r\n  padding: 0.3rem 0.5rem;\r\n  list-style: none;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n  color: #212121;\r\n  transition: all 0.1s ease-in-out;\r\n  border-radius: 0.35rem;\r\n  background-color: rgba(255, 255, 255, 1);\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 0.2s ease;\r\n  outline: none;\r\n}\r\n\r\n#swiftyper_list em {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n}\r\n\r\n#swiftyper_list em::selection {\r\n  color: rgba(#ffffff, 0);\r\n  background-color: rgba(#ffffff, 0);\r\n}\r\n\r\n.swiftyper_selected {\r\n  cursor: pointer;\r\n  background-color: rgba(255, 122, 122, 0.15);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #swiftyper {\r\n    width: 18rem;\r\n    background-size: 1.6rem;\r\n    background-position: left 1.1rem top 0.75rem;\r\n  }\r\n}\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  #swiftyper {\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  #swiftyper {\r\n    background-size: 1.2rem;\r\n    background-origin: border-box;\r\n    border-width: 1px;\r\n    background-position: left 1.1rem top 0.8rem;\r\n  }\r\n}\r\n";

  var modernDark = ".swiftyper_wrapper {\r\n  position: relative;\r\n}\r\n\r\n#swiftyper {\r\n  width: 90%;\r\n  height: 40px;\r\n  padding-left: 20px;\r\n  font-size: 1rem;\r\n  color: rgba(123, 123, 123, 1);\r\n  border-radius: 8px;\r\n  border: 0;\r\n  outline: none;\r\n  background-color: #f1f3f4;\r\n}\r\n\r\n#swiftyper::placeholder {\r\n  color: rgba(123, 123, 123, 0.5);\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#swiftyper_list {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  padding: 0;\r\n  margin: 5px 0;\r\n  border-radius: 0.6rem;\r\n  background-color: #fff;\r\n  box-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);\r\n  border: 1px solid rgba(33, 33, 33, 0.07);\r\n  z-index: 1000;\r\n  outline: none;\r\n}\r\n\r\n.swiftyper_result, .swiftyper_footer {\r\n  margin: 0.3rem;\r\n  padding: 0.3rem 0.5rem;\r\n  list-style: none;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n  color: #212121;\r\n  transition: all 0.1s ease-in-out;\r\n  border-radius: 0.35rem;\r\n  background-color: rgba(255, 255, 255, 1);\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.swiftyper_footer svg {\r\n  display: inline-block;\r\n}\r\n\r\n.swiftyper_result::selection {\r\n  color: rgba(#ffffff, 0);\r\n  background-color: rgba(#ffffff, 0);\r\n}\r\n\r\n.swiftyper_result:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(123, 123, 123, 0.1);\r\n}\r\n\r\n.swiftyper_footer {\r\n  opacity: .8;\r\n  text-align: center;\r\n  padding: 0.2rem 0;\r\n  background: #ffffff!important;\r\n}\r\n\r\n.swiftyper_footer:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#swiftyper_list .no_result {\r\n  margin: 0.3rem;\r\n  padding: 0.3rem 0.5rem;\r\n  list-style: none;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n  color: #212121;\r\n  transition: all 0.1s ease-in-out;\r\n  border-radius: 0.35rem;\r\n  background-color: rgba(255, 255, 255, 1);\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 0.2s ease;\r\n  outline: none;\r\n}\r\n\r\n#swiftyper_list em {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n}\r\n\r\n#swiftyper_list em::selection {\r\n  color: rgba(#ffffff, 0);\r\n  background-color: rgba(#ffffff, 0);\r\n}\r\n\r\n.swiftyper_selected {\r\n  cursor: pointer;\r\n  background-color: rgba(123, 123, 123, 0.1);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #swiftyper {\r\n    width: 18rem;\r\n    background-size: 1.6rem;\r\n    background-position: left 1.1rem top 0.75rem;\r\n  }\r\n}\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  #swiftyper {\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  #swiftyper {\r\n    background-size: 1.2rem;\r\n    background-origin: border-box;\r\n    border-width: 1px;\r\n    background-position: left 1.1rem top 0.8rem;\r\n  }\r\n}\r\n";

  var classic = ".swiftyper_wrapper {\r\n  position: relative;\r\n}\r\n\r\n#swiftyper {\r\n  width: 95%;\r\n  height: 40px;\r\n  padding-left: 10px;\r\n  font-size: 1rem;\r\n  color: rgb(116, 116, 116);\r\n  border-radius: 4px;\r\n  border: 1px solid rgba(33, 33, 33, 0.2);\r\n  outline: none;\r\n}\r\n\r\n#swiftyper::placeholder {\r\n  color: rgba(123, 123, 123, 0.5);\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#swiftyper_list {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  padding: 0;\r\n  margin: 5px 0;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(33, 33, 33, 0.1);\r\n  z-index: 1000;\r\n  outline: none;\r\n}\r\n\r\n.swiftyper_result, .swiftyper_footer {\r\n  padding: 10px 20px;\r\n  list-style: none;\r\n  text-align: left;\r\n  font-size: 16px;\r\n  color: #212121;\r\n  transition: all 0.1s ease-in-out;\r\n  background-color: rgba(255, 255, 255, 1);\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.swiftyper_footer svg {\r\n  display: inline-block;\r\n}\r\n\r\n.swiftyper_result:first-child {\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n\r\n.swiftyper_result + .swiftyper_result:last-child {\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n\r\nbody .swiftyper_result:last-child {\r\n  border-radius: 3px;\r\n}\r\n\r\n.swiftyper_result::selection {\r\n  color: rgba(#ffffff, 0);\r\n  background-color: rgba(#ffffff, 0);\r\n}\r\n\r\n.swiftyper_result:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(123, 123, 123, 0.1);\r\n}\r\n\r\n#swiftyper_list em {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n}\r\n\r\n#swiftyper_list em::selection {\r\n  color: rgba(#ffffff, 0);\r\n  background-color: rgba(#ffffff, 0);\r\n}\r\n\r\n.swiftyper_footer {\r\n  opacity: .8;\r\n  text-align: center;\r\n  padding: 0.4rem 0 0.2rem 0;\r\n  background: #ffffff!important;\r\n}\r\n\r\n.swiftyper_footer:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#swiftyper_list .no_result {\r\n  margin: 0.3rem;\r\n  padding: 0.3rem 0.5rem;\r\n  list-style: none;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n  color: #212121;\r\n  transition: all 0.1s ease-in-out;\r\n  border-radius: 0.35rem;\r\n  background-color: rgba(255, 255, 255, 1);\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 0.2s ease;\r\n  outline: none;\r\n}\r\n\r\n.swiftyper_selected {\r\n  cursor: pointer;\r\n  background-color: rgba(123, 123, 123, 0.1);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #swiftyper {\r\n    width: 18rem;\r\n    background-size: 1.6rem;\r\n    background-position: left 1.1rem top 0.75rem;\r\n  }\r\n}\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  #swiftyper {\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  #swiftyper {\r\n    background-size: 1.2rem;\r\n    background-origin: border-box;\r\n    border-width: 1px;\r\n    background-position: left 1.1rem top 0.8rem;\r\n  }\r\n}\r\n";

  var themes = {
    'modern-light': modernLight,
    'modern-dark': modernDark,
    classic: classic
  };

  var clearStyle = (function (style) {
    if (style) {
      if (style.styleSheet) {
        style.styleSheet.cssText = '';
      } else {
        style.textContent = '';
      }
    }
  });

  var isAutofilled = (function (element) {
    return [":autofill", ":-webkit-autofill", ":-moz-autofill"].some(function (selector) {
      try {
        return element.matches(selector);
      } catch (e) {
        return false;
      }
    });
  });

  var business = function () {
    function business(options) {
      _classCallCheck(this, business);
      this.triggers = new events();
      this.service = 'business';
      this.options = {};
      this.configure(options);
      this._init();
    }
    _createClass(business, [{
      key: "configure",
      value: function configure(options) {
        var _this = this;
        var _Object$assign = Object.assign(this.options, options),
          _Object$assign$select = _Object$assign.selectors,
          selectors = _Object$assign$select === void 0 ? {
            name: null,
            cin: null,
            tin: null,
            vatin: null,
            address: null,
            street: null,
            streetName: null,
            streetNumber: null,
            buildingNumber: null,
            streetNumberParts: null,
            municipality: null,
            postalCode: null,
            country: null
          } : _Object$assign$select,
          _Object$assign$sugges = _Object$assign.suggestions,
          suggestions = _Object$assign$sugges === void 0 ? ['name', 'cin'] : _Object$assign$sugges,
          _Object$assign$endpoi = _Object$assign.endpoint,
          endpoint = _Object$assign$endpoi === void 0 ? 'api.swiftyper.sk' : _Object$assign$endpoi,
          _Object$assign$logo = _Object$assign.logo,
          logo = _Object$assign$logo === void 0 ? true : _Object$assign$logo,
          _Object$assign$nextFo = _Object$assign.nextFocus,
          nextFocus = _Object$assign$nextFo === void 0 ? true : _Object$assign$nextFo,
          apiKey = _Object$assign.apiKey,
          _Object$assign$highli = _Object$assign.highlight,
          highlight = _Object$assign$highli === void 0 ? true : _Object$assign$highli,
          _Object$assign$showNo = _Object$assign.showNoResults,
          showNoResults = _Object$assign$showNo === void 0 ? false : _Object$assign$showNo,
          _Object$assign$events = _Object$assign.events,
          events = _Object$assign$events === void 0 ? ['input'] : _Object$assign$events,
          _Object$assign$countr = _Object$assign.country,
          country = _Object$assign$countr === void 0 ? 'SK' : _Object$assign$countr,
          active = _Object$assign.active,
          _Object$assign$limit = _Object$assign.limit,
          limit = _Object$assign$limit === void 0 ? 7 : _Object$assign$limit,
          _Object$assign$deboun = _Object$assign.debounce,
          debounce = _Object$assign$deboun === void 0 ? 300 : _Object$assign$deboun,
          _Object$assign$minlen = _Object$assign.minlength,
          minlength = _Object$assign$minlen === void 0 ? 1 : _Object$assign$minlen,
          _Object$assign$theme = _Object$assign.theme,
          theme = _Object$assign$theme === void 0 ? 'modern-light' : _Object$assign$theme,
          _Object$assign$htmlAu = _Object$assign.htmlAutocomplete,
          htmlAutocomplete = _Object$assign$htmlAu === void 0 ? false : _Object$assign$htmlAu,
          _Object$assign$itemTe = _Object$assign.itemTemplate,
          itemTemplate = _Object$assign$itemTe === void 0 ? function (suggestion, element) {
            element.style = "display: flex; flex-direction: column;";
            element.innerHTML = "\n        <span style=\"display: flex;flex-direction: row;justify-content: space-between\">\n          <span style=\"text-overflow: ellipsis; white-space: nowrap; overflow: hidden;".concat(suggestion.terminated_on ? 'text-decoration: line-through' : null, "\">\n              ").concat(_this.options.highlight ? suggestion.highlight : suggestion.name, "\n          </span>\n          <span style=\"display: flex; align-items: center; font-size: 13px; font-weight: 500; color: rgba(0,0,0,.7);\">\n              ").concat(suggestion.cin, "\n          </span>\n        </span>\n        <span style=\"display: flex; align-items: center; font-size: 13px; font-weight: 200; color: rgba(0,0,0,.5);\">\n            <span style=\"text-overflow: ellipsis; white-space: nowrap; overflow: hidden\">").concat(suggestion.formatted_address, "</span>\n        </span>");
          } : _Object$assign$itemTe;
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
        for (var _i = 0, _Object$entries = Object.entries(this.options.selectors); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            selector = _Object$entries$_i[1];
          if (typeof selector === 'string') {
            this._fields[key] = document.querySelector(selector);
          } else if (typeof selector === 'function') {
            this._fields[key] = selector();
          } else {
            this._fields[key] = selector;
          }
          if (!(this._fields[key] instanceof HTMLInputElement)) {
            throw new Error("Element ".concat(key, " nie je input."));
          }
          this._fields[key].parentNode.classList.add('swiftyper_wrapper');
          this._fields[key].autocomplete = this.options.htmlAutocomplete ? 'on' : 'off';
        }
        this._setTheme();
        return this;
      }
    }, {
      key: "_setTheme",
      value: function _setTheme() {
        clearStyle(this._style);
        this._style = insertCss_2(themes[this.options.theme], {
          prepend: true
        });
      }
    }, {
      key: "_start",
      value: function _start(query, field) {
        var _this2 = this;
        var results = this.suggestions;
        var dataFeedback = {
          query: query,
          results: results
        };
        if (this.options.showNoResults || Array.from(results || []).length) {
          generateList(this, dataFeedback, field);
        }
        if (this.options.showNoResults) {
          var result = document.createElement("li");
          result.setAttribute("class", "no_result");
          result.setAttribute("tabindex", "1");
          result.innerHTML = "<span style=\"display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.5);\">\u017Diadne v\xFDsledky pre v\xFDraz \"".concat(dataFeedback.query, "\"</span>");
          document.querySelector("#swiftyper_list").appendChild(result);
          return;
        }
        navigate(this, dataFeedback, field);
        document.addEventListener("click", function (event) {
          return closeAllLists(_this2, event.target, field);
        });
      }
    }, {
      key: "_createAutocompleteSource",
      value: function _createAutocompleteSource(field) {
        var _this3 = this;
        return new Promise(function ($return, $error) {
          var apiKey, host, country, active, limit, swiftyperClient, query, segment, data, createAutocompleteDataset;
          var _this3$options = _this3.options;
          apiKey = _this3$options.apiKey;
          host = _this3$options.endpoint;
          country = _this3$options.country;
          active = _this3$options.active;
          limit = _this3$options.limit;
          if (_this3.swiftyperClient && _this3.swiftyperClient._lastRequest) {
            _this3.swiftyperClient._lastRequest.destroy();
          }
          swiftyperClient = new swiftyper$1(apiKey, {
            host: host
          });
          _this3.swiftyperClient = swiftyperClient;
          query = field.value;
          segment = null, data = {};
          for (var _i2 = 0, _Object$entries2 = Object.entries(_this3._fields); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              key = _Object$entries2$_i[0],
              _field = _Object$entries2$_i[1];
            if (_field.isEqualNode(field)) {
              segment = key;
            }
            data[key] = _field.value;
          }
          createAutocompleteDataset = function createAutocompleteDataset() {
            return new Promise(function ($return, $error) {
              switch (segment) {
                case 'name':
                  return swiftyperClient.business.query({
                    query: query,
                    country: country,
                    active: active,
                    limit: limit
                  }).then($return, $error);
                case 'cin':
                  return swiftyperClient.business.identifier({
                    query: query,
                    country: country,
                    active: active,
                    limit: limit
                  }).then($return, $error);
              }
              return $return();
            });
          };
          var $Try_1_Post = function $Try_1_Post() {
            try {
              return $return();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };
          var $Try_1_Catch = function $Try_1_Catch(error) {
            try {
              _this3.suggestions = null;
              _this3.triggers.emit('error', {
                error: error
              });
              if (error.code === 'over_query_limit') {
                _this3.triggers.emit('limit', {
                  error: error
                });
              }
              return $Try_1_Post();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };
          try {
            return createAutocompleteDataset().then(function ($await_6) {
              try {
                _this3.suggestions = $await_6;
                _this3.triggers.emit('suggestions', {
                  suggestions: _this3.suggestions
                });
                eventEmitter(field, {
                  suggestions: _this3.suggestions
                }, "suggestions");
                return $Try_1_Post();
              } catch ($boundEx) {
                return $Try_1_Catch($boundEx);
              }
            }, $Try_1_Catch);
          } catch (error) {
            $Try_1_Catch(error);
          }
        });
      }
    }, {
      key: "_compose",
      value: function _compose(field) {
        var _this4 = this;
        return new Promise(function ($return, $error) {
          var query;
          if (isAutofilled(field)) {
            return $return();
          }
          query = field.value;
          if (query.length >= _this4.options.minlength) {
            return _this4._createAutocompleteSource(field).then(function ($await_7) {
              try {
                closeAllLists(_this4, undefined, field);
                _this4._start(query, field);
                return $If_3.call(_this4);
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }, $error);
          } else {
            closeAllLists(_this4, undefined, field);
            return $If_3.call(_this4);
          }
          function $If_3() {
            return $return();
          }
        });
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this5 = this;
        inputComponent(this);
        this.hook = debouncer(function (event) {
          _this5._compose(event.target);
        }, this.options.debounce);
        this.options.events.forEach(function (eventType) {
          for (var _i3 = 0, _Object$entries3 = Object.entries(_this5._fields); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
              key = _Object$entries3$_i[0],
              field = _Object$entries3$_i[1];
            field.removeEventListener(eventType, _this5.hook);
            if (_this5.options.suggestions.includes(key)) {
              field.addEventListener(eventType, _this5.hook);
            }
          }
        });
      }
    }, {
      key: "on",
      value: function on(type, listener) {
        this.triggers.on(type, listener);
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;
        this.options.events.forEach(function (eventType) {
          for (var _i4 = 0, _Object$values = Object.values(_this6._fields); _i4 < _Object$values.length; _i4++) {
            var field = _Object$values[_i4];
            field.parentNode.classList.remove('swiftyper_wrapper');
            field.removeEventListener(eventType, _this6.hook);
          }
        });
      }
    }]);
    return business;
  }();

  var places = function () {
    function places(options) {
      _classCallCheck(this, places);
      this.triggers = new events();
      this.service = 'places';
      this.options = {};
      this.configure(options);
      this._init();
    }
    _createClass(places, [{
      key: "configure",
      value: function configure(options) {
        var _this = this;
        var _Object$assign = Object.assign(this.options, options),
          _Object$assign$select = _Object$assign.selectors,
          selectors = _Object$assign$select === void 0 ? {
            address: null,
            street: null,
            streetName: null,
            streetNumber: null,
            buildingNumber: null,
            streetNumberParts: null,
            municipality: null,
            postalCode: null,
            country: null
          } : _Object$assign$select,
          _Object$assign$sugges = _Object$assign.suggestions,
          suggestions = _Object$assign$sugges === void 0 ? ['address', 'street', 'streetName', 'municipality', 'postalCode'] : _Object$assign$sugges,
          _Object$assign$endpoi = _Object$assign.endpoint,
          endpoint = _Object$assign$endpoi === void 0 ? 'api.swiftyper.sk' : _Object$assign$endpoi,
          _Object$assign$logo = _Object$assign.logo,
          logo = _Object$assign$logo === void 0 ? true : _Object$assign$logo,
          _Object$assign$nextFo = _Object$assign.nextFocus,
          nextFocus = _Object$assign$nextFo === void 0 ? true : _Object$assign$nextFo,
          apiKey = _Object$assign.apiKey,
          _Object$assign$highli = _Object$assign.highlight,
          highlight = _Object$assign$highli === void 0 ? true : _Object$assign$highli,
          _Object$assign$showNo = _Object$assign.showNoResults,
          showNoResults = _Object$assign$showNo === void 0 ? false : _Object$assign$showNo,
          _Object$assign$events = _Object$assign.events,
          events = _Object$assign$events === void 0 ? ['input'] : _Object$assign$events,
          _Object$assign$countr = _Object$assign.country,
          country = _Object$assign$countr === void 0 ? ['CZ', 'SK', 'PL'] : _Object$assign$countr,
          _Object$assign$contex = _Object$assign.context,
          context = _Object$assign$contex === void 0 ? [] : _Object$assign$contex,
          _Object$assign$contex2 = _Object$assign.contextType,
          contextType = _Object$assign$contex2 === void 0 ? 'preference' : _Object$assign$contex2,
          aroundLatLng = _Object$assign.aroundLatLng,
          _Object$assign$around = _Object$assign.aroundLatLngViaIP,
          aroundLatLngViaIP = _Object$assign$around === void 0 ? true : _Object$assign$around,
          _Object$assign$limit = _Object$assign.limit,
          limit = _Object$assign$limit === void 0 ? 7 : _Object$assign$limit,
          _Object$assign$deboun = _Object$assign.debounce,
          debounce = _Object$assign$deboun === void 0 ? 300 : _Object$assign$deboun,
          _Object$assign$minlen = _Object$assign.minlength,
          minlength = _Object$assign$minlen === void 0 ? 1 : _Object$assign$minlen,
          _Object$assign$theme = _Object$assign.theme,
          theme = _Object$assign$theme === void 0 ? 'modern-light' : _Object$assign$theme,
          _Object$assign$htmlAu = _Object$assign.htmlAutocomplete,
          htmlAutocomplete = _Object$assign$htmlAu === void 0 ? false : _Object$assign$htmlAu,
          _Object$assign$itemTe = _Object$assign.itemTemplate,
          itemTemplate = _Object$assign$itemTe === void 0 ? function (suggestion, element, textResolver) {
            element.innerHTML = "\n          <span style=\"text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">\n              ".concat(_this.options.highlight ? suggestion.highlight : textResolver(suggestion), "\n          </span>");
          } : _Object$assign$itemTe;
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
        for (var _i = 0, _Object$entries = Object.entries(this.options.selectors); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            selector = _Object$entries$_i[1];
          if (typeof selector === 'string') {
            this._fields[key] = document.querySelector(selector);
          } else if (typeof selector === 'function') {
            this._fields[key] = selector();
          } else {
            this._fields[key] = selector;
          }
          if (!(this._fields[key] instanceof HTMLInputElement)) {
            throw new Error("Element ".concat(key, " nie je input."));
          }
          this._fields[key].parentNode.classList.add('swiftyper_wrapper');
          this._fields[key].autocomplete = this.options.htmlAutocomplete ? 'on' : 'off';
        }
        this._setTheme();
        return this;
      }
    }, {
      key: "_setTheme",
      value: function _setTheme() {
        clearStyle(this._style);
        this._style = insertCss_2(themes[this.options.theme], {
          prepend: true
        });
      }
    }, {
      key: "_start",
      value: function _start(query, field) {
        var _this2 = this;
        var results = this.suggestions;
        var dataFeedback = {
          query: query,
          results: results
        };
        var total = Array.from(results || []).length;
        if (this.options.showNoResults || total) {
          generateList(this, dataFeedback, field);
        }
        if (this.options.showNoResults && !total) {
          var result = document.createElement("li");
          result.setAttribute("class", "no_result");
          result.setAttribute("tabindex", "1");
          result.innerHTML = "<span style=\"display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.5);\">\u017Diadne v\xFDsledky pre v\xFDraz \"".concat(dataFeedback.query, "\"</span>");
          document.querySelector("#swiftyper_list").appendChild(result);
          return;
        }
        navigate(this, dataFeedback, field);
        document.addEventListener("click", function (event) {
          return closeAllLists(_this2, event.target, field);
        });
      }
    }, {
      key: "_createAutocompleteSource",
      value: function _createAutocompleteSource(field) {
        var _this3 = this;
        return new Promise(function ($return, $error) {
          var apiKey, host, country, limit, context, contextType, around_latlng, around_latlng_via_ip, swiftyperClient, query, segment, data, municipality, postal_code, createAutocompleteDataset;
          var _this3$options = _this3.options;
          apiKey = _this3$options.apiKey;
          host = _this3$options.endpoint;
          country = _this3$options.country;
          limit = _this3$options.limit;
          context = _this3$options.context;
          contextType = _this3$options.contextType;
          around_latlng = _this3$options.aroundLatLng;
          around_latlng_via_ip = _this3$options.aroundLatLngViaIP;
          if (_this3.swiftyperClient && _this3.swiftyperClient._lastRequest) {
            _this3.swiftyperClient._lastRequest.destroy();
          }
          swiftyperClient = new swiftyper$1(apiKey, {
            host: host
          });
          _this3.swiftyperClient = swiftyperClient;
          query = field.value;
          segment = null, data = {};
          for (var _i2 = 0, _Object$entries2 = Object.entries(_this3._fields); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              key = _Object$entries2$_i[0],
              _field = _Object$entries2$_i[1];
            if (_field.isEqualNode(field)) {
              segment = key;
            }
            data[key] = _field.value;
          }
          var _data = data;
          municipality = _data.municipality;
          postal_code = _data.postalCode;
          createAutocompleteDataset = function createAutocompleteDataset() {
            return new Promise(function ($return, $error) {
              switch (segment) {
                case 'street':
                case 'streetName':
                case 'address':
                  return swiftyperClient.places.query({
                    query: query,
                    postal_code: postal_code,
                    municipality: municipality,
                    country: country,
                    context: context,
                    contextType: contextType,
                    around_latlng: around_latlng,
                    around_latlng_via_ip: around_latlng_via_ip,
                    limit: limit
                  }).then($return, $error);
                case 'municipality':
                  return swiftyperClient.places.municipality({
                    query: query,
                    postal_code: postal_code,
                    country: country,
                    context: context,
                    contextType: contextType,
                    around_latlng: around_latlng,
                    around_latlng_via_ip: around_latlng_via_ip,
                    limit: limit
                  }).then($return, $error);
                case 'postalCode':
                  return swiftyperClient.places.postal({
                    query: query,
                    municipality: municipality,
                    country: country,
                    context: context,
                    contextType: contextType,
                    around_latlng: around_latlng,
                    around_latlng_via_ip: around_latlng_via_ip,
                    limit: limit
                  }).then($return, $error);
              }
              return $return();
            });
          };
          var $Try_1_Post = function $Try_1_Post() {
            try {
              return $return();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };
          var $Try_1_Catch = function $Try_1_Catch(error) {
            try {
              _this3.suggestions = null;
              _this3.triggers.emit('error', {
                error: error
              });
              if (error.code === 'over_query_limit') {
                _this3.triggers.emit('limit', {
                  error: error
                });
              }
              return $Try_1_Post();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };
          try {
            return createAutocompleteDataset().then(function ($await_7) {
              try {
                _this3.suggestions = $await_7;
                _this3.triggers.emit('suggestions', {
                  suggestions: _this3.suggestions
                });
                eventEmitter(field, {
                  suggestions: _this3.suggestions
                }, "suggestions");
                return $Try_1_Post();
              } catch ($boundEx) {
                return $Try_1_Catch($boundEx);
              }
            }, $Try_1_Catch);
          } catch (error) {
            $Try_1_Catch(error);
          }
        });
      }
    }, {
      key: "_compose",
      value: function _compose(field) {
        var _this4 = this;
        return new Promise(function ($return, $error) {
          var query;
          if (isAutofilled(field)) {
            return $return();
          }
          query = field.value;
          if (query.length >= _this4.options.minlength) {
            return _this4._createAutocompleteSource(field).then(function ($await_8) {
              try {
                closeAllLists(_this4, undefined, field);
                _this4._start(query, field);
                return $If_3.call(_this4);
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }, $error);
          } else {
            closeAllLists(_this4, undefined, field);
            return $If_3.call(_this4);
          }
          function $If_3() {
            return $return();
          }
        });
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this5 = this;
        inputComponent(this);
        this.hook = debouncer(function (event) {
          _this5._compose(event.target);
        }, this.options.debounce);
        this.options.events.forEach(function (eventType) {
          for (var _i3 = 0, _Object$entries3 = Object.entries(_this5._fields); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
              key = _Object$entries3$_i[0],
              field = _Object$entries3$_i[1];
            field.removeEventListener(eventType, _this5.hook);
            if (_this5.options.suggestions.includes(key)) {
              field.addEventListener(eventType, _this5.hook);
            }
          }
        });
      }
    }, {
      key: "on",
      value: function on(type, listener) {
        this.triggers.on(type, listener);
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;
        this.options.events.forEach(function (eventType) {
          for (var _i4 = 0, _Object$values = Object.values(_this6._fields); _i4 < _Object$values.length; _i4++) {
            var field = _Object$values[_i4];
            field.parentNode.classList.remove('swiftyper_wrapper');
            field.removeEventListener(eventType, _this6.hook);
          }
        });
      }
    }]);
    return places;
  }();

  var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  var validate = function validate(email) {
    if (!email) return false;
    if (email.length > 254) return false;
    var valid = tester.test(email);
    if (!valid) return false;
    var parts = email.split("@");
    if (parts[0].length > 64) return false;
    var domainParts = parts[1].split(".");
    if (domainParts.some(function (part) {
      return part.length > 63;
    })) return false;
    return true;
  };

  var emailValidator = function () {
    function emailValidator(options) {
      _classCallCheck(this, emailValidator);
      this.triggers = new events();
      this.service = 'utils';
      this.options = {};
      this.cache = {};
      this.configure(options);
      this._init();
    }
    _createClass(emailValidator, [{
      key: "configure",
      value: function configure(options) {
        var _Object$assign = Object.assign(this.options, options),
          _Object$assign$select = _Object$assign.selectors,
          selectors = _Object$assign$select === void 0 ? {
            email: null
          } : _Object$assign$select,
          _Object$assign$endpoi = _Object$assign.endpoint,
          endpoint = _Object$assign$endpoi === void 0 ? 'api.swiftyper.sk' : _Object$assign$endpoi,
          apiKey = _Object$assign.apiKey,
          _Object$assign$events = _Object$assign.events,
          events = _Object$assign$events === void 0 ? ['input', 'focus'] : _Object$assign$events,
          _Object$assign$deboun = _Object$assign.debounce,
          debounce = _Object$assign$deboun === void 0 ? 300 : _Object$assign$deboun;
        this.options.selectors = selectors;
        this.options.endpoint = endpoint;
        this.options.apiKey = apiKey;
        this.options.events = events;
        this.options.debounce = debounce;
        this._fields = {};
        for (var _i = 0, _Object$entries = Object.entries(this.options.selectors); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            selector = _Object$entries$_i[1];
          if (typeof selector === 'string') {
            this._fields[key] = document.querySelector(selector);
          } else if (typeof selector === 'function') {
            this._fields[key] = selector();
          } else {
            this._fields[key] = selector;
          }
          if (!(this._fields[key] instanceof HTMLInputElement)) {
            throw new Error("Element ".concat(key, " nie je input."));
          }
        }
        return this;
      }
    }, {
      key: "_start",
      value: function _start(email, field) {
        var _this = this;
        return new Promise(function ($return, $error) {
          return _this.validateEmail(email, field).then(function ($await_3) {
            try {
              return $return();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          }, $error);
        });
      }
    }, {
      key: "_createValidator",
      value: function _createValidator(field) {
        var _this2 = this;
        return new Promise(function ($return, $error) {
          var apiKey, host, email, swiftyperClient;
          var _this2$options = _this2.options;
          apiKey = _this2$options.apiKey;
          host = _this2$options.endpoint;
          email = field.value;
          if (_this2.cache[email]) {
            _this2.triggers.emit('analysis', _this2.cache[email]);
            return $return();
          }
          if (_this2.swiftyperClient && _this2.swiftyperClient._lastRequest) {
            _this2.swiftyperClient._lastRequest.destroy();
          }
          swiftyperClient = new swiftyper$1(apiKey, {
            host: host
          });
          _this2.swiftyperClient = swiftyperClient;
          var $Try_1_Post = function $Try_1_Post() {
            try {
              return $return();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };
          var $Try_1_Catch = function $Try_1_Catch(error) {
            try {
              _this2.analysis = null;
              _this2.triggers.emit('error', {
                error: error
              });
              if (error.code === 'over_query_limit') {
                _this2.triggers.emit('limit', {
                  error: error
                });
              }
              return $Try_1_Post();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };
          try {
            return swiftyperClient.emailUtil.validate({
              email: email
            }).then(function ($await_4) {
              try {
                _this2.analysis = $await_4;
                _this2.triggers.emit('analysis', _this2.analysis);
                _this2.cache[email] = _this2.analysis;
                eventEmitter(field, {
                  analysis: _this2.analysis
                }, "analysis");
                return $Try_1_Post();
              } catch ($boundEx) {
                return $Try_1_Catch($boundEx);
              }
            }, $Try_1_Catch);
          } catch (error) {
            $Try_1_Catch(error);
          }
        });
      }
    }, {
      key: "_compose",
      value: function _compose(field) {
        var _this3 = this;
        return new Promise(function ($return, $error) {
          var email = field.value;
          _this3._start(email, field);
          return $return();
        });
      }
    }, {
      key: "validateEmail",
      value: function validateEmail(email, field) {
        var _this4 = this;
        return new Promise(function ($return, $error) {
          var isValid;
          isValid = validate(email);
          _this4.triggers.emit('analysis', {
            email: email,
            syntax: isValid
          });
          if (isValid) {
            return _this4._createValidator(field).then(function ($await_5) {
              try {
                return $If_2.call(_this4);
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }, $error);
          }
          function $If_2() {
            return $return();
          }
          return $If_2.call(_this4);
        });
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this5 = this;
        this.hook = debouncer(function (event) {
          _this5._compose(event.target);
        }, this.options.debounce);
        this.options.events.forEach(function (eventType) {
          for (var _i2 = 0, _Object$entries2 = Object.entries(_this5._fields); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2);
              _Object$entries2$_i[0];
              var field = _Object$entries2$_i[1];
            field.addEventListener(eventType, _this5.hook);
          }
        });
      }
    }, {
      key: "on",
      value: function on(type, listener) {
        this.triggers.on(type, listener);
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;
        this.options.events.forEach(function (eventType) {
          for (var _i3 = 0, _Object$values = Object.values(_this6._fields); _i3 < _Object$values.length; _i3++) {
            var field = _Object$values[_i3];
            field.removeEventListener(eventType, _this6.hook);
          }
        });
      }
    }]);
    return emailValidator;
  }();

  var swiftyper = {
    business: business,
    places: places,
    emailValidator: emailValidator
  };

  return swiftyper;

}));
