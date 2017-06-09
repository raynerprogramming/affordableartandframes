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

app.config(['$stateProvider', function($stateProvider){
	$stateProvider
	.state('root',{
		url: '',
		abstract: true,
		views: {
			'header': {
				templateUrl: 'header.html',
				controller: 'headerCtrl'
			},
			'footer':{
				templateUrl: 'footer.html',
				controller: 'footerCtrl'
			}
		}
	})
	.state('root.home', {
		url: '/',
		views: {
			'container@': {
				templateUrl: 'home.html'
			}
		}
	})
	.state('root.other', {
		url: '/other',
		views: {
			'container@': {
				templateUrl: 'other.html'
			}
		}
	});   
}]);