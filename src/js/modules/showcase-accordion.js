import { DESKTOP_WIDTH } from '../constants';

export const initShowcaseAccordion = () => {
  const cards = document.querySelectorAll('[data-showcase-card]');

  cards.forEach((card) => {
    const btn = card.querySelector('[data-button-accordeon]');
    const details = card.querySelector('[data-showcase-details]');
    if (!btn || !details) return;

    btn.addEventListener('click', () => {
      if (DESKTOP_WIDTH.matches) return;

      details.classList.toggle('showcase-card__details--opened');
      btn.classList.toggle('button-accordeon--active');

      if (details.classList.contains('showcase-card__details--opened')) {
        details.style.maxHeight = details.scrollHeight + 'px';
      } else {
        details.style.maxHeight = null;
      }
    });
  });
};

