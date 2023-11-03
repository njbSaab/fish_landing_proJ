$(document).ready(function () {
	var $listItems = $('.about_items li');
	var currentIndex = 0;

	function showNextItem() {
		if (currentIndex < $listItems.length) {
			$listItems.eq(currentIndex).addClass('animate');
			currentIndex++;
			setTimeout(showNextItem, 400); // Показать следующий элемент через 0.4 секунды
		} else {
			// Весь список заполнен, начать сначала через 2 секунды
			setTimeout(function () {
				$listItems.removeClass('animate');
				currentIndex = 0;
				showNextItem(); // Показать первый элемент снова
			}, 2000);
		}
	}

	// Показать первый элемент сразу после загрузки страницы
	showNextItem();
});
