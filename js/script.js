$(function () {
  "use strict";

  $(window).on('scroll', function () {
    var windowScroll = $(window).scrollTop();

    // fixed nav
    if (windowScroll > 0) {
      $(".customnav").addClass('fixed');
    } else {
      $(".customnav").removeClass('fixed');
    }

    // backto top button
    if (windowScroll > 500) {
      $(".backtotop").fadeIn();
    } else {
      $(".backtotop").fadeOut();
    }
  });

  // backto top button
  $(".backtotop").on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    });
  });

  // banner heading responsive
  $("#responsive_headline").fitText(1, {
    minFontSize: '20px',
    maxFontSize: '60px'
  });
});