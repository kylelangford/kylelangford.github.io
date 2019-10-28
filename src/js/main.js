// GA
$(function() {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-15632291-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src =
      ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
      '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();
});

$('document').ready(function() {
  // Add Tween Class
  $('body').addClass('tween');

  // Menu Trigger
  $('.primary-menu-btn').on('click touchstart', function(e) {
    $('nav.primary').toggleClass('overlay');
    $(this).toggleClass('active');
    $('.mast-head').toggleClass('active');
    $('.site-logo').toggleClass('active');
    e.preventDefault();
  });

  // Wow
  wow = new WOW({
    boxClass: 'animate', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });

  wow.init();

  $('.stack').slick({
    dots: true,
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<a class="slick-prev icons-log-out">Previous</a>',
    nextArrow: '<a class="slick-next icons-log-in">Next</a>',
  });

  var width = window.innerWidth,
    height = window.innerHeight,
    c = document.getElementById('c'),
    ctx = c.getContext('2d');
  c.width = width;
  c.height = height;

  var paintEffect = function() {
    // var paint = [];
    // var totalPaints = width / 50;
    // var size = 20;
    // function init() {
    //   for (var i = 0; i < totalPaints; i++) {
    //     addPaint();
    //   }
    //   setInterval(update, 40);
    // }
    // function drawPaint(x, y, size, colour) {
    //   ctx.beginPath();
    //   ctx.arc(x, y, size, 0, Math.PI * 2, true);
    //   ctx.closePath();
    //   ctx.fillStyle = colour;
    //   ctx.fill();
    // }
    // function update() {
    //   for (var i = 0; i < paint.length; i++) {
    //     paint[i].y = paint[i].y + paint[i].v;
    //     if (paint[i].y > height + 60) {
    //       paint.splice(i, 1);
    //       addPaint();
    //     }
    //     drawPaint(paint[i].x, paint[i].y, paint[i].s, paint[i].c);
    //   }
    // }
    // function addPaint() {
    //   //Try 50 times
    //   var i = 50;
    //   while (i > 0) {
    //     size = Math.random() * size + 10;
    //     x = Math.random() * width;
    //     found = false;
    //     //Dont Allow drips ontop of each other (Overtaking drops destroy the prettyness)
    //     for (var j = 0; j < paint.length; j++) {
    //       if (x + size > paint[j].x && x - size < paint[j].x + paint[j].s) {
    //         found = true;
    //         break;
    //       }
    //       if (x - size < paint[j].x && x + size > paint[j].x - paint[j].s) {
    //         found = true;
    //         break;
    //       }
    //     }
    //     if (found === false) {
    //       paint.push({
    //         s: size,
    //         x: x,
    //         y: -60,
    //         v: Math.random() * 2 + 2,
    //         c: '#' + ((Math.random() * 0x313131 + 0xaaaaaa) | 0).toString(16),
    //       });
    //       i--;
    //       return;
    //     }
    //   }
    // }
  };

  paintEffect();
  init();

  // <!-- Global site tag (gtag.js) - Google Analytics -->
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-15632291-6');
});
