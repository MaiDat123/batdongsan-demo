var swiper = new Swiper(".content_slide", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    fade: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullet: true
    },
  });