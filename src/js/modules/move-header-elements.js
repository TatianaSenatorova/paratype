import { DESKTOP_WIDTH } from '../constants.js';

const moveHeaderElements = () => {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const headerTop = header.querySelector('.header__top');
  const headerBar = header.querySelector('.header__bar');
  const controls = header.querySelector('.header__controls');
  const dropdown = header.querySelector('.header__dropdown');

  const theme = header.querySelector('.header__theme');
  const userMenu = header.querySelector('.user-menu');

  if (!headerTop || !headerBar || !controls || !dropdown || !theme || !userMenu) return;

  if (DESKTOP_WIDTH.matches) {
    headerTop.append(userMenu);
    controls.insertBefore(theme, controls.firstChild);
    headerBar.insertBefore(dropdown, controls);
  } else {
    controls.append(userMenu);
    dropdown.prepend(theme);
  }
};

const initMoveHeaderElements = () => {
  moveHeaderElements();
  DESKTOP_WIDTH.addEventListener('change', moveHeaderElements);
};

export { initMoveHeaderElements };

