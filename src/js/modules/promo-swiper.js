import { SwiperCore, swiperModules } from '../vendor/swiper.js';

let promoSwiper = null;

export const initPromoSwiper = () => {
  const root = document.querySelector('[data-promo-swiper]');
  if (!root) return;

  const paginationEl = root.querySelector('[data-promo-swiper-pagination]');
  if (!paginationEl) return;

  const isTablet = () => window.innerWidth >= 768;

  const enable = () => {
    if (promoSwiper) return;

    promoSwiper = new SwiperCore(root, {
      init: false,
      modules: [swiperModules.Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 700,
      pagination: {
        el: paginationEl,
        clickable: true,
        bulletClass: 'promo-bullet',
        bulletActiveClass: 'promo-bullet--active',
        renderBullet: (index, className) =>
          `<button type="button" class="${className}" aria-label="Слайд ${index + 1}"></button>`,
      },
    });

    promoSwiper.init();
  };

  const destroy = () => {
    if (!promoSwiper) return;
    promoSwiper.destroy(true, true);
    promoSwiper = null;
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
