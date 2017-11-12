(function() {
	var app = angular.module('loginControllers', ['angular.morris', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngRoute' ,'ekosaveAdministracion'])

	.controller('loginMainController', function($scope, $mdDialog, $mdMedia, $location, $localStorage, $http , $mdToast, $timeout, $mdSidenav, administracionUsuarios, configuracionServidor, variables) {

		console.log((window.location.host).split('.')[0]); 
		console.log(variables);

		$scope.empresa=variables.data.companyId;
		$scope.logo= configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoEmpresa+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/configuration-image/"+variables.data.companyId + '?decache=' + Math.random();

		console.log($scope.profile.parentProperty);

		document.onkeypress = function(evt) {
			evt = evt || window.event;
			var charCode = evt.keyCode || evt.which;
			var charStr = String.fromCharCode(charCode);
			if (evt.keyCode == 13) {
				$scope.enviarDatosLogin();
			}
		}; function code(e) {
			e = e || window.event;
			return(e.keyCode || e.which);
		}



		window.onload = function(){
			document.onkeypress = function(e){
				var key = code(e);
				console.log("c");
			};
		};

		var last = {
			bottom: false,
			top: true,
			left: false,
			right: true
		};
		$scope.toastPosition = angular.extend({}, last);
		$scope.getToastPosition = function() {
			sanitizePosition();
			return Object.keys($scope.toastPosition).filter(function(pos) {
				console.log(pos);
				return $scope.toastPosition[pos];
			}).join(' ');
		};

		function sanitizePosition() {
			var current = $scope.toastPosition;
			if (current.bottom && last.top) current.top = false;
			if (current.top && last.bottom) current.bottom = false;
			if (current.right && last.left) current.left = false;
			if (current.left && last.right) current.right = false;
			last = angular.extend({}, current);
		}


		$scope.height = (($(window).height()) - 580) / 2;
		$(window).resize(function() {
			$scope.height = (($(window).height()) - 580) / 2;
			console.log($scope.height);

			$scope.$apply();
		});



		console.log("test");

		$scope.goRecuperar = function(ir) {
			$scope.myDate = new Date();
			$scope.isOpen = false;
			console.log(ir);
			$location.path("recuperar");
		}


		$scope.emailRecuperar = "";
		$scope.botonRegistrar = true;
		$scope.validar = function() {
			if ($scope.formularioForm.$valid) {
				$scope.botonRegistrar = false;
				console.log("valido");
			} else {
				$scope.botonRegistrar = true;
				console.log("invalido");
			}
		};
		$scope.recuperar = function() {


		}

		$scope.estadoo = $mdSidenav('left').isOpen();
		$("#cuerpo").removeClass("cuerpoWeb");
		console.log("removido");
		if ($scope.estadoo == true) {
			$mdSidenav("left").toggle();
		}


		$scope.goLogin = function(ir) {
			console.log(ir);
			$location.path("login");
		}


		$scope.displayForm = "none";

		$scope.displayForm = "";
		$scope.formulario = [];
		$scope.formulario.envio = {
			email: "",
			password: ""
		};



		$scope.enviarDatosLogin = function() {
			var email = $scope.formulario.envio.email;
			var password = $scope.formulario.envio.password;

			console.log($scope.formulario.envio.email);

			administracionUsuarios.login( email,password,$scope.empresa).then(function(respuesta){

				console.log(respuesta);

				if(respuesta.status == 200){

					$localStorage.currentUser = {
						username: "test" ,
						token: respuesta.data.token,
						date: new Date().getTime(), 
						data: respuesta.data.user,
						imgPerfil:  'img/avatar.png',
						imgCompany : 'img/avatar.png'

					};

					$http.defaults.headers.common.Authorization = 'Bearer ' + respuesta.data.token;
					$scope.profile.parentProperty = $localStorage.currentUser.data;


					$scope.profile.parentProperty.imgPerfil = 'img/avatar.png';
					$scope.profile.parentProperty.companyImg = $scope.logo;

					console.log("valido");
					$location.path("inicio");
				}
				else{
					$scope.mensajes.parentProperty(respuesta.data.message, "Aceptar", 3000);
				}
			});
		}

	})


})();