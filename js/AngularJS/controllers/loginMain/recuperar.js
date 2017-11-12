 (function() {
    var app = angular.module('recuperarControllers', ['angular.morris', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ekosaveAdministracion'])

    .controller('recuperarMainController', function($scope, $mdDialog, $mdMedia, $location, $mdToast, $timeout, $mdSidenav) {

        console.log("otro aparte");

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
        });


        $scope.goRecuperar = function(ir) {
            $scope.myDate = new Date();
            $scope.isOpen = false;
            console.log(ir);
            $location.path("recuperar");
        }
        $scope.goRegistro = function(ir) {
            console.log(ir);
            $location.path("registro");
        }
        $scope.prueba.parentProperty = "none";
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




        $scope.recuperarContrasena = function() {

         

        }

    })


})();