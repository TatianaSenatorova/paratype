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
import { initBadgeFormatter } from './modules/badge-formatter.js';
import { initFilter } from './modules/filter.js';
import { initShowcaseView } from './modules/toggle-view.js';
import { initShowcaseAccordion } from './modules/showcase-accordion.js';
import { initShowcaseHoverDetails } from './modules/hover-accordion.js';
import { initShowcaseHoverPreview } from './modules/hover-preview.js';
import { initShowcaseSwiper } from './modules/showcase-swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initMoveHeaderElements();
  initThemeToggle();
  setHeaderHeight();
  initPromoSwiper();
  initBadgeFormatter();
  initCatalogSwiper();
  initFilter();
  initShowcaseView();
  initShowcaseAccordion();
  initShowcaseHoverDetails();
  initShowcaseHoverPreview();
  initShowcaseSwiper();
});

window.addEventListener('load', () => {});

window.addEventListener('resize', setHeaderHeight);
