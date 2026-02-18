const BASE = import.meta.env.BASE_URL;

export const TABLET_WIDTH = window.matchMedia('(min-width: 768px)');
export const DESKTOP_WIDTH = window.matchMedia('(min-width: 1024px)');
export const THEME_KEY = 'theme';
export const BADGE_MAX_VALUE = 99;
export const BADGE_OVERFLOW_TEXT = '99+';
export const FAVORITES = {
  SELECTOR: '[data-favorites-button]',
  ICON_OUTLINE: `${BASE}images/sprite/stack.svg#heart`,
  ICON_FILLED: `${BASE}images/sprite/stack.svg#heart-fill`,
  LABEL_ADD: 'Добавить в избранное',
  LABEL_REMOVE: 'Убрать из избранного',
};
