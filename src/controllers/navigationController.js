import { closeAllLists } from "./listController";
import eventEmitter from "../utils/eventEmitter";

const navigate = (config, dataFeedback, field) => {
  let currentFocus = -1;

  const update = (event, list, state) => {
    event.preventDefault();
    if (state) {
      currentFocus++;
    } else {
      currentFocus--;
    }

    addActive(list);
    field.setAttribute("aria-activedescendant", list[currentFocus].id);

    eventEmitter(
      event.srcElement,
      { event, ...dataFeedback, selection: dataFeedback.results[currentFocus] },
      "navigation"
    );
  };

  const removeActive = (list) => {
    for (let index = 0; index < list.length; index++) {
      list[index].removeAttribute("aria-selected");
      list[index].classList.remove('swiftyper_selected');
    }
  };

  const addActive = (list) => {
    if (!list) return false;
    removeActive(list);
    if (currentFocus >= list.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = list.length - 1;
    list[currentFocus].setAttribute("aria-selected", "true");
    list[currentFocus].classList.add('swiftyper_selected');
  };

  const navigation = (event) => {
    let list = document.getElementById('swiftyper_list');

    if (!list) return field.removeEventListener("keydown", navigate);

    list = list.getElementsByTagName('li');

    if (event.keyCode === 27) {
      closeAllLists(config, undefined, field);
    } else if (event.keyCode === 40 || event.keyCode === 9) {
      update(event, list, true, config);
    } else if (event.keyCode === 38 || event.keyCode === 9) {
      update(event, list, false, config);
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

export { navigate };
