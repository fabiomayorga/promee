angular.module('administracionUsuariosFactory', [])

.factory('administracionUsuarios', function($http,$q, $httpParamSerializerJQLike, configuracionServidor){

	return{

		login : function(email, password, id) {

	

			var data = {email: email, password: password, companyId: id};
			console.log(data);
			var respuesta = $http({
				method: 'POST',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoUsuario+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/clients/login",
				headers: {
					'Content-Type': 'application/json'
				},
				data: {email: email, password: password, companyId: id},
			})
			.then(function(respuesta){

				return respuesta;

			}, function(respuesta){

				return respuesta;
			});

			return respuesta;

		},


		registrarCliente: function(data) {

			var respuesta =  $http({
				method: 'POST',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/companies",
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

		},

		consultarCompanies: function(data) {

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/companies",
				headers: {
					'Content-Type': 'application/json'
				}
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},

		consultarUsuarios: function() {

			var respuesta =  $http({
				method: 'GET',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/users",
				headers: {
					'Content-Type': 'application/json'
				}
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},

		crearUsuarios: function(data) {

			var respuesta =  $http({
				method: 'POST',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/users",
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

		},

		habilitarUsuarios: function(datos) {

			var valor = {};
			valor.state = true;

			var respuesta =  $http({
				method: 'PATCH',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/users/"+datos,
				headers: {
					'Content-Type': 'application/json'
				},
				data: valor
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},

		inhabilitarUsuarios: function(datos) {

			var valor = {};
			valor.state = false;

			var respuesta =  $http({
				method: 'PATCH',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/users/"+datos,
				headers: {
					'Content-Type': 'application/json'
				},
				data: valor
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},

		editarUsuario: function(datos) {

			console.log(datos);
			var respuesta =  $http({
				method: 'PUT',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/users/"+datos.id,
				headers: {
					'Content-Type': 'application/json'
				},
				data: datos
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},
		activarCompanies: function(id) {

			var valor = {};
			valor.state = 2;

			var respuesta =  $http({
				method: 'PATCH',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/companies/"+id,
				headers: {
					'Content-Type': 'application/json'
				},
				data : valor
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},
		inactivarCompanies: function(id) {

			var valor = {};
			valor.state = 0;

			var respuesta =  $http({
				method: 'PATCH',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/companies/"+id,
				headers: {
					'Content-Type': 'application/json'
				},
				data : valor
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},
		cambiarPassword: function(id,data) {

			

			var respuesta =  $http({
				method: 'PATCH',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/user-company/"+id,
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
		cambiarImagen: function(id,img) {

			console.log(img);
			var respuesta =  $http({
				method: 'POST',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/users-company-image/"+id,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				transformRequest: angular.identity,
				data : img
				
			}).then(function success(respuesta){

				return respuesta;

			}, function error(respuesta){

				return respuesta;
			});


			return respuesta;

		},
		cambiarDatos: function(id,data) {

			

			var respuesta =  $http({
				method: 'PUT',
				url: configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/user-company/"+id,
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






	}

});