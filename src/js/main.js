import '../styles/styles.scss';

import { initBurgerMenu } from './modules/burger';
import { moveHeaderElements } from './modules/move-header-elements.js';
import { initThemeToggle } from './modules/theme.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  moveHeaderElements();
  initThemeToggle();
});

window.addEventListener('load', () => {});
