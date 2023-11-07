$(document).ready(function () {
	//burger
	$('#simply-burger').click(function () {
		$(this).toggleClass('active');
		$('.header').toggleClass('active');

		// Проверяем, есть ли класс 'active' у элемента 'body'
		if ($('.header').hasClass('active')) {
			// Если есть, то отключаем прокрутку
			$('body').css('overflow', 'hidden');
		} else {
			// Иначе включаем прокрутку
			$('body').css('overflow', 'auto');
		}
	});

	// Обработчик событий для кнопки icon_cancel
	$('.mobile_menu .icon_cancel').click(function () {
		$('#simply-burger').removeClass('active');
		$('.header').removeClass('active');
	});

	//логіка для форми дзвінка
	$(document).ready(function () {
		// Открываем форму при клике на кнопку
		$('[data-action="open-form-call"]').click(function (event) {
			event.stopPropagation(); // Остановим всплытие события, чтобы оно не сработало на документе
			$('.form_call').addClass('active');
			$('.background-opacity').addClass('active');
		});

		// Закрываем форму при клике на крестик
		$('.form_call_wrapper .icon_cancel').click(function () {
			closeForm();
		});

		// Добавим обработчик события click для закрытия формы при клике вне неё
		$(document).on('click', function (event) {
			if (!$(event.target).closest('.form_call_wrapper').length) {
				closeForm();
			}
		});

		function closeForm() {
			$('.form_call').removeClass('active');
			$('.background-opacity').removeClass('active');
		}
		// Toggle для класса актив по клику за область либо через 2 секунды
		$('[data-action="call_after_popup"]').click(function () {
			$('.after_popup').addClass('active');
			closeForm();
			setTimeout(function () {
				$('.after_popup').removeClass('active');
			}, 3000); // автоматически удаляем класс active через 3 секунды
		});
	});

	$('[data-action="enter-to-b2b"]').click(function () {
		var $formEnter = $('.form_enter');
		$('.enter_form').addClass('active');
		// Переключение класса active
		$formEnter.toggleClass('active');
		if ($formEnter.hasClass('active')) {
			// Запуск функции peixos
			peixos();
			// Заблокировать прокрутку
			$('body').css('overflow', 'hidden');
		} else {
			// Если класс active убран, остановить анимацию и разблокировать прокрутку
			clearTimeout(peixosInterval);
			isAnimating = false; // Остановить анимацию
			$('body').css('overflow', 'auto');
		}
	});

	$('.cant_remember_btn').click(function () {
		$('.form').addClass('active');
		$('.form').addClass('cant-remember_form');
		$('.cant_remember_form').addClass('active');
		$('.enter_form').removeClass('active');
	});
	$('.authorization_btn').click(function () {
		$('.authorization_form').addClass('active');
		$('.form').addClass('authorization_form');
		$('.cant_remember_form').removeClass('active');
	});

	//вызываем после клика кнопки отправить в форме after_popup и закрываем форму
	$('[data-action="after_popup"]').click(function () {
		$('.after_popup').addClass('active');
	});

	$('.password').click(function () {
		$(this).toggleClass('active');
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
