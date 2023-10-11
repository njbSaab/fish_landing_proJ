$(document).ready(function () {
 $('#simply-burger').click(function () {
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
 });

 // Обработчик событий для кнопки icon_cancel
 $('.icon_cancel').click(function () {
  $('#simply-burger').removeClass('active');
  $('.header').removeClass('active');
 });
});
