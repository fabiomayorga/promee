angular.module('parametrosFactory', [])

.factory('parametros', function($http,$q, $httpParamSerializerJQLike, configuracionServidor){

	return{
		perfiles: function() {

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/profiles",
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

		traerConfiguracion: function(id) {


			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoEmpresa+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/configuration/"+id,
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

			guardarConfiguracion: function(id, data, verbo) {


			var respuesta =  $http({
				method: ''+verbo,
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoEmpresa+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/configuration/"+id,
				headers: {
					'Content-Type': 'application/json'
				},
				data: data
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;


		} 

	}

});