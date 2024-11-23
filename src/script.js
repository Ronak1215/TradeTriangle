new Swiper('.testimonial-swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
      }
  }
});