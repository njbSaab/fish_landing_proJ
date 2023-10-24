$(document).ready(function () {
	//burger
	$('#simply-burger').click(function () {
		$(this).toggleClass('active');
		$('.header').toggleClass('active');
	});

	// Обработчик событий для кнопки icon_cancel
	$('.mobile_menu .icon_cancel').click(function () {
		$('#simply-burger').removeClass('active');
		$('.header').removeClass('active');
	});

	// Додавання та видалення класу "active" для форми дзвінка
	$('[data-action="open-form-call"]').click(function () {
		$('.form_call').addClass('active');
	});

	$('.form_wrapper .icon_cancel').click(function () {
		$('.form_call').removeClass('active');
	});

	$('.form_call .background-opacity').click(function () {
		$('.form_call').removeClass('active');
	});

	$('[data-action="enter-to-b2b"]').click(function () {
		$('.form_enter').toggleClass('active');

		if ($('.form_enter').hasClass('active')) {
			peixos();
		} else {
			clearTimeout(peixosInterval);
			isAnimating = false; // Остановить анимацию
		}
	});
	$('.cant_remember_btn').click(function () {
		$('.form').addClass('active');
		$('.cant_remember_form').addClass('active');
	});
	$('.authorization_btn').click(function () {
		$('.authorization_form').addClass('active');
	});

	//вызываем после клика кнопки отправить в форме after_popup и закрываем форму
	$('.form_wrapper .btn_regular').click(function () {
		$('.after_popup').addClass('active');
		$('.form_wrapper .icon_cancel').click(); // вызываем событие click для .icon_cancel
	});

	//Toggle для класса актив по клику за область либо через 2 секунды
	$('.form_wrapper .btn_regular').click(function () {
		$('.after_popup').addClass('active');
		setTimeout(function () {
			$('.after_popup').removeClass('active');
		}, 2000); // автоматически удаляем класс active через 3 секунды
	});

	// удаляем класс active при клике на элемент
	$('.after_popup').click(function () {
		$('.after_popup').removeClass('active');
	});
});

function dropDownsNumberTell() {
	document.getElementById('myDropdown').classList.toggle('show');
}

$(window).on('click', function (event) {
	if (
		!$(event.target).hasClass('dropbtn') &&
		!$(event.target).closest('.header_tell').length
	) {
		$('.dropdown-content.show').removeClass('show');
	}
});












