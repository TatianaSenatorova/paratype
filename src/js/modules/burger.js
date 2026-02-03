import { isEscapeKey } from '../utils.js/keydown';

const initBurgerMenu = () => {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const burger = header.querySelector('[data-burger]');
  const menu = header.querySelector('[data-menu]');
  if (!burger || !menu) return;

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMenu();
    }
  };

  const onDocumentClick = (evt) => {
    if (!menu.contains(evt.target) && !burger.contains(evt.target)) {
      closeMenu();
    }
  };

  const openMenu = () => {
    menu.classList.add('is-opened');
    burger.classList.add('is-opened');
    burger.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', onDocumentClick);
  };

  const closeMenu = () => {
    menu.classList.remove('is-opened');
    burger.classList.remove('is-opened');
    burger.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  };

  burger.addEventListener('click', () => {
    if (menu.classList.contains('is-opened')) {
      closeMenu();
      return;
    }
    openMenu();
  });
};

export { initBurgerMenu };
