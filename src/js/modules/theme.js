const initThemeToggle = () => {
  const theme = document.querySelector('[data-theme]');
  if (!theme) return;

  const toggle = theme.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isDark = toggle.classList.toggle('theme__toggle--dark');
    toggle.setAttribute('aria-pressed', String(isDark));
  });
};

export { initThemeToggle };
