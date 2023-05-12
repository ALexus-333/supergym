import Swiper from '../vendor/swiper';

const reviewsSwiper = document.querySelector('.reviews__swiper');
const reviewsButtonPrev = document.querySelector('.reviews__button-prev');
const reviewsButtonNext = document.querySelector('.reviews__button-next');

export const createReviewsSlider = () => {
  if (reviewsSwiper) {
    // eslint-disable-next-line
    new Swiper(reviewsSwiper, {
      navigation: {
        prevEl: reviewsButtonPrev,
        nextEl: reviewsButtonNext,
      },
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
    });
  }
};
