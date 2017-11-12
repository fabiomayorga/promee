angular.module('georeferenciaFactory', [])

.factory('georeferencia', function($http,$q, $httpParamSerializerJQLike, configuracionServidor){

	return{
		paises: function() {

			console.log(configuracionServidor);

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/countries",
				headers: {
					'Content-Type': 'application/json'
				},
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;


		},

		departamentos: function(id) {

			console.log(configuracionServidor);

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/countries/"+id+"/departments",
				headers: {
					'Content-Type': 'application/json'
				},
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;


		},
		ciudades: function(id) {

			console.log(configuracionServidor);

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/countries/departments/"+id+"/towns",
				headers: {
					'Content-Type': 'application/json'
				},
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;


		} 


	}

});