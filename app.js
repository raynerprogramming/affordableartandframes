var app = angular.module('app',['ui.router'])
.controller('FramingController',function($scope){
	$scope.data='Framing';
	$scope.slides = [{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/art2.jpg",
	"title":"art2",
	"desc":"desc2"
},{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing1.jpg",
"title":"framing1",
"desc":"desc1"
},{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing3.jpg",
"title":"framing3",
"desc":"desc3"
}]

$scope.init = function(){
	$(function () {
		$('.button-collapse').sideNav();
		$('.parallax').parallax();
		$('.carousel.carousel-slider').each(function() {
			var view = $(this);
			var firstImage = view.find('.carousel-item img').first();
			var imageHeight = firstImage[0] ?firstImage[0].height : 850;
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
.controller('ContactController',function($scope){
	$scope.data='Contact';
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
	})
	.state('contact', {
		url:"/contact",
		templateUrl: "templates/contact.html",
		controller: 'ContactController'
	});   
}]);