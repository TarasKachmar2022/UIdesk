const { height: pageHeaderHeight } = document
  .querySelector('[data-header]')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
