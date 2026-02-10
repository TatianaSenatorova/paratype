import '../styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { initBurgerMenu } from './modules/burger';
import { initMoveHeaderElements } from './modules/move-header-elements.js';
import { initThemeToggle } from './modules/theme.js';
import { setHeaderHeight } from './modules/set-header-height.js';
import { initPromoSwiper } from './modules/promo-swiper.js';
import { initCatalogSwiper } from './modules/catalog-swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initMoveHeaderElements();
  initThemeToggle();
  setHeaderHeight();
  initPromoSwiper();
  initCatalogSwiper();
});

window.addEventListener('load', () => {});

window.addEventListener('resize', setHeaderHeight);
