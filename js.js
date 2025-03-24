document.addEventListener('DOMContentLoaded', () => {
  // Получаем все ссылки в навигационном меню
  const links = document.querySelectorAll('nav  a');

  // Обрабатываем клик по каждой ссылке
  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Отменяем стандартное поведение ссылки

          // Получаем ID секции, к которой нужно перейти
          const targetSection = document.querySelector(link.getAttribute('href'));

          // Выполняем плавный переход к нужной секции
          targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });
});


  $(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#topNubex').fadeIn();
    } else {
    $('#topNubex').fadeOut();
    }
    });
    $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
    });