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
	slidesPerView: 9,
	spaceBetween: 10,
	speed: 4000,
	freeMode: true,
	freeModeMomentum: false,
	freeModeMomentumRatio: 1,
	autoplay: {
		delay: 0,
	},
	watchSlidesProgress: true,
	setWrapperSize: true,
});

var swiper = new Swiper('.mobile', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 6000,
	freeMode: true,
	freeModeMomentum: false,
	freeModeMomentumRatio: 1,
	autoplay: {
		delay: 0,
	},
	watchSlidesProgress: true,
	setWrapperSize: true,
});
