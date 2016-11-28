//var p = prompt("Boo");
$(document).ready(function(){
    $("body").scrollspy({
		target: "#my-nav",
		offset: 70
	})
});

$(".navbar-brand").click(function() {
    $('html,body').animate({
        scrollTop: $(".image").offset().top},
        'slow');
});

$(".about-nav").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-section").offset().top},
        'slow');
});

$(".project-nav").click(function() {
    $('html,body').animate({
        scrollTop: $(".project-section").offset().top},
        'slow');
});

$(".contact-nav").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-section").offset().top},
        'slow');
});

jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar');

    if (scrollPos > 130 && scrollPos < 500) {
      navbar.addClass('change-color');

    }

    else if(scrollPos > 500 && scrollPos < 1400){
      navbar.addClass('change-color-mid');
    }

    else if(scrollPos > 1400){
      navbar.addClass('change-color-2');
    }

    else {
      navbar.removeClass('change-color');
      navbar.removeClass('change-color-2');
    }
  });
});
