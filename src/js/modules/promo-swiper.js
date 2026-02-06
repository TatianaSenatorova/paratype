import { SwiperCore, swiperModules } from '../vendor/swiper.js';
import { TABLET_WIDTH } from '../constants.js';

let promoSwiper = null;

export const initPromoSwiper = () => {
  const root = document.querySelector('[data-promo-swiper]');
  if (!root) return;

  const paginationEl = root.querySelector('[data-promo-swiper-pagination]');
  if (!paginationEl) return;

  const enable = () => {
    if (promoSwiper) return;

    promoSwiper = new SwiperCore(root, {
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
  };

  const destroy = () => {
    if (!promoSwiper) return;
    promoSwiper.destroy(true, true);
    promoSwiper = null;
  };

  const breakpointChecker = () => {
    if (TABLET_WIDTH.matches) {
      destroy();
    } else {
      enable();
    }
  };

  breakpointChecker();
  TABLET_WIDTH.addEventListener('change', breakpointChecker);
};
