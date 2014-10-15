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
    	playHadouken();
    	$('.ryu-ready').hide();
	   	$('.ryu-throwing').show();
	   	$('.hadouken').finish.show();
    // show hadouken and animate it to the right of the screen
    	$('.ryu').animate(
  			{'left': '300px'},
  				500,
  			function() {
    			$(this).hide();
    			$(this).css('left', '-212px');
  			});
	  	});
  	$('.ryu').mouseup(function() {
  		console.log('mouseup');
  		$('.ryu-throwing').hide();
 		$('.ryu-ready').show();
   // ryu goes back to his ready position
 	});
// 	alert('Code is just before key press'); 
 	$(document).keydown(function (e) {
//		alert('Key pressed is ==  ', e.keyCode)
  		if (e.keyCode == 88) {
//  			alert('Code is inside key press  ');
//   			$('.ryu.ready').hide();
//   			$('.ryu-still').hide();
//   			$('.ryu-throwing').hide();
   			$('.ryu-cool').show();
  			}
  	$(document).keyup(function (e) {
		if (e.keyCode == 88) { 
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		}
		});
  	});
});
function playHadouken () {
//		alert("Calling sound");
  		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
  		$('#hadouken-sound')[0].play();
};