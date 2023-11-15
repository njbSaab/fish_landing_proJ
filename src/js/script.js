$(document).ready(function () {
    // Toggle burger menu
    $('#simply-burger').click(function () {
        toggleMenu(this, '.header', '.background-opacity-mobile');
    });

    // Close menu on icon cancel click
    $('.mobile_menu .icon_cancel').click(function () {
        closeMenu();
    });

    // Handle form call open and close
    $('[data-action="open-form-call"]').click(function (event) {
        event.stopPropagation();
        openFormCall();
    });

    $('.form_call_wrapper .icon_cancel, .background-opacity-after_submit').click(closeFormCall);

    $(document).click(function (event) {
        if (!$(event.target).closest('.form_call_wrapper').length) {
            closeFormCall();
        }
    });

    // Enter to B2B and other form interactions
    $('[data-action="enter-to-b2b"], .cant_remember_btn, .authorization_btn, [data-action="back_to_enter"]').click(function () {
        handleFormInteractions(this);
    });

    // Toggle after popup and password
    $('[data-action="call_after_popup"], .password, .after_popup').click(function () {
        togglePopup(this);
    });

    // Function definitions
    function toggleMenu(burger, header, background) {
        $(burger).toggleClass('active');
        $(header).toggleClass('active');
        $(background).toggleClass('active');
        $('body').css('overflow', $(header).hasClass('active') ? 'hidden' : 'auto');
    }

    function closeMenu() {
        $('#simply-burger').removeClass('active');
        $('.header').removeClass('active');
        $('.background-opacity-mobile').removeClass('active');
        $('body').css('overflow', 'auto');
    }

    function openFormCall() {
        $('.form_call').addClass('active');
        $('.background-opacity-after_submit').addClass('active');
    }

    function closeFormCall() {
        $('.form_call').removeClass('active');
        $('.background-opacity-after_submit').removeClass('active');
    }

	function togglePopup(element) {
		var action = $(element).data('action');
	
		if (action === 'call_after_popup') {
			$('.after_popup').addClass('active');
			closeFormCall(); // Assuming closeFormCall is a defined function
			setTimeout(function () {
				$('.after_popup').removeClass('active');
			}, 3000);
		} else if ($(element).hasClass('password') || $(element).hasClass('after_popup')) {
			$(element).toggleClass('active');
		}
	}

	function handleFormInteractions(button) {
		var action = $(button).data('action');
	
		switch (action) {
			case 'enter-to-b2b':
				$('.enter_form, .form_logo_enter, .form_enter').toggleClass('active');
				$('body').css('overflow', $('.form_enter').hasClass('active') ? 'hidden' : 'auto');
				if ($('.form_enter').hasClass('active')) {
					peixos(); // Assuming peixos is a defined function
				} else {
					clearTimeout(peixosInterval); // Assuming peixosInterval is defined
					isAnimating = false; // Assuming isAnimating is defined
				}
				break;
			case 'back_to_enter':
				$('.enter_form, .form_logo_enter').addClass('active');
				$('.cant_remember_form, .authorization_form, .form_logo_auth, .form_logo_cant-remember').removeClass('active');
				break;
			default:
				if ($(button).hasClass('cant_remember_btn')) {
					$('.form, .form_logo_enter, .cant_remember_form, .form_logo_cant-remember').addClass('active');
					$('.enter_form, .form_logo_enter').removeClass('active');
					if ($('.cant_remember_form').hasClass('active')) {
						// Add 'active' class to its parent .wrapp_form
						$('.cant_remember_form').closest('.wrapp_form').addClass('cant_remember-wrapp');
					}
				} else if ($(button).hasClass('authorization_btn')) {
					$('.authorization_form').addClass('active');
					$('.cant_remember_form, .form_logo_cant-remember').removeClass('active');
				}
				break;
		}
	}
	
});


// $(document).ready(function () {
// //burger
// $('#simply-burger').click(function () {
//     $(this).toggleClass('active');
//     $('.header').toggleClass('active');
//     $('.background-opacity-mobile').toggleClass('active');

//     // Проверяем, есть ли класс 'active' у элемента 'header' после того, как класс добавлен или удален
//     if ($('.header').hasClass('active')) {
//         // Если есть, то отключаем прокрутку
//         $('body').css('overflow', 'hidden');
//     } else {
//         // Если нет, то включаем прокрутку
//         $('body').css('overflow', 'auto');
//     }
// });

// 	// Обработчик событий для кнопки icon_cancel
// 	$('.mobile_menu .icon_cancel').click(function () {
// 		$('#simply-burger').removeClass('active');
// 		$('.header').removeClass('active');
// 		$('.background-opacity-mobile').removeClass('active');
// 		$('body').css('overflow', 'auto');
// 	});

// 	//логіка для форми дзвінка
// 	$(document).ready(function () {
// 		// Открываем форму при клике на кнопку
// 		$('[data-action="open-form-call"]').click(function (event) {
// 			event.stopPropagation(); // Остановим всплытие события, чтобы оно не сработало на документе
// 			$('.form_call').addClass('active');
// 			$('.background-opacity-after_submit').addClass('active');
// 		});

// 		// Закрываем форму при клике на крестик
// 		$('.form_call_wrapper .icon_cancel').click(function () {
// 			closeForm();
// 		});

// 		// Добавим обработчик события click для закрытия формы при клике вне неё
// 		$(document).on('click', function (event) {
// 			if (!$(event.target).closest('.form_call_wrapper').length) {
// 				closeForm();
// 			}
// 		});

// 		function closeForm() {
// 			$('.form_call').removeClass('active');
// 			$('.background-opacity-after_submit').removeClass('active');
// 		}
// 		// Toggle для класса актив по клику за область либо через 2 секунды
// 		$('[data-action="call_after_popup"]').click(function () {
// 			$('.after_popup').addClass('active');
// 			closeForm()
// 			// $('background-opacity-after_submit').removeClass('active');
// 			setTimeout(function () {
// 				$('.after_popup').removeClass('active');
// 			}, 3000); // автоматически удаляем класс active через 3 секунды
// 		});
// 	});

// 	$('[data-action="enter-to-b2b"]').click(function () {
// 		var $formEnter = $('.form_enter');
// 		$('.enter_form').addClass('active');
// 		$('.form_logo_enter').addClass('active')
// 		// Переключение класса active
// 		$formEnter.toggleClass('active');
// 		if ($formEnter.hasClass('active')) {
// 			// Запуск функции peixos
// 			peixos();
// 			// Заблокировать прокрутку
// 			$('body').css('overflow', 'hidden');
// 		} else {
// 			// Если класс active убран, остановить анимацию и разблокировать прокрутку
// 			clearTimeout(peixosInterval);
// 			isAnimating = false; // Остановить анимацию
// 			$('body').css('overflow', 'auto');
// 		}
// 	});

// 	$('.cant_remember_btn').click(function () {
// 		$('.form').addClass('active');
// 		$('.form').addClass('cant-remember_form');
// 		$('.form_logo_enter').addClass('active')
// 		$('.cant_remember_form').addClass('active');
// 		$('.form_logo_cant-remember').addClass('active')
		
// 		$('.enter_form').removeClass('active');
// 		$('.form_logo_enter').removeClass('active');
// 	});
// 	$('.authorization_btn').click(function () {
// 		$('.authorization_form').addClass('active');
// 		$('.form').addClass('authorization_form');
// 		$('.form_logo_auth').addClass('active');

// 		$('.cant_remember_form').removeClass('active');
// 		$('.form_logo_cant-remember').removeClass('active')
// 	});

// 	//вызываем после клика кнопки отправить в форме after_popup и закрываем форму
// 	$('[data-action="after_popup"]').click(function () {
// 		$('.after_popup').addClass('active');
// 	});

// 	$('[data-action="back_to_enter"]').click(function (){
// 		$('.enter_form').addClass('active')
// 		$('.form_logo_enter').addClass('active')

// 		$('.cant_remember_form').removeClass('active')
// 		$('.authorization_form').removeClass('active')
// 		$('.form_logo_auth').removeClass('active');
// 		$('.form_logo_cant-remember').removeClass('active')

// 	})

// 	$('.password').click(function () {
// 		$(this).toggleClass('active');
// 	});

// 	// удаляем класс active при клике на элемент
// 	$('.after_popup').click(function () {
// 		$('.after_popup').removeClass('active');
// 	});
// });
