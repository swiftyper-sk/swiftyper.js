export default (config) => {
  for(const field of Object.values(config._fields)) {
    field.setAttribute("role", "combobox");
    field.setAttribute("aria-haspopup", true);
    field.setAttribute("aria-expanded", false);
    field.setAttribute("aria-controls", 'swiftyper_list');
    field.setAttribute("aria-autocomplete", "both");
  }
};
