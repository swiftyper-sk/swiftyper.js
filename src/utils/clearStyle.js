export default (style) => {
  if (style) {
    if (style.styleSheet) {
      style.styleSheet.cssText = ''
    } else {
      style.textContent = '';
    }
  }
};
