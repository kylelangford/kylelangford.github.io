// Menu Trigger
$(function(){
  $('.primary-menu-btn').on('click touchstart',function (e) {
    $('nav.primary').toggleClass('overlay');
    e.preventDefault();
  });

});

// Waypoints.js
var waypoints = $('.fade').waypoint(function() {
  $('.fade').addClass('on');
}, {
  offset: '50%'
})

// Waypoints.js
var waypoints = $('.wp-rotate').waypoint(function() {
  $('.wp-rotate').addClass('on');
}, {
  offset: '50%'
})
$('.span-tada').hide();
// Waypoints.js
var waypoints = $('.wp-rotate').waypoint(function() {
  $('.span-tada').addClass('animated tada');
  $('.span-tada').fadeIn();
  }, {
  offset: '25%'
})




$(".mast-head").headroom();

// Scroll to Link
$(function() {
  var lastScrollTop = 0, delta = 100;
  $(window).scroll( function (event){
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop){
      // downscroll code
      // console.log('scroll down');

      // cube scroll function

    } else {
      // upscroll code
      // console.log('scroll up');

      // cube scroll funtion
    }
    lastScrollTop = st;
  });

  $.mark = {
    jump: function (options) {
      var defaults = {
        selector: '.scroll-on-page-link'
      };
      if (typeof options == 'string') defaults.selector = options;
      var options = $.extend(defaults, options);
      return $(options.selector).click(function (e) {
        var jumpobj = $(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = $(target).offset().top;
        $('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing')
        e.preventDefault();
      })
    }
  };

  $.mark.jump();

});

// Logo Swap
$('.site-logo').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('Everhood', $this.text());
        $this.text("Kyle Langford");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('Everhood'));
    }
);
