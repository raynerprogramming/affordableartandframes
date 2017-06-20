var app = angular.module('app',['ui.router','slick'])
//CONTROLLERS
.controller('FramingController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/champartframing2.jpg",
	"title":"Octopus Garden",
	"desc":"Original alcohol ink abstract By Champ Burleson $200"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing1.jpg",
	"title":"Casafina",
	"desc":"Textured print by Roger Duvall"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/champartframing1.jpg",
	"title":"Pinwheels",
	"desc":"Original Alcohol ink By Champ Burleson $300"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing2.jpg",
	"title":"Shadowboxed Medals",
	"desc":""},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing3.jpg",
	"title":"Hand Painted Liner",
	"desc":"Hand painted red and yellow liner to enhance print."},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing5.jpg",
	"title":"Floated Abstract",
	"desc":""},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/jerseyframing1.jpg",
	"title":"Shadow Boxed Jersey",
	"desc":""},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/art2.jpg",
	"title":"Uncle Wally",
	"desc":"Original acrylic by local artist Jennifer Jones $275"}
	];
	/*
	Framing, matting, dry mount, include installation hardware, custom dimension, hand made, cut to order, clear glass, non glare, UV clear (preservation), UV non glare, museum glass, true view white glass,
	mirrors, cross stitching, over 1000 frame samples in store to choose from.
	*/
})
.controller('ShadowController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/shadowbox2.jpg",
	"title":"Shadow Box Computer Motherboard",
	"desc":""},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/shadowbox1.jpg",
	"title":"Shadow Boxes",
	"desc":"Beatle Dolls, Violins, graduation memoribilia.  You name it, we can shadow box it."}	
	];
	/*
	wedding dress, intstruments, you name it we, shadow box it.
	*/
})
.controller('PrintingController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/printing2.jpg",
	"title":"Large Format Printer(EPSON 9900)",
	"desc":"We can print on canvas, watercolor paper, photo paper and metallic photo paper.  Large format printing up to 44 inches by 6 feet.  We also print giclees for local artists.  Have your photo turned into a work of art.  Photo restoration."}
	];
	/*

	*/
})
.controller('CanvasController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas-bridge.jpg",
	"title":"Canvas Bridge",
	"desc":"18x27 hand streched giclees canvas"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas1.jpg",
	"title":"Family Canvas",
	"desc":"Hand stretched family portrait.  Perfect for any occasion."}
	/*

	email,
	photo,
	flash drive,
	printed onto canvas.

	hand stretched canvas onto a wooden frame.  

	Includes all hanging materials. 

	*/
	
	];
})
.controller('MemorabiliaController',function($scope,$window){
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing2.jpg",
	"title":"Memorabilia",
	"desc":"Memorabilia"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/jerseyframing1.jpg",
	"title":"Memorabilia",
	"desc":"Memorabilia"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/teamframing.jpg",
	"title":"Manchester United Team Signatures",
	"desc":""}
	];
	/*
	Frame your memories, so the last forever.  Offer UV glass.  Conversation pieces
	*/
})
/**/
.controller('ContactController',function($scope){
	$scope.data='Contact';
})

.controller('HomeController',function($scope){
	$scope.data='Home';
	$scope.imgsrc1 = "images/champwallart2-resize.jpg";
	$scope.imgsrc2 = "images/background-frames2-resize.jpg";
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