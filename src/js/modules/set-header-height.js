const setHeaderHeight = () => {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const height = header.offsetHeight;
  document.documentElement.style.setProperty(
    '--header-height',
    `${height}px`
  );
};

export { setHeaderHeight };
