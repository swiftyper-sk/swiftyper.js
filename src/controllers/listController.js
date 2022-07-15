import createList from "../components/List";
import createItem from "../components/Item";
import footer from "../components/Footer";
import eventEmitter from "../utils/eventEmitter";
import autofocus from "../utils/autofocus";

const closeAllLists = (config, element, field) => {
  const list = document.getElementsByClassName('swiftyper_list');

  for (let index = 0; index < list.length; index++) {
    if (element !== list[index] && element !== field) {
      list[index].parentNode.removeChild(list[index]);
    }
  }

  for(const field of Object.values(config._fields)) {
    field.removeAttribute("aria-activedescendant");
    field.setAttribute("aria-expanded", false);
  }
};

const generateList = (config, data, field) => {
  const list = createList(field);

  field.setAttribute("aria-expanded", true);

  const { service } = config;

  for (let suggestionIndex = 0; suggestionIndex < data.results.length; suggestionIndex++) {
    const suggestion = data.results[suggestionIndex];
    const resultItem = createItem(suggestion, suggestionIndex, config);

    resultItem.addEventListener("click", (event) => {
      const dataFeedback = {
        event,
        field,
        query: field.value,
        suggestion,
        suggestionIndex,
      };

      if (service === 'places') {
        const {
          address,
          street,
          streetName,
          streetNumber,
          streetNumberParts,
          buildingNumber,
          postalCode,
          municipality,
          country
        } = config._fields;

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
        const {
          name,
          cin,
          tin,
          vatin,
          address,
          street,
          streetName,
          streetNumber,
          streetNumberParts,
          buildingNumber,
          postalCode,
          municipality,
          country
        } = config._fields;

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
        if (address) {
          address.value = suggestion.formatted_address;
        }
        if (street) {
          street.value = suggestion.formatted_street;
        }
        if (streetNumberParts && suggestion.formatted_number) {
          streetNumberParts.value = suggestion.formatted_number;
        }
        if (streetName) {
          streetName.value = suggestion.street;
        }
        if (streetNumber) {
          streetNumber.value = suggestion.street_number;
        }
        if (buildingNumber && suggestion.building_number) {
          buildingNumber.value = suggestion.building_number;
        }
        if (postalCode) {
          postalCode.value = suggestion.postal_code;
        }
        if (municipality) {
          municipality.value = suggestion.municipality;
        }
        if (country) {
          country.value = suggestion.formatted_country;
        }
      }

      autofocus(config, field);

      config.triggers.emit('change', dataFeedback);
      eventEmitter(field, dataFeedback, "change");
    });

    list.appendChild(resultItem);
  }

  if (data.results.length) {
    const tier = data.results.lastResponse.headers['x-swiftyper-tier'];

    if ((tier === 'free' || config.options.logo) && data.results.length) {
      list.appendChild(footer(service));
    }
  }

  return list;
};

export { generateList, closeAllLists };
