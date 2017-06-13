var app = angular.module('app',['ui.router','slick'])
//CONTROLLERS
.controller('FramingController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/champartframing2.jpg",
	"title":"Champ's Art",
	"desc":"Champ's Art"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing1.jpg",
	"title":"framing1",
	"desc":"desc1"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/champartframing1.jpg",
	"title":"Champ's Art",
	"desc":"Champ's Art"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing2.jpg",
	"title":"framing2",
	"desc":"desc2"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing3.jpg",
	"title":"framing3",
	"desc":"desc3"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing5.jpg",
	"title":"framing5",
	"desc":"desc5"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing6.jpg",
	"title":"framing6",
	"desc":"desc6"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing7.jpg",
	"title":"framing7",
	"desc":"desc7"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/jerseyframing1.jpg",
	"title":"Jersey",
	"desc":"Jersey"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/art2.jpg",
	"title":"art2",
	"desc":"desc2"}
	];
})
.controller('ShadowController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/shadowbox1.jpg",
	"title":"Shadow Box 1",
	"desc":"Shadow Box"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/shadowbox2.jpg",
	"title":"Shadow Box 2",
	"desc":"Shadow Box"}
	];
})
.controller('PrintingController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas1.jpg",
	"title":"Canvas 1",
	"desc":"Canvas"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas2.jpg",
	"title":"Canvas 2",
	"desc":"Canvas"}
	];
})
.controller('CanvasController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas1.jpg",
	"title":"Canvas 1",
	"desc":"Canvas"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas2.jpg",
	"title":"Canvas 2",
	"desc":"Canvas"}
	];
})
.controller('MemorabiliaController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas1.jpg",
	"title":"Canvas 1",
	"desc":"Canvas"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas2.jpg",
	"title":"Canvas 2",
	"desc":"Canvas"}
	];
})
/**/
.controller('ContactController',function($scope){
	$scope.data='Contact';
})

.controller('HomeController',function($scope){
	$scope.data='Home';
	$scope.imgsrc1 = "images/champshopwall.jpg";
	$scope.imgsrc2 = "images/frames3.jpg";
	$('#sidenav-overlay').trigger('click');
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
		templateUrl: "templates/framing.html",
		controller: 'FramingController'
	})
	.state('shadow', {
		url:"/shadowbox",
		templateUrl: "templates/framing.html",
		controller: 'ShadowController'
	})
	.state('printing', {
		url:"/printing",
		templateUrl: "templates/framing.html",
		controller: 'PrintingController'
	})
	.state('canvas', {
		url:"/canvas",
		templateUrl: "templates/framing.html",
		controller: 'CanvasController'
	})
	.state('memorabilia', {
		url:"/memorabilia",
		templateUrl: "templates/framing.html",
		controller: 'MemorabiliaController'
	})
	.state('contact', {
		url:"/contact",
		templateUrl: "templates/contact.html",
		controller: 'ContactController'
	});   
}]);