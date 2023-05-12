export const removeClass = (arr) => {
  arr.forEach((el) => {
    el.classList.remove('no-js');
  });
};
