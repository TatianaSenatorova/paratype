import { DESKTOP_WIDTH } from '../constants';

export const initShowcaseHoverDetails = () => {
  const cards = document.querySelectorAll('[data-showcase-card]');

  cards.forEach((card) => {
    if (card.classList.contains('showcase-card--big')) return;

    const wrapper = card.querySelector('.showcase-card__content-wrapper');
    const details = card.querySelector('[data-showcase-details]');
    if (!wrapper || !details) return;

    wrapper.addEventListener('mouseenter', () => {
      if (!DESKTOP_WIDTH.matches) return;

      details.classList.add('showcase-card__details--opened');
      details.style.maxHeight = details.scrollHeight + 'px';
    });

    wrapper.addEventListener('mouseleave', () => {
      if (!DESKTOP_WIDTH.matches) return;

      details.classList.remove('showcase-card__details--opened');
      details.style.maxHeight = null;
    });
  });
};
