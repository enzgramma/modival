// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

//Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,

  breakpoints: {
    788: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


//Акордеон - мобильная навигация
import acordeon from './modules/acordeon.js';
acordeon();


//Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
