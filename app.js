var app = angular.module('app',['ui.router'])
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

})
.controller('footerCtrl',function($scope){
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

})
.controller('RootController',function($scope,$state){
	$scope.data='Root';

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
})
.controller('HomeController',function($scope){
	$scope.data='Home';

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

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
	$urlRouterProvider
		.when("","/home")
		.when("/","/home");

	$stateProvider
	.state('app',{
		templateUrl: 'index.html',
	})
	.state('app.home', {
		url:"/home",
		templateUrl: "templates/home.html",
		controller: 'HomeController'
	});   
}]);