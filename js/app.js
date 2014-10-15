$(document).ready(function() {
	$('.ryu').mouseenter(function() {
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
    	$('.ryu-still').show();
		$('.ryu-ready').hide();
  	});
	$('.ryu').mousedown(function() {
    	console.log('mousedown');
    // play hadouken sound
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').show();
    // show hadouken and animate it to the right of the screen
  	})
  	$('.ryu').mouseup(function() {
  		console.log('mouseup');
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
    // ryu goes back to his ready position
  	});
});