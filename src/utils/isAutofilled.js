export default (element) => {
  return [":autofill", ":-webkit-autofill", ":-moz-autofill"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
};
