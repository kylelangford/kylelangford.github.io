// Hybrid Lazy Load
// https://www.smashingmagazine.com/2019/05/hybrid-lazy-loading-progressive-migration-native/

(function() {

  if ('loading' in HTMLImageElement.prototype) {
    var lazyEls = document.querySelectorAll('[loading=lazy]');

    lazyEls.forEach(function(lazyEl) {
      lazyEl.setAttribute('src', lazyEl.getAttribute('data-src'));
    });
  }

  // else {
  // Dynamically include a lazy loading library of your choice
  // Here including vanilla-lazyload
  // var script = document.createElement('script');

  // script.async = true;

  // script.src =
  //   'https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js';

  // window.lazyLoadOptions = {
  //   elements_selector: '[loading=lazy]',
  //   use_native: true,
  //eventually more options here
  // };

  // document.body.appendChild(script);
  // }


// $('document').ready(function() {
  // Add Tween Class
  // $('body').addClass('tween');

  const primaryNav = document.querySelector('.nav.primary');
  const masthead = document.querySelector('.mast-head');
  const sitelogo = document.querySelector('.site-logo');

  document.addEventListener('click touchstart', function(event) {
    if (!event.target.matches('.primary-menu-btn')) return;

    event.preventDefault();

    primaryNav.classList.toggle('overlay');
    event.target.classList.toggle('active');
    masthead.classList.toggle('active');
    sitelogo.classList.toggle('active');

  });

  // Menu Trigger
  // $('.primary-menu-btn').on('click touchstart', function(e) {
  //   $('nav.primary').toggleClass('overlay');
  //   $(this).toggleClass('active');
  //   $('.mast-head').toggleClass('active');
  //   $('.site-logo').toggleClass('active');

  //   e.preventDefault();
  // });


  document.addEventListener('click touchstart', function(event) {
    if (!event.target.matches('.menu-button')) return;

    event.preventDefault();

    event.target.toggleClass('open');
    // $(this).toggleClass('open');

  });

  // Menu Trigger
  // $('.menu-button').on('click touchstart', function(e) {
  //   $(this).toggleClass('open');
  //   e.preventDefault();
  // });

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

  // const slideshows = document.querySelectorAll('.stack');

  // $('.stack').forEach(function(show){
  //   show.slick({
  //     dots: true,
  //     slidesToShow: 1,
  //     lazyLoad: 'ondemand',
  //     speed: 500,
  //     fade: true,
  //     cssEase: 'linear',
  //     prevArrow: '<a class="slick-prev icons-log-out">Previous</a>',
  //     nextArrow: '<a class="slick-next icons-log-in">Next</a>',
  //   })
  // }); 

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

  // init();
// });




})();

