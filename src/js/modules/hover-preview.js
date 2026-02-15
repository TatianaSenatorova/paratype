import { DESKTOP_WIDTH } from '../constants';

export const initShowcaseHoverPreview = () => {
  const cards = document.querySelectorAll('[data-showcase-card]');

  cards.forEach((card) => {
    const list = card.querySelector('.showcase-card__list');
    if (!list) return;

    let rect = null;
    let zone = 0;

    list.addEventListener('mouseenter', () => {
      if (!DESKTOP_WIDTH.matches) return;
      rect = list.getBoundingClientRect();
      zone = rect.width / 3;
    });

    list.addEventListener('mousemove', (e) => {
      if (!DESKTOP_WIDTH.matches || !rect) return;

      const x = e.clientX - rect.left;

      card.classList.remove(
        'showcase-card--first',
        'showcase-card--middle',
        'showcase-card--last'
      );

      if (x < zone) card.classList.add('showcase-card--first');
      else if (x < zone * 2) card.classList.add('showcase-card--middle');
      else card.classList.add('showcase-card--last');
    });
  });
};
