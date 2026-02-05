import { DESKTOP_WIDTH } from '../constants.js';
import { getSwiper } from '../utils/get-swiper.js';

let promoSwiper = null;

export const initPromoSwiper = () => {
  const root = document.querySelector('[data-promo-swiper]');
  if (!root) return;

  const paginationEl = root.querySelector('[data-promo-swiper-pagination]');
  const Swiper = getSwiper();
  if (!Swiper) return;

  const enable = () => {
    if (promoSwiper) return;

    promoSwiper = new Swiper(root, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 700,
      pagination: {
        el: paginationEl,
        clickable: true,
        bulletClass: 'promo-bullet slider-pagination__bullet',
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
    if (DESKTOP_WIDTH.matches) {
      destroy();
    } else {
      enable();
    }
  };

  breakpointChecker();

  DESKTOP_WIDTH.addEventListener('change', breakpointChecker);
};
