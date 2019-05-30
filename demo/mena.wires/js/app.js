$(function(){
  var lastScrollTop = 0, delta = 100;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop){
      // downscroll code

      console.log('scroll down');
    } else {
      // upscroll code
      console.log('scroll up');
    }
    lastScrollTop = st;
  });
});

$(document).ready(function(){
  $(".breadcrumbs .button").click(function() {
    $(".dropdown-menu").toggleClass("show-menu");
    $(".dropdown-menu > li").click(function(){
      $(".dropdown-menu").removeClass("show-menu");
    });
    $(".dropdown-menu.dropdown-select > li").click(function() {
      $(".breadcrumbs .button").html($(this).html());
    });
  });
});

$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');
  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});

function parallax(){
  var plxBackground = $("#js-parallax-background");
  var plxWindow = $("#js-parallax-window");

  var plxWindowTopToPageTop = $(plxWindow).offset().top;
  var windowTopToPageTop = $(window).scrollTop();
  var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

  var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
  var windowInnerHeight = window.innerHeight;
  var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
  var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
  var plxSpeed = 0.35;

  plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
}

(function() {
  var header = document.querySelector("#header");
  var nav = document.querySelector("#primary-menu");

  if(window.location.hash) {
    header.classList.add("slide-pinned");
    nav.classList.add("slide-pinned");
  }

  new Headroom(header, {
    tolerance: {
      down : 5,
      up : 5
    },
    offset : 500,
    classes: {
      initial: "slide",
      pinned: "slide-pinned",
      unpinned: "slide-unpinned"
    }
  }).init();

  new Headroom(nav, {
    tolerance: {
      down : 5,
      up : 5
    },
    offset : 500,
    classes: {
      initial: "slide",
      pinned: "slide-fixed",
      unpinned: "slide-unfixed"
    }
  }).init();

}());

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') defaults.selector = options;
      var options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing')
        e.preventDefault();
      })
    }
  }
})(jQuery);


jQuery(function(){
  jQuery.mark.jump();
});








