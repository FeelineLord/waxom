var swiper1 = new Swiper('.waxom-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 400,
  effect: 'coverflow',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  coverflowEffect: {
    rotate: 20,
    slideShadows: false,
    modifier: 2,
  },
});