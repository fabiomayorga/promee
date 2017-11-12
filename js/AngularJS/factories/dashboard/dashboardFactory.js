angular.module('dashboardFactory', [])

.factory('dashboard', function($http,$q, $httpParamSerializerJQLike, configuracionServidor){

	return{
		
		consultar: function() {

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/dashboard/graph-company",
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

		

		consultarProveedores: function(data, id) {

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/providers",
				headers: {
					'Content-Type': 'application/json'
				},
				data : data
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},

		consultarEmpresas: function(data, id) {

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/companies",
				headers: {
					'Content-Type': 'application/json'
				},
				data : data
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},

		consultarTerminos: function(data, id) {

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/dashboard/terms-logs/5",
				headers: {
					'Content-Type': 'application/json'
				},
				data : data
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		}



	}

});