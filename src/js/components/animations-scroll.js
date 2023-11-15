$(document).ready(function () {
    const $window = $(window);
    const $scrollProgress = $('#scroll-progress');
    const $listItems = $('.about_items li');
    let currentIndex = 0;
    let isAnimationStarted = false;

    $window.scroll(function () {
        updateScrollProgress();
        animateListItems();
        handleSectionVisibility();
    });


    // Обновление полосы прогресса прокрутки
    function updateScrollProgress() {
        const windowHeight = $window.height();
        const scrollHeight = $(document).height();
        const scrollTop = $window.scrollTop();
        const scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;
        $scrollProgress.width(scrollPercent + '%');
    }

    // Анимация элементов списка
    function animateListItems() {
        if ($('.about').hasClass('scrolled') && !isAnimationStarted) {
            isAnimationStarted = true;

            function showNextItem() {
                if (currentIndex < $listItems.length) {
                    $listItems.eq(currentIndex).addClass('animate');
                    currentIndex++;
                    setTimeout(showNextItem, 200);
                }
            }

            showNextItem();
        }
    }

    // Обработка видимости секций
    function handleSectionVisibility() {
        const scrollPosition = $window.scrollTop();
        const windowHeight = $window.height();
        const windowWidth = $window.width();

        $('main > section').each(function () {
            const $section = $(this);
            // Исключаем header из обработки
            if ($section.hasClass('header')) {
                return;
            }

            const sectionTop = $section.offset().top;
            const sectionHeight = $section.height();
            const sectionVisibleHeight = windowWidth <= 1200 ? sectionHeight * 0.2 : sectionHeight * 0.3;

            if (scrollPosition + windowHeight >= sectionTop + sectionVisibleHeight) {
                $section.addClass('scrolled').removeClass('opacity hidden');
            } else {
                $section.removeClass('scrolled');
            }
        });
    }
});
