$(document).ready(function(){ //Don't run scripts until the document has loaded
	
	//Global Variables
	var slides = $('.carousel ol li');
	var current = slides[0];
	var number = slides.length;
	var counter = 0;
	var init = true;

	//Sliding Function
	function slide(direction){
		$(slides.get(counter)).addClass('current');

		if(number === 1){
			console.log('one');
			$(slides.get(counter)).addClass('current');
			$('.carousel > .slide').css({'display': 'none'});
		}

		if (number === 2){
			if (init) {
				$(slides.get(counter)).addClass('current');
				$(slides.get(counter + 1)).addClass('forth');
				$('.current').clone().appendTo('.carousel ol').removeClass('current').addClass('prev');
				$('.forth').clone().appendTo('.carousel ol').removeClass('forth').addClass('prev');

				slides = $('.carousel ol li');
				number = slides.length;
				current = slides[0];
				init = false;
			}
		}

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
	$('.back').on('click', function(){
		$('.current').css({'z-index': '2'});
		$('.forth').css({'z-index': '1'});
		$('.prev').css({'z-index': '0'});
		slide(1);
	});
	$('.next').on('click', function(){
		$('.current').css({'z-index': '2'});
		$('.prev').css({'z-index': '1'});
		$('.forth').css({'z-index': '0'});
		slide(-1);
	});

	slide(0);
});
