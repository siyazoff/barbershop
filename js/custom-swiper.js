const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

const exampleSwiper = new Swiper(".examples-swiper", {
  direction: "horizontal",
  loop: false,
  spacBetween: 0,
  slidesPerView: 4,
  navigation: {
    nextEl: ".ex-btn-next",
    prevEl: ".ex-btn-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  breakpoints: {
    328: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
