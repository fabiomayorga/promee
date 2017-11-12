(function(){

	var app = angular.module('webMainControllers' , ['angular.morris' ,'ngMaterial', 'ngMessages' , 'ngAnimate', 'ekosaveAdministracion'  ,'md.data.table' ])


	.controller('webMainController' , function ($scope  , $mdDialog, $mdMedia, $location, $mdToast,  $timeout , $mdSidenav,transacciones, administracionUsuarios, dashboard) {

		$scope.query = {
			"filter":"",
			"order": '',
			"limit": 5,
			"page": 1
		};

		$scope.logPagination = function (page, limit) {
			$scope.query.page=page;
			$scope.query.limit=limit;
		}

		$scope.cambiarEstado();

		$scope.callDashboardLead = function(){

			if($scope.checkAccess('inicio','lead')==true){

				dashboard.consultar().then(function(respuesta){

					if(respuesta.status == 200){

						$scope.dataCharts = respuesta.data;	


						document.getElementById('chartContainer').classList.remove("noVisible");
						document.getElementById('chartContainer').classList.add("visible");
						$scope.dataCharts = [];
						for(dato in respuesta.data){
							$scope.dataCharts.push({y: respuesta.data[dato].fecha, a: respuesta.data[dato].habilitados, b: respuesta.data[dato].inhabilitados, c: respuesta.data[dato].porActivar });
						}





					}
					else{
						$scope.mensajes.parentProperty(respuesta.data.message, "Aceptar", 3000);
					}
				});

				dashboard.consultarProveedores().then(function(respuesta){

					if(respuesta.status == 200){

						$scope.proveedores = respuesta.data.length;	
						document.getElementById('cantidadProveedores').classList.remove("noVisible");
						document.getElementById('cantidadProveedores').classList.add("visible");


					}
					else{
						$scope.mensajes.parentProperty(respuesta.data.message, "Aceptar", 3000);
					}
				});

				dashboard.consultarEmpresas().then(function(respuesta){

					if(respuesta.status == 200){

						$scope.porActivar = respuesta.data.poractivar.length;
						document.getElementById('empresasPorActivar').classList.remove("noVisible");
						document.getElementById('empresasPorActivar').classList.add("visible");

					}
					else{
						$scope.mensajes.parentProperty(respuesta.data.message, "Aceptar", 3000);
					}
				});

				dashboard.consultarTerminos().then(function(respuesta){

					if(respuesta.status == 200 || respuesta.status == 201){

						$scope.terminos = respuesta.data;

						document.getElementById('terminos').classList.remove("noVisible");
						document.getElementById('terminos').classList.add("visible");

					}
					else{
						$scope.mensajes.parentProperty(respuesta.data.message, "Aceptar", 3000);
					}
				});

				$scope.mostrarTerminos = function(ev, i) {

					console.log(i);
					$scope.terminosMostrar=i;

					var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
					$mdDialog.show({
						controller:'verTerminosController',
						templateUrl: 'views/web/modalTerminos.html',
						parent: angular.element(document.body),
						targetEvent: ev,
						clickOutsideToClose:true,
						fullscreen: useFullScreen,
						scope:$scope,
						preserveScope: true,

					})
					.then(function(answer) {
						$mdDialog.hide();
					}, function() {

					});
					$scope.$watch(function() {
						return $mdMedia('xs') || $mdMedia('sm');
					}, function(wantsFullScreen) {
						$scope.customFullscreen = (wantsFullScreen === true);
					});

				}


			}

		}

	})

	.controller('verTerminosController', function($scope, $mdToast, $mdDialog) {
		$scope.cerrar = function() {
			$mdDialog.cancel();
		};
	});

})();
