const btnEl = document.getElementById('btn-up');

window.addEventListener('scroll', scrollFunction);
btnEl.addEventListener('click', topFunction);

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    btnEl.classList.add('btn-up--active');
  } else {
    btnEl.classList.remove('btn-up--active');
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
