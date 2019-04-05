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


$('document').ready(function(){

	// Add Tween Class
  $("body").addClass( "tween" );

	// Wow
	wow = new WOW(
	  {
	    boxClass:     'animate',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null,    // optional scroll container selector, otherwise use window,
	    resetAnimation: true,     // reset animation on end (default is true)
	  }
	);

	wow.init();

});


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);







// // Run when valid
var doOnce = true;
function validForm (form) {
  if ( doOnce ) {
    $( '.submit' ).prop( 'disabled' , false );
    doOnce = false;
  }
}

// // Validation
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
// $(function() {

// 	// Get the form.
// 	var form = $('#form-contact');

// 	// Get the messages div.
// 	var formMessages = $('#form-messages');

// 	// Set up an event listener for the contact form.
// 	$(form).submit(function(e) {
// 		// Stop the browser from submitting the form.
// 		e.preventDefault();

// 		// Serialize the form data.
// 		var formData = $(form).serialize();

// 		// Submit the form using AJAX.
// 		$.ajax({
// 			type: 'POST',
// 			url: $(form).attr('action'),
// 			data: formData
// 		})
// 		.done(function(response) {
// 			// Make sure that the formMessages div has the 'success' class.
// 			$(formMessages).removeClass('error');
// 			$(formMessages).addClass('success');

// 			// Set the message text.
// 			$(formMessages).text(response);

// 			// Clear the form.
// 			$('#name').val('');
// 			$('#email').val('');
// 			$('#message').val('');
// 		})
// 		.fail(function(data) {
// 			// Make sure that the formMessages div has the 'error' class.
// 			$(formMessages).removeClass('success');
// 			$(formMessages).addClass('error');

// 			// Set the message text.
// 			if (data.responseText !== '') {
// 				$(formMessages).text(data.responseText);
// 			} else {
// 				$(formMessages).text('Oops! An error occured and your message could not be sent.');
// 			}
// 		});
// 	});
// });