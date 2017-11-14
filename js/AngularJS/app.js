(function() {
	var app = angular.module('promeeApp', 
		[  

		'mapControllers',

		'toolsFactory',
		
		'ngRoute',
		'ngStorage',
		'ngMessages',
		'ngSanitize'
		]);



	app.config(['$routeProvider', '$locationProvider', '$qProvider' , function($routeProvider, $locationProvider, $qProvider) {


		$routeProvider

		.when('/map', {
			templateUrl: "views/map/map.html",
			controller: 'mapMainController',
			// resolve: {
			// 	variables : function(validarAcceso){
			// 		return validarAcceso.acceso();
			// 	}
			// }
		})
		
		.otherwise({
			redirectTo: '/map'
		});


		$locationProvider.html5Mode(true);

	}])

	.constant('configuracionServidor', {
		version : "v1",
		protocolo : "http://",
		nombreApi : "promee-api",
		servidor : "",
		puertoLead : ':NUMERO',
		app: (window.location.host).split('.')[0] 
	})

	.config(function($mdThemingProvider) {

  		// Extend the red theme with a different color and make the contrast color black instead of white.
  		// For example: raised button text will be black instead of white.
  		var neonRedMap = $mdThemingProvider.extendPalette('red', {
  			'500': 'rgb(245, 0, 0)',
  			'contrastDefaultColor': 'light'
  		});

  		// Register the new color palette map with the name <code>neonRed</code>
  		$mdThemingProvider.definePalette('neonRed', neonRedMap);

  		// Use that theme for the primary intentions
  		$mdThemingProvider.theme('default')
  		.primaryPalette('neonRed');

  	})



	app.controller('mainController', function($scope, $rootScope, $window, $route, $mdToast , $mdDialog, $mdMedia, $timeout, $location, $http , $localStorage ,$mdSidenav, $timeout, tools) {	

		$scope.defaultZoom = 14;
		
		$scope.$on('$viewContentLoaded', function() {

			//hasta que no este alojada en un dominio seguro, pailas
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else { 
				x.innerHTML = "Geolocation is not supported by this browser.";
			}


			function showPosition (position) {
				x.innerHTML = "Latitude: " + position.coords.latitude + 
				"<br>Longitude: " + position.coords.longitude;
			}

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 3.445869, lng: -76.531418},
				zoom: $scope.defaultZoom ,
				fullscreenControl: false,
				mapTypeControl: false
			});
		});

		$scope.categories = ["ropa", "herramientras","juguetes"];

		$scope.categorias= (tools.randomizer($scope.categories));

		$scope.toggleLeft = buildToggler('left');
		$scope.toggleRight = buildToggler('right');

		$scope.isOpenRight = function(){
			return $mdSidenav('right').isOpen();
		};

		function buildToggler(componentId) {
			return function() {
				$mdSidenav(componentId).toggle();
			};
		}

		$scope.searchProducts = function(){
			$scope.products=["perfume", "herramientas", "comida"]
		}

		$scope.close = function () {

			$mdSidenav('right').close()
			.then(function () {

			});
		};

		document.onkeypress = function(evt) {
			evt = evt || window.event;
			var charCode = evt.keyCode || evt.which;
			var charStr = String.fromCharCode(charCode);
			if (evt.keyCode == 13) {

				if($scope.focus==true && $scope.products.length==0){
					$scope.searchProducts();
				}

			}
		}; function code(e) {
			e = e || window.event;
			return(e.keyCode || e.which);
		}



	})


})();