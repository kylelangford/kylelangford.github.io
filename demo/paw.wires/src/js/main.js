// limit the amount of resize calls by calling the function after the resize event
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

function changeLayout() {
  if ($(window).width() >= 900) {
    // console.log('greater then 767 ');
    $('.sidebar').insertAfter('.content-body');
  } else {
    // console.log('less then 767 ');
    $('.sidebar').insertAfter('.content-bottom');
  }
}

// Resize Event
$(window).resize(function () {
  waitForFinalEvent(function(){
    // console.log('Resize...');
    changeLayout();
  }, 300, "some unique string");
});

// WE have this because the JS is in the HEAD, other wise we should use a self calling function
$( document ).ready(function() {
    changeLayout();
    // $('.menu-toggle').on('click', toggleMenu());
});

function toggleMenu() {
  $('.header .navigation').toggleClass('open');
}

// $(function() {
//   // Headroom.js
//   $(".header").headroom({
//     // vertical offset in px before element is first unpinned
//     offset : 84,
//     // scroll tolerance in px before state changes
//     tolerance : 0,
//     // or you can specify tolerance individually for up/down scroll
//     tolerance : {
//       up : 5,
//       down : 0
//     },
//     // css classes to apply
//     classes : {
//       // when element is initialised
//       initial : "nav",
//       // when scrolling up
//       pinned : "nav--pinned",
//       // when scrolling down
//       unpinned : "nav--unpinned",
//       // when above offset
//       top : "nav--top",
//       // when below offset
//       notTop : "nav--not-top"
//     }
//   });
// });

// Scrollbar
// $(window).scroll(function() {
//   // console.log($(".sidebar-inner")[0].getBoundingClientRect());
//   var headerElem = $('.sidebar-inner');
//   var sideHeight = headerElem.height();
//   var scrollTrigger = sideHeight - $(this).height() + 84;
//   var windowHeight = $(window).height();
//
//   if ( $(this).scrollTop() >= scrollTrigger && windowHeight < sideHeight) {
//     headerElem.addClass('fixed');
//   } else if ( $(this).scrollTop() >= scrollTrigger && windowHeight > sideHeight) {
//
//     if ( $(this).scrollTop() <= 10 ) {
//       headerElem.addClass('top');
//     } else {
//       headerElem.removeClass('top');
//       headerElem.removeClass('top-change');
//     }
//
//     headerElem.addClass('top-fixed');
//
//   } else {
//     headerElem.removeClass('fixed');
//     headerElem.removeClass('top-fixed');
//   };
//
//   if ( $('#header').hasClass('nav--pinned') ) {
//     headerElem.addClass('top-change');
//   } else {
//     headerElem.removeClass('top-change');
//   }
//
// });
