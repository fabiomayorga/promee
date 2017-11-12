(function() {
    var app = angular.module('configuracionControllers', ['angular.morris', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngRoute', 'colorpicker.module' ,'ekosaveAdministracion'])

    .controller('configuracionMainController', function($scope, $mdDialog, $mdMedia, $location, $localStorage, $http , $mdToast, $timeout, $mdSidenav, administracionUsuarios, configuracionServidor, parametros) {

        $scope.cambiarEstado(); 

        $scope.formulario = {};
        $scope.formulario.primaryColor = "";
        $scope.formulario.secondaryColor = "";
        $scope.formulario.domain_name = "";

        var verbo ;

        $scope.validImg = true;


        parametros.traerConfiguracion($scope.profile.parentProperty.companyId).then(function(respuesta){


            if(respuesta.status == 200 || respuesta.status == 201 || respuesta.status == 204){


                if(respuesta.data == ""){
                    $scope.formulario.primaryColor = "";
                    $scope.formulario.secondaryColor = "";
                    $scope.formulario.domain_name = "";

                    document.getElementById('domain').classList.remove("noVisible");
                    document.getElementById('domain').classList.add("visible");

                    verbo='POST';
                    
                }
                else{
                    $scope.formulario.primaryColor = respuesta.data.primary_color;
                    $scope.formulario.secondaryColor = respuesta.data.secondary_color;
                    $scope.formulario.domain_name = respuesta.data.domain_name;
                    $scope.validate=1;

                    verbo='PUT';
                }
            }
            else{
                $scope.mensajes.parentProperty("Error al procesar la solicitud enviada. Intentalo de nuevo mas tarde: ERROR: "+respuesta.data.message, "Aceptar", 3000);
            }

        });

        $scope.guardarConfiguracion = function(){

            var data = {
                "domain_name": $scope.formulario.domain_name,
                "primary_color": $scope.formulario.primaryColor,
                "secondary_color": $scope.formulario.secondaryColor,

            };

            console.log(data);
            parametros.guardarConfiguracion($scope.profile.parentProperty.companyId, data, verbo).then(function(respuesta){

                if(respuesta.status == 200 || respuesta.status == 201 || respuesta.status == 204){
                    $scope.mensajes.parentProperty("configuración gurdada satisfactoriamente.", "Aceptar", 3000);
                }
                else{
                    $scope.mensajes.parentProperty("Error al procesar la solicitud enviada. Intentalo de nuevo mas tarde: ERROR: "+respuesta.data.message, "Aceptar", 3000);
                }

            });

        }

        $scope.resetRBGAColor = function() {
            $scope.rgbaPicker = {
                primaryColor: 'rgb(255,255,255, 0.25)',
                secondaryColor:'rgb(255,255,255, 0.25)'
            };
        };



        $scope.modalLogotipo = function(ev, i) {

            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                controller:'LogoController',
                templateUrl: 'views/configuracion/modalLogotipo.html',
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





    })

    .controller('LogoController', function($scope, $mdDialog, $mdMedia, $location, $localStorage, $http , $mdToast, $timeout, $mdSidenav, administracionUsuarios, configuracionServidor) {

        $scope.img = "img/avatar.png";

        $scope.uploadFile = function(files) {

            console.log(files);
            $scope.fd = new FormData();

            if(files[0].type=="image/jpeg" || files[0].type=="image/png" || files[0].type=="image/jpe"){
                var file = files[0];
                $scope.fd.append('logo', files[0]);
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);
                $scope.validImg = false;
            }
            else{
                $scope.mensajes.parentProperty("Debes subir un archivo en formato PNG, JPG o JPGE .", "Aceptar", 3000);
                $scope.validImg =true;
                $scope.img = "img/avatar.png";
            }
        };


        $scope.sendImg = function(){

            console.log($scope.profile.parentProperty.id);
            console.log($scope.fd);

            var url = configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoEmpresa+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/configuration-image/"+$scope.profile.parentProperty.companyId;
            $http.post(url,$scope.fd,
            {  
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).then(function (respuesta){

                $scope.mensajes.parentProperty("Logo Actualizado", "Aceptar", 3000);
                $scope.profile.parentProperty.companyImg = $scope.profile.parentProperty.companyImg + '?decache=' + Math.random();
                $scope.cerrar();
            },function (error){
                console.log(error);
            });
        }

        $scope.imageIsLoaded = function (e) {
            $scope.$apply(function () {
                $scope.img = e.target.result;            
            });
        }
    })

})();