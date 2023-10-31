$(document).ready(function() {
    // Функция для обработки скролла
    function handleScroll() {
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();
      
      // Пройдемся по каждой секции
      $("main > section").each(function() {
        var section = $(this);
        var sectionTop = section.offset().top;
        var sectionHeight = section.height();
        var sectionVisibleHeight = sectionHeight * 0.5; // 50% высоты секции
        
        // Проверим, если 50% секции видно на экране
        if (scrollPosition + windowHeight >= sectionTop + sectionVisibleHeight) {
          section.addClass("scrolled");
          section.removeClass("opacity hidden");
        } else {
          section.removeClass("scrolled");
        }
      });
    }
  
    // Вызовем функцию handleScroll при загрузке страницы и при скролле
    handleScroll();
    $(window).scroll(handleScroll);
  });
  