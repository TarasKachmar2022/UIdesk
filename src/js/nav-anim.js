const animNavItems = document.querySelectorAll('._yakir');

if (animNavItems.length > 0) {
  window.addEventListener('scroll', animNavOnScroll);

  let topOffset;

  topOffset = topOffsetSelector();

  function selectLastItem() {
    let lastItem = [];
    for (let index = 0; index < animNavItems.length; index++) {
      lastItem.push(animNavItems[index]);
    }
    return lastItem.pop();
  }

  function animNavOnScroll() {
    for (let index = 0; index < animNavItems.length; index++) {
      const animNavItem = animNavItems[index];
      const animNavItemHeight = animNavItem.offsetHeight;
      const animNavItemOffset = offset(animNavItem).top;
      const pageHeight = document.body.scrollHeight;
      const vh = window.innerHeight;
      if (
        (pageYOffset + topOffset > animNavItemOffset &&
          pageYOffset + topOffset < animNavItemOffset + animNavItemHeight) ||
        (animNavItem === selectLastItem() &&
          pageYOffset + animNavItemHeight >= pageHeight - vh)
      ) {
        changeSection(animNavItem);
      }
    }
  }

  function topOffsetSelector() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 768) {
      topOffset = 250;
      return topOffset;
    }
  }

  animNavOnScroll();
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log({ top: rect.top + scrollTop });
  return { top: rect.top + scrollTop };
}

function changeSection(navItem) {
  const navElements = document.querySelectorAll('a.nav__link');
  const elementID = navItem.getAttribute('id');
  for (let index = 0; index < navElements.length; index++) {
    const navElement = navElements[index];
    const navID = navElement.getAttribute('href').substring(1);
    if (elementID === navID) {
      addClass(navElement);
      deleteClass(elementID);
    }
  }
}

function addClass(navElement) {
  navElement.classList.add('_nav__link--current');
}

function deleteClass(elementID) {
  const elementsForDelete = document.querySelectorAll('._nav__link--current');
  if (elementsForDelete.length <= 1) return;
  for (let index = 0; index < elementsForDelete.length; index++) {
    const elementForDelete = elementsForDelete[index];
    if (elementID !== elementForDelete.getAttribute('href').substring(1)) {
      elementForDelete.classList.remove('_nav__link--current');
    }
  }
}
