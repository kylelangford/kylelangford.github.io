// GA 
$(function() {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-15632291-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
});

// Break Apart
// $(".grid").on('click', function() {
//   $(this).toggleClass('break-apart');
// });

$('#message').change(function(event){
  if ($(this).val()) {
    $(this).next().hide();
  } else {
    $(this).next().show();
  }
});


// // Init Chosen.js
// $('select').chosen({
//   no_results_text: "Oops, nothing found!",
//   disable_search_threshold: 12
// }); 


// (function () {
//   $("body").addClass( "tween" );
// })();

// Menu Trigger
// (function () {
//   $('.primary-menu-btn').on('click touchstart',function (e) {
//     $('nav.primary').toggleClass('overlay');
//     $(this).toggleClass('active');
//     $('.mast-head').toggleClass('active');
//     $('.site-logo').toggleClass('active');
//     e.preventDefault();
//   });
// })();

//
// Waypoints.js
//
var waypoints = $('.js-anim-trigger').waypoint(function() {
  $(this).addClass('anim-appear');
}, {
  offset: '40%'
});


// var waypoints = $('.squish').waypoint(function() {
//   $('.squish').addClass('animate');
// }, {
//   offset: '40%'
// });

var waypoints = $('.close-hint').waypoint(function() {
  $('.hint').hide();
}, {
  offset: '75%'
});

// $('.span-tada').hide();
// var waypoints = $('.wp-rotate').waypoint(function() {
//   $('.span-tada').addClass('animated tada');
//   $('.span-tada').fadeIn();
//   }, {
//   offset: '50%'
// });

// Scroll To
// (function () {
//   $.mark = {
//     jump: function (options) {
//       var defaults = {
//         selector: 'a.scroll-on-page-link'
//       };
//       if (typeof options == 'string') {
//         defaults.selector = options;
//       }
//       options = $.extend(defaults, options);
//       return $(options.selector).click(function (e) {
//         var jumpobj = $(this);
//         var target = jumpobj.attr('href');
//         var thespeed = 1000;
//         var offset = $(target).offset().top;
//         $('html,body').animate({
//           scrollTop: offset
//         }, thespeed, 'swing');
//         e.preventDefault();
//       });
//     }
//   };

//   $.mark.jump();

// })();

// Show Alert
function showAlert (message, elem) {
  $(elem).append(message);
}

// Run when valid
var doOnce = true;
function validForm (form) {
  if ( doOnce ) {
    $( '.submit' ).prop( 'disabled' , false );
    doOnce = false;
  }
}

// Validation
$( '.validate .input-field' ).on( 'keyup blur' , function validate () {
  var formElement = $( this ).closest(' .validate' );
  var requiredInputs = formElement.find( '.input-required' );
  var validInputs = requiredInputs.length;
  var validatedInputs = 0;
  var minLength = 1;

  requiredInputs.each( function () {
    var isValid = $( this ).val();
    if ( isValid.length > minLength ) {
      validatedInputs += 1; }
  });

  if ( validatedInputs == validInputs ) {
    // console.log('valid');
    validForm(formElement);
    return true;
  }

});

// #( '.validate' ).submit( function( event ){
//   var killswitch = $('.killswitch').val();
//
//   console.log(killswitch);
//
//   if ( validate(this) ){
//     if ( killswitch.length < 0 ) {

// check killswitch

// timestamp

//
//
//       showAlert( '<p>Thank you for your attention, your email has been sent.</p>' , '.alert' );
//
//     }
//   }
// });

// Preload Elements
// window.onload = function() {
// 	setTimeout(function() {
// 		// XHR to request a JS and a CSS
// 		// var xhr = new XMLHttpRequest();
// 		// xhr.open('GET', 'http://domain.tld/preload.js');
// 		// xhr.send('');
//     // xhr = new XMLHttpRequest();
// 		// xhr.open('GET', 'http://domain.tld/preload.css');
// 		// xhr.send('');
// 		// preload image
// 		new Image().src = "img/danklin2012.jpg";
// 		new Image().src = "img/p-ballyribbon.jpg";
// 		new Image().src = "img/p-brunello.jpg";
// 		new Image().src = "img/p-imaginatik.jpg";
// 		new Image().src = "img/p-ma-ena.jpg";
// 		new Image().src = "img/p-orchard.jpg";
// 	}, 1000);
// };

// https://blog.teamtreehouse.com/create-ajax-contact-form
$(function() {

	// Get the form.
	var form = $('#form-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});