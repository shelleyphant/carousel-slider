$(document).ready(function(){ //Don't run scripts until the document has loaded
	
	//Global Variables
	var slides = $('.slider ol li');
	var current = slides[0];
	var number = slides.length;
	var counter = 0;

	//Sliding Function
	function slide(direction){
		$(slides.get(counter)).addClass('current');

		slides.removeClass('current prev forth');
		counter = counter + direction;

	}

	//Button Functions
	$('.next').on('click', function(){
		slide(1);
		console.log('next slide please');
	});
	$('.back').on('click', function(){
		slide(-1);
		console.log('previous slide please');
	});

	slide(0);
});
