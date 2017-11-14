angular.module('toolsFactory', [])

.factory('tools', function($q,$timeout, $http, $localStorage , $location, configuracionServidor ){

	return {

		objetualizer: function(data){

			var object = {};

			for(key in data){
				object[data[key]]= true;
			}

			return object;

		},

		idFiker : function(data) {

			for(key in data){
				var tmp = data[key];
				tmp.index = key;
				data[key]= tmp;
			}

			return data;
		},

		randomizer: function  (sourceArray) {

			for (var i = 0; i < sourceArray.length - 1; i++) {
				var j = i + Math.floor(Math.random() * (sourceArray.length - i));

				var temp = sourceArray[j];
				sourceArray[j] = sourceArray[i];
				sourceArray[i] = temp;  


			}

			return sourceArray;

		}


	}

});