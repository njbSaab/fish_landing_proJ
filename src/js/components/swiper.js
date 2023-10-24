new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    dynamicBullets: true,
    slideToClickedSlide: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
    speed: 700,
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
    }
})

new Swiper('.brands_sliders', {
    slidesPerView: 9,
    loop: true,
    spaceBetween: 10,
    loopedSlides: 18,
    speed: 4000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: false,
    autoplay: {
        delay: 0,
    },
    watchSlidesProgress: true,
    setWrapperSize: true,
    loopAdditionalSlides: 10 
})
