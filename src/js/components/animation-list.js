// $(document).ready(function () {
// 	var $listItems = $('.about_items li');
// 	var currentIndex = 0; // Изменено с -2 на 0

// 	function showNextItem() {
// 		if (currentIndex < $listItems.length) {
// 			$listItems.eq(currentIndex).addClass('animate');
// 			currentIndex++;
// 			setTimeout(showNextItem, 200); // Показать следующий элемент через 0.2 секунды
// 		} 
// 	}

// 	// Используйте событие прокрутки или другой триггер для начала анимации
// 	$(window).on('scroll', function () {
// 		if ($('.about').hasClass('scrolled') && currentIndex === 0) { // Проверяем, что анимация не началась
// 			showNextItem();
// 			$(window).off('scroll'); // Отключаем обработчик после начала анимации
// 		}
// 	});
// });
