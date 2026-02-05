import '../styles/styles.scss';

import { initBurgerMenu } from './modules/burger';
import { moveHeaderElements } from './modules/move-header-elements.js';
import { initThemeToggle } from './modules/theme.js';
import { setHeaderHeight } from './modules/set-header-height.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  moveHeaderElements();
  initThemeToggle();
  setHeaderHeight();
});

window.addEventListener('load', () => {});

window.addEventListener('resize', setHeaderHeight);
