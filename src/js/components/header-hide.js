let prevScrollpos = window.pageYOffset;
let header = document.getElementById('header');
let scrollTimer;

window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		clearTimeout(scrollTimer); // Очищаем таймер при скролле вверх
		header.style.top = '0';
	} else {
		clearTimeout(scrollTimer); // Очищаем таймер при скролле вниз
		scrollTimer = setTimeout(function () {
			header.style.top = '-100%';
		}, 200); // Установите задержку на 2 секунды (или другое значение) перед скрытием
	}
	prevScrollpos = currentScrollPos;
};
