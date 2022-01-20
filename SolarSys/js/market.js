
$(".menu ul li a").on('click', function(event) {
  event.preventDefault();
  cl=$(this).data('s');
  $(cl).siblings('.f').addClass('none');
  $(cl).removeClass("none")





});



$("header ul li ").on('click', function(e) {
  $("body ,html  ").animate({
    scrollTop: $($(this).data('s')).offset().top
    },
    600);
});


