//var p = prompt("Boo");
$(document).ready(function(){
    $("body").scrollspy({
		target: "#my-nav",
		offset: 70
	})
});


jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar');

    if (scrollPos > 130) {
      navbar.addClass('change-color');

    }

    if(scrollPos > 1400){
      navbar.addClass('change-color-2');
    }

    else {
      navbar.removeClass('change-color');
      navbar.removeClass('change-color-2');
    }
  });
});
