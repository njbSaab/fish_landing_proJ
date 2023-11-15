let prevScrollpos = window.pageYOffset;
let header = document.getElementById('header');
let mainPage = document.getElementById('main');
let scrollTimer; // Для управления таймером задержки

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let twentyVh = window.innerHeight * 0.2;
    let mainPageHeight = mainPage.offsetHeight - twentyVh;

    clearTimeout(scrollTimer); // Очищаем предыдущий таймер

    if (prevScrollpos < currentScrollPos && currentScrollPos > mainPageHeight) {
        header.style.top = '-100%';
        header.style.transition = '5s top linear';
    } else if (prevScrollpos > currentScrollPos) {
        header.style.top = '0';
        header.style.transition = '1s top ease-in-out';
    } else {
		clearTimeout(scrollTimer); // Очищаем таймер при скролле вниз
		scrollTimer = setTimeout(function () {
			header.style.top = '-100%';
			header.style.transition = '5s top linear'; // Добавляем переход при скролле вверх


		}, 200); // Установите задержку на 2 секунды (или другое значение) перед скрытием
	}
	prevScrollpos = currentScrollPos;
};
    

