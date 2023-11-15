$(document).ready(function () {
    // Длительность анимации в миллисекундах
    var animationDuration = 2000; 

    // Функция для запуска анимации счетчика
    function animateCounter($element, endValue) {
        var startValue = 0;
        $element.prop('Counter', startValue).animate(
            {
                Counter: endValue,
            },
            {
                duration: animationDuration,
                easing: 'swing', 
                step: function (now) {
                    // Обновляем текст счетчика на каждом шаге анимации
                    $element.text(Math.ceil(now));
                },
            }
        );
    }

    // Функция для запуска счетчиков для всех элементов
    function startCounters() {
        $('.numbers_items li h2').each(function () {
            var $h2 = $(this);
            var endValue = parseInt($h2.attr('id').replace('MyNumber', ''));
            animateCounter($h2, endValue);
        });
    }

    // Инициализируем счетчики при загрузке страницы
    startCounters();

    // Перезапускаем анимацию счетчиков каждые 4 секунды
    setInterval(startCounters, 4000);
});
