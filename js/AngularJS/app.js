(function() {
	var app = angular.module('ekosaveAdministracion', 
		[  
		'loginControllers',


		'webMainControllers',
		'registroClientesControllers',
		'perfilControllers',
		'configuracionControllers',
		
		

		'georeferenciaFactory',
		'parametrosFactory',
		'dashboardFactory',
		'administracionUsuariosFactory',
		'terminosFactory',
		

		'ngRoute',
		'ngStorage',
		'ngMessages',
		'ngSanitize'
		]);



	app.config(['$routeProvider', '$locationProvider', '$qProvider' , function($routeProvider, $locationProvider, $qProvider) {


		$routeProvider

		//Accesos publicos

		.when('/login', {
			templateUrl: "views/login/login.html",
			controller: 'loginMainController',
			resolve: {
				variables: function(validarAcceso){
					return validarAcceso.token();
				}   
			}
		})

		.when('/blank',{
			templateUrl: "views/login/registroClientes.html",
			controller: 'registroController',
			resolve: {
				paisesList: function(georeferencia) {
					return  georeferencia.paises();
				}
			}
		}) 

		//fin accesos publicos



		//Accesos con autenticacion valida, pero sin permiso
		.when('/configuracion',{
			templateUrl: "views/configuracion/configuracion.html",
			controller: 'configuracionMainController',
			resolve: {
				check: function(validarAcceso) {
					return  validarAcceso.configModule();
				}
			}
		}) 

		.when('/perfil',{
			templateUrl: "views/perfil/perfil.html",
			controller: 'perfilMainController',
			resolve: {
				uso: function(validarAcceso) {
					return  validarAcceso.uso();
				}
			}
		}) 
		//Fin accesos con autenticacion valida, pero sin permiso

		//Todos tienen acceso a INICIO, pero solo si se esta logueado
		.when('/inicio', {
			templateUrl: "views/web/main.html",
			controller: 'webMainController',
			resolve: {
				variables : function(validarAcceso){
					return validarAcceso.acceso();
				}
			}
		})
		
		.otherwise({
			redirectTo: '/login'
		});


		$locationProvider.html5Mode(true);


	}])

	.constant('configuracionServidor', {
		version : "v1",
		protocolo : "http://",
		nombreApi : "ekosave-api",
		servidor : "138.68.44.226",
		puertoLead : ':3000',
		puertoEmpresa: ':5000',
		puertoUsuario: ':7000',
		app: (window.location.host).split('.')[0] 
	})


	.run(['$rootScope','$localStorage' ,'$timeout', '$http', function ( $rootScope, $scope, $timeout , $http, $location, $localStorage ) {
	}]);


	app.factory("consultarPais", function($q, $timeout){
		return {
			default: function(){

				console.log($q.defer());
				var deferred = $q.defer();
				$timeout(function(){
					deferred.resolve("Allo!");
				},1000);
				return deferred.promise;
			}
		}
	}); 


	app.factory("validarAcceso", function($q,$timeout, $http, $localStorage , $location, objetualizer, consultar, configuracionServidor ){
		return {

			token: function(){

				var defered=$q.defer();
				var promise=defered.promise;
				var s = (window.location.host).split('.')[0];

				var respuesta = $http({
					method: 'GET',
					url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoEmpresa+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/"+"configuration/login/"+s,
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(function(respuesta){

					if ($localStorage.currentUser) {

                   		//a la fecha almacenada en la variable global le sumo 12 en milisegundos (43200000) y si es menor a cero, quiere decir que ha expirado
                   		if( (  ($localStorage.currentUser.date + 43200000) ) - new Date().getTime() >= 0 ){
                   			window.location.replace("inicio");   
                   			$http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
                   			console.log("sesion activa");
                   		}
                   		else{

                   			console.log("sesion vencida");
                   			delete $localStorage.currentUser;
                   			$http.defaults.headers.common.Authorization = '';   
                   			window.location.replace("login"); 
                   		}

                   	}else{
                   		defered.resolve();
                   	} 
                   	defered.resolve();
                   	return respuesta;

                   }, function(respuesta){

                   	console.log("n");
                   	window.location.replace("blank"); 
                   	return promise;

                   });


				
				return respuesta;
			},
            //Se crea para seccioines de la app que no hagan parte de un modulo
            uso: function(){

            	var defered=$q.defer();
            	var promise=defered.promise;

            	if ($localStorage.currentUser) {

                    //a la fecha almacenada en la variable global le sumo 12 en milisegundos (43200000) y si es menor a cero, quiere decir que ha expirado
                    if( (  ($localStorage.currentUser.date + 43200000) ) - new Date().getTime() >= 0 ){             	   	
                    	console.log("sesion activa");
                    	defered.resolve();
                    }
                    else{
                    	console.log("sesion vencida");
                    	delete $localStorage.currentUser;
                    	$http.defaults.headers.common.Authorization = '';   
                    	window.location.replace("login"); 
                    }

                }else{
                	delete $localStorage.currentUser;
                	$http.defaults.headers.common.Authorization = '';   
                	window.location.replace("login"); 
                } 
                return promise;
            },

             //Se crea para secciones de la app que no hagan parte de un modulo, pero tengan una restriccion asociada a la variable de sesion existente en el sistema
             configModule: function(){

             	var defered=$q.defer();
             	var promise=defered.promise;

             	if ($localStorage.currentUser) {

                    //a la fecha almacenada en la variable global le sumo 12 en milisegundos (43200000) y si es menor a cero, quiere decir que ha expirado
                    if( (  ($localStorage.currentUser.date + 43200000) ) - new Date().getTime() >= 0 ){             	   	
                    	console.log("sesion activa");



                    	if($localStorage.currentUser.data.profileId==4){
                    		defered.resolve();
                    	}else{
                    		console.log("sesion vencida");
                    		delete $localStorage.currentUser;
                    		$http.defaults.headers.common.Authorization = '';   
                    		$timeout(function () {
                    			window.location.replace("login"); 
                    		}, 300);
                    		
                    	}


                    }
                    else{
                    	console.log("sesion vencida");
                    	delete $localStorage.currentUser;
                    	$http.defaults.headers.common.Authorization = '';   
                    	window.location.replace("login"); 
                    }

                }else{
                	delete $localStorage.currentUser;
                	$http.defaults.headers.common.Authorization = '';   
                	window.location.replace("login"); 
                } 
                return promise;
            },

            acceso: function(){
            	var defered=$q.defer();
            	var promise=defered.promise;

            	var localizacion = $location.$$path;
            	localizacion = localizacion.replace( "/" ,'');    
            	localizacion = localizacion.split("/");

            	console.log(localizacion);

            	console.log($localStorage.currentUser);

            	if($localStorage.currentUser){

            		$http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;

            		console.log($localStorage.currentUser);


                    //se revisa si el array del path tiene tamaño mayor a uno, lo que indica que el valor de dicho array en la posicion cero (array[0]) PUEDE ENTRAR a ese modulo
                    //los otros valores array[1,2,3...etc] son permisos, que reviso en los permisos propios del modulo

                    //si tiene longitud 

                    if(localizacion[0] in $localStorage.currentUser.data.modules){

                    	console.log(localizacion[0]+" si esta modules");

                        //ahora se revisa si en la localizacion hay mas de un espacio, lo que indica que todos los demas son accesos

                        if(localizacion.length > 1){

                        	console.log(localizacion);
                            //copia para evaluar los permisos

                            var copia = angular.copy(localizacion);

                            copia.shift();

                            var testLocalizacion = copia;

                            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;


                            for(acceso in testLocalizacion){

                            	if($localStorage.currentUser.data.modules[ localizacion[0] ].permission.includes( testLocalizacion[acceso]) ){
                            		console.log("si tiene el permiso de "+testLocalizacion[acceso]);
                            	}
                            	else{
                            		console.log("no tiene el permiso de "+testLocalizacion[acceso]);

                            		delete $localStorage.currentUser;
                            		$http.defaults.headers.common.Authorization = '';   
                            		window.location.replace("login"); 
                            	}

                            }

                            const permisos =$localStorage.currentUser.data.modules[ localizacion[0] ].permission;
                            console.log(permisos);
                            defered.resolve(objetualizer.default( permisos ));

                        }
                        else{

                        	const permisos =$localStorage.currentUser.data.modules[ localizacion[0] ].permission;
                        	console.log(objetualizer.default( permisos ));
                        	defered.resolve(objetualizer.default( permisos ));

                        }

                    }else{
                    	delete $localStorage.currentUser;
                    	$http.defaults.headers.common.Authorization = '';   
                    	window.location.replace("login"); 
                    }

                }else{
                	delete $localStorage.currentUser;
                	$http.defaults.headers.common.Authorization = '';   
                	window.location.replace("login"); 
                }

                return promise;
            }


        }
    });


app.service('consultar', function($http) {
	this.default = function(data) {
		var respuesta = $http({
			method: 'POST',
			url: "http://138.68.44.226:3000/ekosave-api/v1/login",
			headers: {
				'Content-Type': 'application/json'
			},
			data: {email:"arith@arith", password: ""+123456 },
		})
		return respuesta;
	}
});

app.service('objetualizer', function() {
	this.default = function(data) {
		
		var object = {};

		for(key in data){
			object[data[key]]= true;
		}

		return object;
	}
});





app.factory("transacciones", function() {
	var botonAmpliacion = "none";
	var interfaz = {
		cambiarBotonAmpliacion: function(entrada) {
			botonAmpliacion = 1;
		},
		getCambiarBotonAmpliacion: function() {
			return botonAmpliacion;
		}
	}
	return interfaz;
});



app.factory("globales", function() {

	var areaActual="fabio"
	var medidor ="";
	var variables = {

		nombre:"fabio",
		cambiarArea : function(nuevoValor){
			areaActual = nuevoValor;
		},
		obtenerArea: function(){
			return areaActual;
		},
		cambiarMedidor : function(nombreMedidor){
			medidor= nombreMedidor;
		},
		obtenerMedidor: function(){
			return medidor;
		}
	}

	return variables;
});

app.controller('mainController', function($scope, $rootScope, $window, $route, $mdToast , $mdDialog, $mdMedia, $timeout, $location, $http , $localStorage ,$mdSidenav, $timeout, transacciones, configuracionServidor) {

	$scope.profile = {};
	$scope.profile.parentProperty="";

	if($localStorage.currentUser){

		$scope.profile.parentProperty =  $localStorage.currentUser.data;

		if($localStorage.currentUser.data.profileId==1){
			$scope.profile.parentProperty.imgPerfil = 'img/avatar.png';
			$scope.profile.parentProperty.companyImg = 'img/avatar.png';
		}
		else{
			$scope.profile.parentProperty.imgPerfil = configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/image/users/"+$scope.profile.parentProperty.id + '?decache=' + Math.random();
			$scope.profile.parentProperty.companyImg = configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoEmpresa+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/configuration-image/"+$scope.profile.parentProperty.companyId;
		}
		
	}



	$scope.idFiker = function(data) {

		for(key in data){
			var tmp = data[key];
			tmp.index = key;
			data[key]= tmp;
		}

		return data;
	}
	


	$scope.checkAccess = function(m,a){

		var respuesta = false;

		if($localStorage.currentUser){

			if($localStorage.currentUser.data.modules[m].permission.includes(a)){
				return respuesta = true;
			}
			else{
				return respuesta = false;
			}

		}

		
		return respuesta
	}

	if($localStorage.currentUser){

		$scope.menuOptions = $localStorage.currentUser.data.modules;
		console.log($scope.menuOptions);

	}

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


	$scope.mensajes = {};

	$scope.mensajes.parentProperty = function(mensaje, textoBoton, duracion, target){

		if(!textoBoton){
			var textoBoton = "";
		}

		if(!duracion){
			var duracion = 2000;
		}

		if(!target){
			var target = '#toast-container';
		}

		var pinTo = $scope.getToastPosition();
		var toast = $mdToast.simple().textContent(mensaje)
		.action(textoBoton).highlightAction(true)
		.hideDelay(duracion).position(pinTo)
		.parent(document.querySelectorAll(target));

		$mdToast.show(toast).then(function(response) {
			if (response == 'Aceptar') {
			}
			if("Ir a la web Ekosave"){
				console.log("ir a web");
			}

		});

	}




	$scope.configuracionServidor = {};
	$scope.configuracionServidor.parentProperty = {};
	$scope.configuracionServidor.parentProperty.version = "v1";
	$scope.configuracionServidor.parentProperty.protocolo = "http://";
	$scope.configuracionServidor.parentProperty.nombreApi = "ekosave-api";
	$scope.configuracionServidor.parentProperty.servidor = "138.68.44.226:3000";




	var temp = $location["$$url"].split("/");
	$scope.temporal = temp;


	$scope.cambioRaiz = function(indice){

		$location.path($scope.indices[indice]);

	}

	$scope.goDash = function(modulo){
		$location.path(modulo);
		console.log("cambio");
	}

	$scope.indices = [];

	$scope.puntos = function(punto){

		console.log(punto);
		var temporal = $location["$$url"].split("/");
		var temp=[];

		for(punto in temporal){

			if(punto != 0){

				if(punto == 1){
					temp[punto-1] = temporal[punto];
				}
				else{
					temp[punto-1] = temporal[punto-1]+"/"+temporal[punto];
				}

			}
		}

		$scope.indices = temp;

		$scope.longitud = temporal.length - 2;

	}

	window.onresize = function(){ 

		if (window.matchMedia("(orientation: portrait)").matches) {
			console.log("v");
		}

		if (window.matchMedia("(orientation: landscape)").matches) {
			console.log("h");
		}

	} 

	$scope.indices = [];

        //un intervalo para revisar una variable determinada cada x tiempo
        // window.setInterval(function(){
        //	$scope.check();
        //}, 500);


        $scope.logOut = function() {

        	delete $localStorage.currentUser;
        	$http.defaults.headers.common.Authorization = '';	
        	$location.path("login");

        	document.getElementById("header").classList.remove("visible");
        	document.getElementById("header").classList.add("noVisible"); 

        } 


        $scope.informacionUsuario = {};
        $scope.informacionUsuario.parentProperty = "";
        $scope.imagenNav = {};
        $scope.imagenNav.parentProperty = "img/avatar.png";
        $scope.nombreUsuario = {};
        $scope.nombreUsuario.parentProperty = "";
        $scope.mostrarMenuHeader = {};
        $scope.mostrarMenuHeader.parentProperty = "none";

        $scope.prueba = {};
        $scope.prueba.parentProperty = "none";
        $scope.isSidenavOpen = true;

        $scope.accionMenu = function(){
        	$mdSidenav("left").toggle();
        }

        $scope.cambiarEstado = function(){

        	if($localStorage.currentUser){

        		$scope.menuOptions = $localStorage.currentUser.data.modules;
        		console.log($scope.menuOptions);

        	}

        	document.getElementById("header").classList.remove("noVisible");
        	document.getElementById("header").classList.add("visible"); 


        	var temp = $location["$$url"].split("/");
        	$scope.raiz = temp;

        	if($location.path()=="/login"){
        		$location.path("inicio")
        	}

        	$scope.mostrarMenuHeader.parentProperty = "block";
        	$scope.botonAmpliacion = "initial";

        	transacciones.cambiarBotonAmpliacion("jeje");
        	$scope.informacionUsuario.parentProperty = "nombre";
        	$scope.prueba.parentProperty = "grid";


        	$scope.botonAmpliacion = transacciones.getCambiarBotonAmpliacion();
        	$scope.botonAmpliacion = "ddd";

        	$scope.estadoo = $mdSidenav('left').isOpen();;

        	if ($scope.estadoo == false) {
        		$mdSidenav("left").toggle();
        	}

        	$("#nav").css("display", "");
        	$("#cuerpo").addClass("cuerpoWeb");
        }

        $scope.cerrar = function(){
        	$mdDialog.hide();
        }


        $scope.cancel = function() {
        	$mdDialog.cancel();
        };

        $scope.cerrar = function() {
        	$mdDialog.cancel();
        };


        $scope.openMenu = function($mdOpenMenu, ev) {

        	$scope.$on("$mdMenuClose", function() {
        		console.log("menu closing");
        	});

        	originatorEv = ev;
        	$mdOpenMenu(ev);
        };


    })


})();