var app = angular.module('app',[])
.controller('framingController',function($scope){
	$scope.data='test';

	$scope.init = function(){
		$(function () {
			$('.raynerNavBar').sideNav();
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
		});
	}
	angular.element(document).ready(function () {
        $scope.init();
    });

});

app.run(function($rootScope){
  $rootScope.$on("$includeContentLoaded", function(event, templateName){
     $('.raynerNavBar').sideNav();
  });
});