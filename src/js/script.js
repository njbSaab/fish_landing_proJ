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

	$('.form_call_wrapper .icon_cancel, .background-opacity-after_submit').click(
		closeFormCall,
	);

	$(document).click(function (event) {
		if (!$(event.target).closest('.form_call_wrapper').length) {
			closeFormCall();
		}
	});

	// Enter to B2B and other form interactions
	$(
		'[data-action="enter-to-b2b"], .cant_remember_btn, .authorization_btn, [data-action="back_to_enter"]',
	).click(function () {
		handleFormInteractions(this);
	});

	// Toggle after popup and password
	$('[data-action="call_after_popup"], .password, .after_popup').click(
		function () {
			togglePopup(this);
		},
	);

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
		} else if (
			$(element).hasClass('password') ||
			$(element).hasClass('after_popup')
		) {
			$(element).toggleClass('active');
		}
	}

	function handleFormInteractions(button) {
		var action = $(button).data('action');

		switch (action) {
			case 'enter-to-b2b':
				$('.enter_form, .form_logo_enter, .form_enter').toggleClass('active');
				$('body').css(
					'overflow',
					$('.form_enter').hasClass('active') ? 'hidden' : 'auto',
				);
				if ($('.form_enter').hasClass('active')) {
					peixos(); // Assuming peixos is a defined function
				} else {
					clearTimeout(peixosInterval); // Assuming peixosInterval is defined
					isAnimating = false; // Assuming isAnimating is defined
				}
				break;
			case 'back_to_enter':
				$('.enter_form, .form_logo_enter').addClass('active');
				$(
					'.cant_remember_form, .authorization_form, .form_logo_auth, .form_logo_cant-remember',
				).removeClass('active');
				break;
			default:
				if ($(button).hasClass('cant_remember_btn')) {
					$(
						'.form, .form_logo_enter, .cant_remember_form, .form_logo_cant-remember',
					).addClass('active');
					$('.enter_form, .form_logo_enter').removeClass('active');
					if ($('.cant_remember_form').hasClass('active')) {
						// Add 'active' class to its parent .wrapp_form
						$('.cant_remember_form')
							.closest('.wrapp_form')
							.addClass('cant_remember-wrapp');
					}
				} else if ($(button).hasClass('authorization_btn')) {
					$('.authorization_form').addClass('active');
					$('.cant_remember_form, .form_logo_cant-remember').removeClass('active');
				}
				break;
		}
	}
});
