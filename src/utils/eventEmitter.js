export default (target, detail, name) => {
  target.dispatchEvent(
    new CustomEvent(name, {
      bubbles: true,
      detail,
      cancelable: true,
    })
  );
};
