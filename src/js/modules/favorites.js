import { FAVORITES } from '../constants.js';

const setState = (button, isActive) => {
  button.setAttribute('aria-pressed', String(isActive));
  button.setAttribute('aria-label', isActive ? FAVORITES.LABEL_REMOVE : FAVORITES.LABEL_ADD);

  button.classList.toggle('is-active', isActive);

  const useEl = button.querySelector('use');
  if (useEl) {
    useEl.setAttribute('href', isActive ? FAVORITES.ICON_FILLED : FAVORITES.ICON_OUTLINE);
  }
};

const onClick = (event) => {
  const button = event.currentTarget;
  const isActive = button.getAttribute('aria-pressed') === 'true';
  setState(button, !isActive);
};

export const initFavorites = () => {
  const buttons = document.querySelectorAll('[data-favorites-button]');
  if (!buttons.length) return;

  buttons.forEach((button) => {
    const isActive = button.getAttribute('aria-pressed') === 'true';
    setState(button, isActive);

    button.addEventListener('click', onClick);
  });
};
