import '../styles/styles.scss';

import { initBurgerMenu } from './modules/burger';
import { initMoveHeaderElements } from './modules/move-header-elements.js';
import { initThemeToggle } from './modules/theme.js';
import { setHeaderHeight } from './modules/set-header-height.js';
import { initPromoSwiper } from './modules/promo-swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initMoveHeaderElements();
  initThemeToggle();
  setHeaderHeight();
  initPromoSwiper();
});

window.addEventListener('load', () => {});

window.addEventListener('resize', setHeaderHeight);
