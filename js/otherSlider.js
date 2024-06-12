slider_otherModules = new Swiper('.other-modules__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    autoHeight: false,
    speed: 800,
    loop: false, 
    navigation: {
        nextEl: '.other-modules__control_next',
        prevEl: '.other-modules__control_prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            slidesPerGroup: 1.3,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            slidesPerGroup: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.2,
            slidesPerGroup: 3.2,
            spaceBetween: 30,
        },
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    },
  });
  