
// Headroom
$(".mast-head").headroom( {
  onTop : function() {
    $('.hint').show();
  },
  offset : 100
});

// Break Apart
$(".grid").on('click', function() {
  $(this).toggleClass('break-apart');
});

$('#message').change(function(event){
  if ($(this).val()) {
    $(this).next().hide();
  } else {
    $(this).next().show();
  }
});

(function () {
  $("body").addClass( "tween" );
})();

// Menu Trigger
(function () {
  $('.primary-menu-btn').on('click touchstart',function (e) {
    $('nav.primary').toggleClass('overlay');
    $(this).toggleClass('active');
    $('.mast-head').toggleClass('active');
    $('.site-logo').toggleClass('active');
    e.preventDefault();
  });
})();

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

//
// Waypoints.js
//
var waypoints = $('.squish').waypoint(function() {
  $('.squish').addClass('animate');
}, {
  offset: '40%'
});
var waypoints = $('.close-hint').waypoint(function() {
  $('.hint').hide();
}, {
  offset: '75%'
});
var waypoints = $('.wp-rotate').waypoint(function() {
  $('.wp-rotate').addClass('on');
}, {
  offset: '75%'
});
$('.span-tada').hide();
var waypoints = $('.wp-rotate').waypoint(function() {
  $('.span-tada').addClass('animated tada');
  $('.span-tada').fadeIn();
  }, {
  offset: '50%'
});

// Scroll To
(function () {
  $.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }
      options = $.extend(defaults, options);
      return $(options.selector).click(function (e) {
        var jumpobj = $(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = $(target).offset().top;
        $('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };

  $.mark.jump();

})();



// Preload Elements
window.onload = function() {
	setTimeout(function() {
		// XHR to request a JS and a CSS
		// var xhr = new XMLHttpRequest();
		// xhr.open('GET', 'http://domain.tld/preload.js');
		// xhr.send('');
    // xhr = new XMLHttpRequest();
		// xhr.open('GET', 'http://domain.tld/preload.css');
		// xhr.send('');
		// preload image
		new Image().src = "img/danklin2012.jpg";
		new Image().src = "img/p-ballyribbon.jpg";
		new Image().src = "img/p-brunello.jpg";
		new Image().src = "img/p-imaginatik.jpg";
		new Image().src = "img/p-ma-ena.jpg";
		new Image().src = "img/p-orchard.jpg";
	}, 1000);
};
