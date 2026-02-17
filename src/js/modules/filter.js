import { isEscapeKey } from '../utils/keydown.js';

export const initFilter = () => {
  const filter = document.querySelector('[data-filter]');
  if (!filter) return;

  const button = filter.querySelector('[data-filter-button]');
  const list = filter.querySelector('[data-filter-list]');
  const options = filter.querySelectorAll('[data-filter-option]');

  const setTabIndex = (open) => {
    options.forEach((option) => {
      option.setAttribute('tabindex', open ? '0' : '-1');
    });
  };

  const closeFilter = () => {
    filter.classList.remove('filter--open');
    setTabIndex(false);
  };

  const openFilter = () => {
    filter.classList.add('filter--open');
    setTabIndex(true);
  };

  closeFilter();

  button.addEventListener('click', () => {
    const isOpen = filter.classList.contains('filter--open');
    isOpen ? closeFilter() : openFilter();
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      button.textContent = option.textContent;
      closeFilter();
      button.focus();
    });
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      closeFilter();
    }
  });

  document.addEventListener('click', (evt) => {
    if (!filter.contains(evt.target)) {
      closeFilter();
    }
  });
};
