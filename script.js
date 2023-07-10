function cerrarNavbar() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  // Cierra el navbar
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
    navbarToggler.setAttribute('aria-expanded', 'false');
  }
}

$(document).ready(function() {
  // Iniciar el carousel
  // $('#myCarousel').carousel();

  // Pausar el carousel al pasar el mouse por encima
  $('#myCarousel').hover(function() {
    $(this).carousel('pause');
  }, function() {
    $(this).carousel('cycle');
  });

  // Navegación con teclado
  $(document).keydown(function(e) {
    if (e.keyCode === 37) {
      $('#myCarousel').carousel('prev');
    } else if (e.keyCode === 39) {
      $('#myCarousel').carousel('next');
    }
  });
});






