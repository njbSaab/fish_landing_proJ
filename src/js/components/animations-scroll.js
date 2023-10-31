$(document).ready(function () {
	// Функция для обработки скролла
	function handleScroll() {
		var scrollPosition = $(window).scrollTop();
		var windowHeight = $(window).height();
		var windowWidth = $(window).width(); // Получаем ширину окна браузера

		// Пройдемся по каждой секции
		$('main > section').each(function () {
			var section = $(this);
			var sectionTop = section.offset().top;
			var sectionHeight = section.height();
			var sectionVisibleHeight;

			// Проверим ширину экрана и установим sectionVisibleHeight соответственно
			if (windowWidth <= 1200) {
				sectionVisibleHeight = sectionHeight * 0.3;
			} else if (windowWidth <= 500) {
				sectionVisibleHeight = sectionHeight * 0.2;
			} else {
				sectionVisibleHeight = sectionHeight * 0.5; // 50% высоты секции
			}

			// Проверим, если нужная часть секции видна на экране
			if (scrollPosition + windowHeight >= sectionTop + sectionVisibleHeight) {
				section.addClass('scrolled');
				section.removeClass('opacity hidden');
			} else {
				section.removeClass('scrolled');
			}
		});
	}

	// Вызовем функцию handleScroll при загрузке страницы и при скролле
	handleScroll();
	$(window).scroll(handleScroll);
});
