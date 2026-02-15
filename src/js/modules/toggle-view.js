export const initShowcaseView = () => {
  const container = document.querySelector('[data-showcase-view]');
  if (!container) return;

  const buttons = container.querySelectorAll('[data-showcase-view-btn]');

  container.addEventListener('click', (evt) => {
    const btn = evt.target.closest('[data-showcase-view-btn]');
    if (!btn) return;

    buttons.forEach((b) =>
      b.classList.remove('showcase__view-button--active')
    );

    btn.classList.add('showcase__view-button--active');
  });
};

