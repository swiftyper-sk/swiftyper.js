export default (field) => {
  const list = document.createElement('ul');

  list.setAttribute("id", 'swiftyper_list');
  list.setAttribute("aria-label", 'Výsledky vyhľadávania');
  list.setAttribute("class", 'swiftyper_list');
  list.setAttribute("role", "listbox");
  list.setAttribute("tabindex", "-1");

  field.insertAdjacentElement('afterend', list);

  return list;
};
