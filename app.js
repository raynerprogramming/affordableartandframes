var app = angular.module('app',['ui.router'])
.controller('FramingController',function($scope){
	$scope.data='Framing';

	$scope.init = function(){
		$(function () {
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
					view.css('height', 850);
				}
			});
			$('.carousel').carousel({full_width: true});
		});
	}
	angular.element(document).ready(function () {
		$scope.init();
	});
})
.controller('HomeController',function($scope){
	$scope.data='Home';
	$scope.init = function(){
		$(function () {
			$('.button-collapse').sideNav();
			$('.parallax').parallax();
		});
	}
	angular.element(document).ready(function () {
		$scope.init();
	});
});

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
	$urlRouterProvider
	.when("","/home");


	$stateProvider
	.state('home', {
		url:"/home",
		templateUrl: "templates/home.html",
		controller: 'HomeController'
	})
	.state('framing', {
		url:"/framing",
		templateUrl: "templates/framing.html",
		controller: 'FramingController'
	});   
	.state('contact', {
		url:"/contact",
		templateUrl: "templates/contact.html",
		controller: 'ContactController'
	});   
}]);