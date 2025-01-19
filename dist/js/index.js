/*
|--------------------------------------------------------------------------
| Swiftyper Places WebAPI
|--------------------------------------------------------------------------
|
| Účelom rozšírenia je rýchle vkladanie poštových adries bez nutnosti vyplňovania
| všetkých adresných polí formulára na webovej stránke alebo mobilnej aplikácii.
|
| https://swiftyper.sk/docs/api#places_js
|
*/
let placesAutocomplete;
function placesDemo() {
  placesAutocomplete = new swiftyper.places({
    selectors: {
      street: "#ulica",
      municipality: "#mesto",
      postalCode: "#psc",
      country: "#krajina",
    },
    debounce: 250,
    events: ["input", "focus"],
    apiKey: '2SN360bLw7lI7KB9Awu5w8oYvCWv17bsA1NAboFNo01Y',
  });

  placesAutocomplete.configure({
    limit: 8,
  });

  placesAutocomplete.on('change', function (e) {
    const selection = e.field.parentNode.parentNode.querySelector(".selection");

    if (e.suggestion.object === 'address') {
      selection.innerHTML = `📍 ${e.suggestion.formatted_address}<br>`;
      if (e.suggestion.latlng) {
        selection.innerHTML += `🌐 ${e.suggestion.latlng.lat}, ${e.suggestion.latlng.lng}<br>`;
      }
    }
  });

  placesAutocomplete.on('suggestions', e => console.table(e.suggestions));

  placesAutocomplete.on('limit', e => console.warn(e.error));

  placesAutocomplete.on('error', e => console.error(e.error));

// placesAutocomplete.destroy();
}

/*
|--------------------------------------------------------------------------
| Swiftyper Email Validator
|--------------------------------------------------------------------------
|
| Účelom rozšírenia je zvýšenie doručovateľnosti overením e-mailových
| adries pred odoslaním.
|
| https://swiftyper.sk/docs/api#email_validator_js
|
*/
let emailValidator;
function emailValidatorDemo() {
  emailValidator = new swiftyper.emailValidator({
    selectors: {
      email: "#email",
    },
    debounce: 250,
    events: ["input", "focus"],
    apiKey: 'RaJzy3mE5qAIefZ0HOe8jwbR25aFfjrqXZZvMUii57mV',
  });

  emailValidator.on('analysis', analysis => {
    const icon = document.querySelector(".email-status-icon");

    if ('syntax' in analysis) {
      icon.setAttribute('data-status', analysis.syntax ? 'valid' : 'invalid')
    } else {
      if (['safe', 'risky'].includes(analysis.reachable)) {
        icon.setAttribute('data-status', 'valid')
      } else {
        icon.setAttribute('data-status', 'error')
      }
    }

    console.log(analysis)

    document.querySelector(".metadata").innerHTML = JSON.stringify(analysis, null, 2);
  });

  emailValidator.on('error', e => console.error(e.error));

// emailValidator.destroy();
}
/*
|--------------------------------------------------------------------------
| Swiftyper Business WebAPI
|--------------------------------------------------------------------------
|
| Účelom rozšírenia je rýchle vkladanie fakturačných údajov bez nutnosti
| vyplňovania všetkých adresných polí formulára na webovej stránke
| alebo mobilnej aplikácii.
|
| https://swiftyper.sk/docs/api#business_js
|
*/
let businessAutocomplete;
function businessDemo() {
  businessAutocomplete = new swiftyper.business({
    selectors: {
      name: "#firma",
      cin: "#firma_ico",
      tin: "#firma_dic",
      vatin: "#firma_ic_dph",
      street: "#firma_ulica",
      municipality: "#firma_mesto",
      postalCode: "#firma_psc",
      country: "#firma_krajina",
    },
    limit: 8,
    highlight: true,
    debounce: 250,
    events: ["input", "focus"],
    apiKey: 'yBlqwyukNoaDlEsyDtLKiBCCd1abSIVu1CD3AaHTbCNz',
  });

  businessAutocomplete.configure({
    limit: 8,
  });

  businessAutocomplete.on('change', function (e) {
    e.field.parentNode.parentNode.querySelector(".selection").innerHTML = `📍 ${e.suggestion.formatted_address}`;
  });

  businessAutocomplete.on('suggestions', e => console.table(e.suggestions));

  businessAutocomplete.on('limit', e => console.warn(e.error));

  businessAutocomplete.on('error', e => console.error(e.error));

// businessAutocomplete.destroy();
}








const action = function (action) {
  const github = document.querySelector(".github-corner");
  const titles = document.querySelectorAll("h1");
  const selection = document.querySelector(".selection");
  const footer = document.querySelector(".footer");

  if (action === "dim") {
    github.style.opacity = 1;
    titles[0].style.opacity = 1;
    titles[1].style.opacity = 1;
    selection.style.opacity = 1;
    footer.style.opacity = 1;
  } else {
    github.style.opacity = 0.1;
    titles[0].style.opacity = 0.3;
    titles[1].style.opacity = 0.3;
    selection.style.opacity = 0.1;
    footer.style.opacity = 0.1;
  }
};

["focus", "blur"].forEach(function (eventType) {
  document.querySelectorAll("input[type=text]").forEach((el) => {
    el.addEventListener(eventType, function () {
      if (eventType === "blur") {
        action("dim");
      } else if (eventType === "focus") {
        action("light");
      }
    });
  });
});

document.querySelectorAll("input[type=radio]").forEach((el) => {
  el.addEventListener('change', function () {
    placesAutocomplete.configure({
      theme: this.value,
    });
  });
});
