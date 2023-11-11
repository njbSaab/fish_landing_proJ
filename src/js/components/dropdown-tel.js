function dropDownsNumberTell() {
    var dropdown = document.getElementById('myDropdown');
    var headerTell = document.querySelector('.header_tell'); // Элемент для наведения
    var timeout; // Переменная для хранения таймера задержки
    var button = document.querySelector('.dropbtn');

    // Функция для показа dropdown при наведении
    function showDropdown() {
        clearTimeout(timeout); // Очищаем существующий таймер, если он есть
        dropdown.classList.add('show');
        button.classList.toggle('rotate');
    }

    // Функция для скрытия dropdown с задержкой
    function hideDropdown() {
        // Устанавливаем задержку перед скрытием dropdown
        timeout = setTimeout(function() {
            dropdown.classList.remove('show');
            button.classList.remove('rotate');
        }, 2000); // Задержка в 2000 мс (2 секунды)
    }

    // Обработчики событий для наведения мыши
    headerTell.addEventListener('mouseover', showDropdown);
    headerTell.addEventListener('mouseout', hideDropdown);
}

// Инициализируем функцию после загрузки страницы
window.onload = dropDownsNumberTell;
