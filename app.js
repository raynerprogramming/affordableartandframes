var app = angular.module('app',['ui.router','slick'])
//CONTROLLERS
.controller('FramingController',function($scope,$window){
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
	}];
	$('.your-element').on('edge', function(event, slick, direction){
  console.log('edge was hit')
});
})
/**/
.controller('ContactController',function($scope){
	$scope.data='Contact';

})
.controller('HomeController',function($scope){
	$scope.data='Home';
	$scope.imgsrc = "images/frames3.jpg";
	$scope.init = function(){
		$(function () {
			$('.button-collapse').sideNav();
			$('.parallax').parallax();
		});
	}
	angular.element(document).ready(function () {
		$scope.init();
	});
})
//DIRECTIVES
.directive('myPostRepeatDirective', function($window) {
	return {
		restrict: 'EA',
		link:function(scope, element, attrs) 
		{
			if (scope.$last){
				//$('.matchHeight').matchHeight();
			}
		}
	};
});
//STATE CONFIG
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
		templateUrl: "templates/framing-slick.html",
		controller: 'FramingController'
	})
	.state('contact', {
		url:"/contact",
		templateUrl: "templates/contact.html",
		controller: 'ContactController'
	});   
}]);