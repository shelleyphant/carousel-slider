$(document).ready(function(){ //Don't run scripts until the document has loaded
	
	//Global Variables
	var slides = $('.carousel ol li');
	var current = slides[0];
	var number = slides.length;
	var counter = 0;

	//Sliding Function
	function slide(direction){
		$(slides.get(counter)).addClass('current');

		slides.removeClass('current prev forth');
		counter = counter + direction;

		if(direction === -1 && counter < 0){
			counter = number - 1;
		}
		if(direction === 1 && !slides[counter]){
			counter = 0;
		}

		$(slides.get(counter)).addClass('current');
		$(slides.get(counter - 1)).addClass('prev');
		$(slides.get(counter + 1)).addClass('forth');

		if( (counter + 1) === number){
			$(slides.get(0)).addClass('forth');
		}

	}

	//Button Functions
	$('.next').on('click', function(){
		slide(1);
	});
	$('.back').on('click', function(){
		slide(-1);
	});

	slide(0);
});
