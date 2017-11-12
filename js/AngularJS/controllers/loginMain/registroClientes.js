(function() {
    var app = angular.module('registroClientesControllers', ['angular.morris', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngRoute' ,'ekosaveAdministracion'])

    .controller('registroController', function($scope, $mdDialog, $mdMedia, $location, administracionUsuarios ,$mdToast, $timeout, $mdSidenav, georeferencia, terminos ,paisesList ) {

        $scope.mensajes.parentProperty("La empresa desde la cual intentas iniciar sesión no existe. Ve a la web de Ekosave para más información.", "Ir a la web Ekosave", 16000);

    })

    .controller('terminosController', function($scope, $mdDialog, $mdMedia, $location, administracionUsuarios ,$mdToast, $timeout, $mdSidenav ) {

    })


})();