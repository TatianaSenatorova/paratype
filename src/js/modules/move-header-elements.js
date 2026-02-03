import { TABLET_WIDTH } from '../constants.js';

const header = document.querySelector('[data-header]');
const headerTop = header.querySelector('.header__top');
const controls = header.querySelector('.header__controls');
const dropdown = header.querySelector('.header__dropdown');

const theme = header.querySelector('.header__theme');
const userMenu = header.querySelector('.user-menu');

const moveHeaderElements = () => {
  if (TABLET_WIDTH.matches) {
    headerTop.append(userMenu);
    controls.insertBefore(theme, controls.firstChild);
  } else {
    controls.append(userMenu);
    dropdown.prepend(theme);
  }
};

TABLET_WIDTH.addEventListener('change', moveHeaderElements);
export { moveHeaderElements };
