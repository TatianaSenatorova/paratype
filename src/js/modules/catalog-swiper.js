import { SwiperCore } from '../vendor/swiper.js';

let catalogSwiper = null;

export const initCatalogSwiper = () => {
  const root = document.querySelector('[data-catalog-swiper]');
  if (!root) return;

  const isTablet = () => window.innerWidth >= 768;

  const enable = () => {
    if (catalogSwiper) return;

    catalogSwiper = new SwiperCore(root, {
      init: false,
      slidesPerView: 'auto',
      spaceBetween: 10,
      speed: 400,
      freeMode: true,
      watchOverflow: true,
    });

    catalogSwiper.init();
  };

  const destroy = () => {
    if (!catalogSwiper) return;

    catalogSwiper.destroy(true, true);
    catalogSwiper = null;

    const wrapper = root.querySelector('.swiper-wrapper');
    const slides = root.querySelectorAll('.swiper-slide');

    wrapper?.removeAttribute('style');
    slides.forEach((el) => el.removeAttribute('style'));
  };

  const check = () => {
    if (isTablet()) {
      destroy();
    } else {
      enable();
    }
  };

  check();
  window.addEventListener('resize', check);
};
