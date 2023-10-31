$(document).ready(function () {
  // Длительность анимации в миллисекундах
  var animationDuration = 2000; // Например, 2 секунды

  // Функция для запуска анимации счетчика
  function animateCounter($element, endValue) {
    var startValue = 0;
    $element.prop('Counter', startValue).animate(
      {
        Counter: endValue,
      },
      {
        duration: animationDuration,
        easing: 'swing', // Вы можете выбрать другую функцию анимации
        step: function (now) {
          // Обновляем текст счетчика на каждом шаге анимации
          $element.text(Math.ceil(now));
        },
      }
    );
  }

  // Функция для запуска счетчиков для всех элементов
  function startCounters() {
    $('section.scrolled .numbers_items li h2').each(function () {
      var $h2 = $(this);
      var endValue = parseInt($h2.attr('id').replace('MyNumber', ''));
      animateCounter($h2, endValue);
    });
  }

  // Запускаем анимацию счетчиков сразу после загрузки страницы
  startCounters();

  // Проверяем скролл и вызываем startCounters() при наличии класса "scrolled" у родителя section
  $(window).scroll(function () {
    $('section').each(function () {
      var $section = $(this);
      if ($section.hasClass('scrolled')) {
        if ($section.find('.numbers_items').length > 0) {
          startCounters();
        }
      }
    });
  });
});
