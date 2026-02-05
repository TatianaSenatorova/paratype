export const getSwiper = () => {
  const Swiper = window.Swiper;

  if (!Swiper) {
    return;
  }

  return Swiper;
};
