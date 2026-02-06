import { SwiperCore, swiperModules } from '../vendor/swiper.js';

let promoSwiper = null;

export const initPromoSwiper = () => {
  const root = document.querySelector('[data-promo-swiper]');
  if (!root) return;

  const paginationEl = root.querySelector('[data-promo-swiper-pagination]');
  if (!paginationEl) return;

  const isTablet = () => window.innerWidth >= 768;

  // --- ENABLE SWIPER (mobile) ---
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

  // --- DESTROY SWIPER (tablet+) ---
  const destroy = () => {
    if (!promoSwiper) return;
    console.log('DESTROY: swiper уже null');
    promoSwiper.destroy(true, true);
    promoSwiper = null;

    // УДАЛЯЕМ inline стили swiper (очень важно)
    const wrapper = root.querySelector('.swiper-wrapper');
    const slides = root.querySelectorAll('.swiper-slide');

    wrapper?.removeAttribute('style');
    slides.forEach((el) => el.removeAttribute('style'));
    console.log('DESTROY: завершён');
  };

  // --- BREAKPOINT CHECK ---
  const check = () => {
    if (isTablet()) {
      destroy();
    } else {
      enable();
    }
  };

  // Первый запуск
  check();

  // resize — единственный надёжный способ
  window.addEventListener('resize', check);
};
