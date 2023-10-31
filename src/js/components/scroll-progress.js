$(document).ready(function () {
	var $scrollProgress = $('#scroll-progress');
	var $window = $(window);

	// Обновляем полосу прокрутки при прокрутке страницы
	$window.scroll(function () {
		var windowHeight = $window.height();
		var scrollHeight = $(document).height();
		var scrollTop = $window.scrollTop();
		var scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;

		$scrollProgress.width(scrollPercent + '%');
	});
});
