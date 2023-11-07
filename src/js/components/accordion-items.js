$(document).ready(function () {
	$('.accordion').on('click', function (event) {
		// Selecting both .panel and .child-panel
		var panel = $(this).next('.panel, .child-panel');

		var paddingOffset = panel.hasClass('child-panel') ? 20 : 0;

		if (panel.css('maxHeight') && panel.css('maxHeight') !== '0px') {
			panel.css({
				maxHeight: '0',
				'padding-top': '0px',
				'padding-bottom': '0px',
			});
			$(this).removeClass('opened');
		} else {
			panel.css({
				maxHeight: panel.prop('scrollHeight') + paddingOffset + 'px',
				'padding-top': panel.hasClass('child-panel') ? '10px' : '0px',
				'padding-bottom': panel.hasClass('child-panel') ? '10px' : '0px',
			});
			$(this).addClass('opened');
		}

		// Adjust the height of the parent panel if the accordion is inside another accordion
		var parentPanel = $(this).closest('.panel');
		if (parentPanel.length) {
			parentPanel.css(
				'maxHeight',
				parentPanel.prop('scrollHeight') +
					panel.prop('scrollHeight') +
					paddingOffset +
					'px',
			);
		}

		event.stopPropagation(); // To prevent event bubbling
	});

	// Set initial state for .child-panel to be open
	// Устанавливаем начальное состояние для .child-panel, чтобы оно было открыто, исключая .last-panel
	$('.child-panel:not(.last-panel)').css({
		maxHeight: function () {
			return $(this).prop('scrollHeight') + 20 + 'px';
		},
		'padding-top': '10px',
		'padding-bottom': '10px',
	});

	// Automatically open the accordion with the class "last" after 4 seconds
	setTimeout(function () {
		// Find the corresponding panel for the accordion with class 'last'
		var lastPanel = $('.accordion.last').next('.panel');
		var paddingOffset = lastPanel.hasClass('child-panel') ? 20 : 0;

		// Set its maxHeight equal to its content height and add padding if it has the class child-panel
		lastPanel.css({
			maxHeight: lastPanel.prop('scrollHeight') + paddingOffset + 'px',
			'padding-top': lastPanel.hasClass('child-panel') ? '10px' : '0px',
			'padding-bottom': lastPanel.hasClass('child-panel') ? '10px' : '0px',
		});

		// Add 'opened' class to the accordion with class 'last'
		$('.accordion.last').addClass('opened');
	}, 6000); 

	setTimeout(function(){
		var lastPanel = $('.accordion.last').next('.panel');
		var paddingOffset = lastPanel.hasClass('child-panel') ? 20 : 0;

		// Set its maxHeight equal to its content height and add padding if it has the class child-panel
		lastPanel.css({
			maxHeight: lastPanel.prop('scrollHeight') + paddingOffset + 'px',
			'padding-top': lastPanel.hasClass('child-panel') ? '10px' : '0px',
			'padding-bottom': lastPanel.hasClass('child-panel') ? '10px' : '0px',
		});
		$('.accordion.last').removeClass('opened');
	}, 1000)
	// Close the last accordion after 12 seconds
	setTimeout(function () {
		// Find the corresponding panel for the accordion with class 'last'
		var lastPanel = $('.accordion.last').next('.panel');

		// Reset the maxHeight and remove 'opened' class
		lastPanel.css({
			maxHeight: '0',
			'padding-top': '0',
			'padding-bottom': '0',
		});

		$('.accordion.last').removeClass('opened');
		
		// Clear the first timeout to prevent it from opening again
		clearTimeout(lastAccordionTimeout);
	}, 8000);
});
