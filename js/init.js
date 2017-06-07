(function($){
	$(function(){
		$('.button-collapse').sideNav();
		$('.parallax').parallax();
		$('.carousel.carousel-slider').each(function() {
			var view = $(this);
			var firstImage = view.find('.carousel-item img').first();
			var imageHeight = firstImage[0].height;
			if (imageHeight > 0) {
				view.css('height', imageHeight);
			}
			else {
				//	view.css('height', 400);
			}
		});
		$('.carousel').carousel({full_width: true});
  }); // end of document ready
})(jQuery); // end of jQuery name space