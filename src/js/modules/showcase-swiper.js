import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { DESKTOP_WIDTH } from '../constants';

export const initShowcaseSwiper = () => {
  const sliders = document.querySelectorAll('[data-showcase-swiper]');

  sliders.forEach((slider) => {
    let swiper = null;

    const enable = () => {
      if (swiper) return;

      swiper = new Swiper(slider, {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true,
        },
      });
    };

    const disable = () => {
      if (!swiper) return;
      swiper.destroy(true, true);
      swiper = null;
    };

    if (!DESKTOP_WIDTH.matches) enable();
    DESKTOP_WIDTH.addEventListener('change', () => {
      if (DESKTOP_WIDTH.matches) disable();
      else enable();
    });
  });
};
