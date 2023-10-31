new Swiper('.swiper', {
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	dynamicBullets: true,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	speed: 700,
	effect: 'cube',
	cubeEffect: {
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
	},
});

var swiper = new Swiper('.brands_sliders', {
	loop: true,
	spaceBetween: 9,
	loopAdditionalSlides: 10,
	speed: 4000,
	freeMode: true,
	freeModeMomentum: false,
	freeModeMomentumRatio: 1,
	autoplay: {
	  delay: 0,
	},
	watchSlidesProgress: true,
	setWrapperSize: true,
	breakpoints: {
	  // Когда ширина экрана <= 500px
	  500: {
		slidesPerView: 5,
		spaceBetween: 2,
		speed: 6000,
	  },
	},
  });
  

