(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
/*
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
*/

  $(window).scroll(function () {
    $('#section-one').each(function () {
      var imagePos = $(this).offset().top;
      var imageHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $('.image-wrapper').addClass("animated fadeInLeft");
        $('.img-text').addClass("animated fadeInRight");
      } else {
        $('.image-wrapper').removeClass("animated fadeInLeft");
        $('.img-text').removeClass("animated fadeInRight");
      }
    });

    $('#section-four').each(function () {
      var imagePos = $(this).offset().top;
      var imageHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $('.section-four-box').addClass("animated fadeInUp slower");
      } else {
        $('.section-four-box').removeClass("animated fadeInUp slower");
      }
    });
  });


})(jQuery); // End of use strict

