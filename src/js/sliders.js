let storesSlider = new Swiper('.stores__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 5000,
  loop: true,
  // autoplay: {
  //   delay: 1,
  // },
  allowTouchMove: false,

  breakpoints: {
    // 576: {
    //   spaceBetween: 42,
    // },
  },
})

let productsSlider = new Swiper('.products__slider', {
  slidesPerView: 1.8,
  centeredSlides: true,
  slidesPerGroup: 1,
  speed: 400,
  loop: true,
  loopAdditionalSlides: 4,
  // autoplay: {
  //   delay: 1,
  // },
  allowTouchMove: true,

  navigation: {
    nextEl: '.products__slider-btn-next',
    prevEl: '.products__slider-btn-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 5.5,
    },
  },
})
