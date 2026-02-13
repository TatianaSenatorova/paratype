import { BADGE_MAX_VALUE, BADGE_OVERFLOW_TEXT } from '../constants.js';

const formatBadgeValue = (value) => {
  const num = Number(value);

  if (Number.isNaN(num)) return value;
  if (num > BADGE_MAX_VALUE) return BADGE_OVERFLOW_TEXT;

  return String(num);
};

export const initBadgeFormatter = () => {
  const badges = document.querySelectorAll('[data-badge]');
  if (!badges.length) return;

  badges.forEach((badge) => {
    const raw = badge.textContent.trim();
    if (!raw) return;

    const formatted = formatBadgeValue(raw);
    badge.textContent = formatted;
  });
};
