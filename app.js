var app = angular.module('app',['ui.router','slick'])
//CONTROLLERS
.controller('FramingController',function($scope,$window){
	$('.parallax').parallax();
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/champartframing2.jpg",
	"title":"Octopus Garden",
	"descs":["Alcohol Ink","Abstract","Artist:  Champ Burleson","Black matte frames"],
	"price":"$200"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing1.jpg",
	"title":"Casafina",
	"descs":["Textured print","Artist:  Roger Duvall"]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/champartframing1.jpg",
	"title":"Pinwheels",
	"descs":["Alcohol Ink", "Artist: Champ Burleson"],
	"price":"$300"},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing2.jpg",
	"title":"Shadowboxed Medals",
	"descs":[]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing3.jpg",
	"title":"Hand Painted Liner",
	"descs":["Custom Hand painted red and yellow liner to enhance print."]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing5.jpg",
	"title":"Floated Abstract",
	"descs":[]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/jerseyframing1.jpg",
	"title":"Shadow Boxed Jersey",
	"descs":[]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/art2.jpg",
	"title":"Uncle Wally",
	"descs":["Original acrylic","By local artist Jennifer Jones"],
	"price":"$275"}
	];
	$scope.imgsrc = "images/background-frames2.jpg";
	$scope.pageinfo="Custom framing can make all the difference.  All our frames are hand made and cut to order.  We have over 1000 framing samples to choose from and glass types to fit any need."
	/*
	Framing, matting, dry mount, include installation hardware, custom dimension, hand made, cut to order, clear glass, non glare, UV clear (preservation), UV non glare, museum glass, true view white glass,
	mirrors, cross stitching, over 1000 frame samples in store to choose from.
	*/
})
.controller('ShadowController',function($scope,$window){
	$('.parallax').parallax();
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/shadowbox2.jpg",
	"title":"Shadow Box Computer Motherboard",
	"descs":[]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/shadowbox1.jpg",
	"title":"Shadow Boxes",
	"descs":["You name it, we can shadow box it:","Beatle Dolls", "Violins", "graduation memoribilia"]}	
	];
	$scope.imgsrc = "images/champwallart2-resize.jpg";
	/*
	wedding dress, intstruments, you name it we, shadow box it.
	*/
})
.controller('PrintingController',function($scope,$window){
	$('.parallax').parallax();
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/printing2.jpg",
	"title":"Large Format Printer(EPSON 9900)",
	"descs":["We can print on canvas, watercolor paper, photo paper and metallic photo paper","Large format printing up to 44 inches by 6 feet","We also print giclees for local artists"," Have your photo turned into a work of art","Photo restoration."]}
	];
	$scope.imgsrc = "images/champwallart2-resize.jpg";
	/*

	*/
})
.controller('CanvasController',function($scope,$window){
	$('.parallax').parallax();
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/canvas2.jpg",
	"title":"Family Canvas",
	"descs":["Hand stretched family portrait","Perfect for any occasion."]}
	];

	/*

	email,
	photo,
	flash drive,
	printed onto canvas.

	hand stretched canvas onto a wooden frame.  

	Includes all hanging materials. 

	*/
	
	
	$scope.imgsrc = "images/champwallart2-resize.jpg";
})
.controller('MemorabiliaController',function($scope,$window){
	$('.parallax').parallax();
	$scope.data='Framing';
	$('#sidenav-overlay').trigger('click');
	$scope.slides = [
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/framing2.jpg",
	"title":"Shadowboxed Medals",
	"descs":[]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/jerseyframing1.jpg",
	"title":"Shadow Boxed Jersey",
	"descs":[]},
	{"imgsrc":"https://raynerprogramming.github.io/affordableartandframes/images/teamframing.jpg",
	"title":"Manchester United Team Signatures",
	"descs":[]}
	];
	$scope.imgsrc = "images/champwallart2-resize.jpg";
	$scope.pageinfo="Frame your memories, so they last forever.  We offer UV glass for convservation purposes."
	/*
	Frame your memories, so the last forever.  Offer UV glass.  Conversation pieces
	*/
})
/**/
.controller('ContactController',function($scope){
	$scope.data='Contact';
	$('#sidenav-overlay').trigger('click');
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