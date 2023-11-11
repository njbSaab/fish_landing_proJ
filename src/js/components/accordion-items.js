

$(document).ready(function () {
    // Declare the lastAccordionTimeout variable
    $('.accordion').on('click', function (event) {
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
    $('.child-panel:not(.last-panel)').css({
        maxHeight: function () {
            return $(this).prop('scrollHeight') + 20 + 'px';
        },
        'padding-top': '10px',
        'padding-bottom': '10px',
    });
});

