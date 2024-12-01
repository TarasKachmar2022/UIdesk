// import Swiper JS
import Swiper, {
  Navigation,
  Autoplay,
  Pagination,
  EffectCoverflow,
} from 'swiper';
Swiper.use([EffectCoverflow]);
Swiper.use([Pagination]);
// import Swiper styles
import 'swiper/swiper.scss';

var swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Autoplay, Pagination],
  speed: 3000,
  initialSlide: 1,
  spaceBetween: 50,
  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
