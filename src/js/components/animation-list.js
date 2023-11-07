$(document).ready(function () {
	var $listItems = $('.about_items li');
	var currentIndex = -2;

	function showNextItem() {
		if (currentIndex <= $listItems.length) {
			$listItems.eq(currentIndex).addClass('animate');
			currentIndex++;
			setTimeout(showNextItem, 200); // Показать следующий элемент через 0.4 секунды
		} 
	}

// Функция, которая будет вызвана при появлении класса "scrolled"
	function handleScrollClass() {
		if ($('.about').hasClass('scrolled')) {
			showNextItem();
			// Удаляем обработчик события, чтобы анимация больше не запускалась
			$('.about').off('DOMSubtreeModified', handleScrollClass);
		}
	}

// Добавляем обработчик события на изменение DOM-дерева (класса "about")
	$('.about').on('DOMSubtreeModified', handleScrollClass);
});

