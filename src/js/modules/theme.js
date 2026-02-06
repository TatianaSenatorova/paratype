import { THEME_KEY} from '../constants';

const initThemeToggle = () => {
  const theme = document.querySelector('[data-theme]');
  if (!theme) return;

  const toggle = theme.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  const saved = localStorage.getItem(THEME_KEY);
  const systemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const initialIsDark = saved ? saved === 'dark' : systemDark;

  document.documentElement.classList.toggle('theme-dark', initialIsDark);
  toggle.classList.toggle('theme__toggle--dark', initialIsDark);
  toggle.setAttribute('aria-pressed', String(initialIsDark));

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('theme-dark');

    toggle.classList.toggle('theme__toggle--dark', isDark);
    toggle.setAttribute('aria-pressed', String(isDark));

    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  });
};

export { initThemeToggle };
