const productsSwiper = new Swiper(".s-products-swiper", {
  slidesPerView: 3.5,
  centeredSlides: true,
  spaceBetween: 25,
  initialSlide: 2,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.3,
    },
    992: {
      slidesPerView: 1.5,
    },
    1100: {
      slidesPerView: 2,
    },

    1350: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 2.5,
    },
    1700: {
      slidesPerView: 3.2,
    },

    1920: {
      slidesPerView: 3.5,
    },
    2920: {
      slidesPerView: 3.5,
    },
  },
});

const reviewsSwiper = new Swiper(".reviews-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
    slidesPerGroup: 1,
    freeMode: false,

  scrollbar: {
    el: ".reviews-swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    420: {
      slidesPerView:1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.3,
    },
    992: {
      slidesPerView: 1.5,
    },
    1100: {
      slidesPerView: 2,
    },

    1350: {
      slidesPerView: 2.5,
    },
    1600: {
      slidesPerView: 3.5,
    },
    1700: {
      slidesPerView: 4,
    },

    1920: {
      slidesPerView: 4,
    },
  },
});
