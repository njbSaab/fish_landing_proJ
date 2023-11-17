$(document).ready(function() {
    const slider = $('.cards');
    const leftArrow = $('.arrows_wrapper_left');
    const rightArrow = $('.arrows_wrapper_right');

    const cardWidth = slider.find('.card').first().outerWidth(true);
    let count = 0;
    const maxStep = slider.find('.card').length - 1; // Вычисляем максимальный шаг

// Функция для обновления состояния стрелок
function updateArrows() {
    console.log(count);
    if(count === 0) {
        leftArrow.addClass('active');
        rightArrow.removeClass('active');
        
    }
    if(count >= 1){
        leftArrow.addClass('active');
        rightArrow.addClass('active');
    }
    if(count >= 4){
        leftArrow.removeClass('active');
        rightArrow.addClass('active');
        slider.find('.card').last().addClass('card-last-margin');
        count = 4
    }
}

// Обработчики кликов по стрелкам
leftArrow.click(function() {
    if (count < maxStep) {
        count++;
        slider.animate({ scrollLeft: '+=' + cardWidth }, 100);
        updateArrows();
    }
});

rightArrow.click(function() {
    if (count > 0) {
        count--;
        slider.animate({ scrollLeft: '-=' + cardWidth }, 100);
        updateArrows();
    }
});

slider.scroll(function() {
    const scrollLeft = slider.scrollLeft();
    count = Math.round(scrollLeft / cardWidth);
    updateArrows();
});

updateArrows();
})


$(document).ready(function() {
    const slider = $('.cards');
    const leftArrow = $('.arrows_wrapper_left');
    const rightArrow = $('.arrows_wrapper_right');
    let cardWidth = slider.find('.card').first().outerWidth(true);
    let count = 0;
    let maxStep = 4; 
    function updateMaxStep() {
        // Получаем ширину окна
        const windowWidth = $(window).width();
        
        // Изменяем maxStep в зависимости от размера экрана
        if (windowWidth <= 768) {
            maxStep = 7;
        } else if (windowWidth <= 1250) {
            maxStep = 6;
        } else {
            maxStep = 4;
        }
    }

    // Функция для обновления состояния стрелок
    function updateArrows() {
        rightArrow.toggleClass('active', count > 0);
        leftArrow.toggleClass('active', count < maxStep);
    }

    // Обработчики кликов по стрелкам
    leftArrow.click(function() {
        if (count < maxStep) {
            count++;
            slider.animate({ scrollLeft: '+=' + cardWidth }, 100);
            updateArrows();
        }
    });

    rightArrow.click(function() {
        if (count > 0) {
            count--;
            slider.animate({ scrollLeft: '-=' + cardWidth }, 100);
            updateArrows();
        }
    });

    slider.scroll(function() {
        const scrollLeft = slider.scrollLeft();
        count = Math.round(scrollLeft / cardWidth);
        updateArrows();
    });

    // Обновляем maxStep при изменении размера окна
    $(window).resize(function() {
        updateMaxStep();
        updateArrows();
    });

    // Инициализация
    updateMaxStep();
    updateArrows();
});
