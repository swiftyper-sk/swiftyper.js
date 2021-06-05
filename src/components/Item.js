import textResolver from "../utils/textResolver";

export default (item, index, config) => {
  const result = document.createElement('li');
  result.setAttribute("id", `swiftyper_result_${index}`);
  result.setAttribute("class", 'swiftyper_result');
  result.setAttribute("role", "option");
  if (config.options.itemTemplate) {
    config.options.itemTemplate(item, result, textResolver);
  }

  return result;
};
