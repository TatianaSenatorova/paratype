import { SwiperCore, swiperModules } from '../vendor/swiper.js';

let promoSwiper = null;

const updateSlideFocus = (swiper) => {
  swiper.slides.forEach((slide) => {
    const link = slide.querySelector('[data-slide-link]');
    if (!link) return;

    const isActive = slide.classList.contains('swiper-slide-active');

    if (isActive) {
      link.removeAttribute('tabindex');
      slide.removeAttribute('aria-hidden');
    } else {
      link.setAttribute('tabindex', '-1');
      slide.setAttribute('aria-hidden', 'true');
    }
  });
};

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

      on: {
        init(swiper) {
          updateSlideFocus(swiper);
        },
        slideChange(swiper) {
          updateSlideFocus(swiper);
        },
      },
    });

    promoSwiper.init();
    updateSlideFocus(promoSwiper);
  };

  const destroy = () => {
    if (!promoSwiper) return;

    const links = root.querySelectorAll('[data-slide-link]');
    links.forEach((link) => link.removeAttribute('tabindex'));

    const slides = root.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => slide.removeAttribute('aria-hidden'));

    promoSwiper.destroy(true, true);
    promoSwiper = null;
    const wrapper = root.querySelector('.swiper-wrapper');

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
