(function() {
    var app = angular.module('perfilControllers', ['angular.morris', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngRoute' ,'ekosaveAdministracion'])

    .controller('perfilMainController', function($scope, $mdDialog, $mdMedia, $location, $localStorage, $http , $mdToast, $timeout, $mdSidenav, administracionUsuarios, configuracionServidor) {

        $scope.cambiarEstado(); 
        $scope.validImg = true;

        $scope.modalImg = function(ev, i) {

            console.log(i);
            $scope.terminosMostrar=i;

            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                controller:'imgController',
                templateUrl: 'views/perfil/modalImg.html',
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

        $scope.formulario = {};
        $scope.formulario.name = $scope.profile.parentProperty.name;
        $scope.formulario.phone = $scope.profile.parentProperty.phone;




        $scope.formularioPassword={};


        $scope.validarPassword = function(){
            if ($scope.formularioPassword.password != $scope.formularioPassword.password2) {

                $scope.formPassword.password2.$error.igual = true;
                $scope.formPassword.$valid = false;
                $scope.formPassword.password2.$invalid=true;

            }
            else {
                $scope.formPassword.password2.$error.igual = false;
                $scope.formPassword.password2.$invalid=false;

            }
        }


        $scope.validarCambio = function(){
            if ($scope.formularioPassword.password == $scope.formularioPassword.actual) {

                $scope.formPassword.password.$error.igual = true;
                $scope.formPassword.$valid = false;
                $scope.formPassword.password.$invalid=true;

            }
            else {
                $scope.formPassword.password.$error.igual = false;
                $scope.formPassword.password.$invalid=false;

            }
        }


        $scope.validarTelefono= function(){

            if ($scope.formulario.phone.length < 6) {

              $scope.formularioForm.phone.$error.validarTel = true;
              $scope.formularioForm.$valid = false;
              $scope.formularioForm.phone.$invalid=true;

          }
          else {
              $scope.formularioForm.phone.$error.validarTel = false;
              $scope.formularioForm.phone.$invalid=false;

          }

      }

      $scope.cambioActivo = false;

      $scope.mostrarCambioPassword = function(){
        $scope.mostrarFormulario = true;
        document.getElementById('divPassword').classList.add("formPassActivo");
        $scope.cambioActivo = true;
    }

    $scope.cancelarPassword = function(){
        $scope.mostrarFormulario = false;
        document.getElementById('divPassword').classList.remove("formPassActivo");
        $scope.cambioActivo = false;
    }

    $scope.cambiarPassword = function(){

        var data = {oldPassword: $scope.formularioPassword.actual ,newPassword: $scope.formularioPassword.password , confirmPassword: $scope.formularioPassword.password2}

        administracionUsuarios.cambiarPassword($scope.profile.parentProperty.id, data).then(function(respuesta){
            console.log(respuesta);

            if(respuesta.status == 200 || respuesta.status == 201 || respuesta.status == 204){
                $scope.mensajes.parentProperty("Contraseña editada satisfactoriamente.", "Aceptar", 3000);
                $scope.cerrar();
                $scope.cancelarPassword();
            }
            else{
                $scope.mensajes.parentProperty("Error al procesar la solicitud enviada. Intentalo de nuevo mas tarde: ERROR: "+respuesta.data.message, "Aceptar", 3000);
            }

        });

    }


    $scope.guardarCambios = function(){

        var data = {name: $scope.formulario.name ,phone: $scope.formulario.phone }

        administracionUsuarios.cambiarDatos($scope.profile.parentProperty.id, data).then(function(respuesta){
            console.log(respuesta);

            if(respuesta.status == 200 || respuesta.status == 201 || respuesta.status == 204){
                $scope.mensajes.parentProperty("Perfil editado satisfactoriamente.", "Aceptar", 3000);
                $scope.cerrar();
                $scope.cancelarPassword();
            }
            else{
                $scope.mensajes.parentProperty("Error al procesar la solicitud enviada. Intentalo de nuevo mas tarde: ERROR: "+respuesta.data.message, "Aceptar", 3000);
            }

        });

    }


})

.controller('imgController', function($scope, $mdDialog, $mdMedia, $location, $localStorage, $http , $mdToast, $timeout, $mdSidenav, administracionUsuarios, configuracionServidor) {

    $scope.img = "img/avatar.png";


    $scope.uploadFile = function(files) {

        console.log(files);
        $scope.fd = new FormData();

        if(files[0].type=="image/jpeg" || files[0].type=="image/png" || files[0].type=="image/jpe"){
            var file = files[0];
            $scope.fd.append('image', files[0]);
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

        var url = configuracionServidor.protocolo+configuracionServidor.servidor+configuracionServidor.puertoLead+"/"+configuracionServidor.nombreApi+"/"+configuracionServidor.version+"/users-company-image/"+$scope.profile.parentProperty.id;
        $http.post(url,$scope.fd,
        {  
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).then(function (respuesta){
         $scope.mensajes.parentProperty("Imagen de perfil actualizada", "Aceptar", 3000);
         $scope.profile.parentProperty.imgPerfil = $scope.profile.parentProperty.imgPerfil + '?decache=' + Math.random();
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


    $scope.guardarImg = function(){
        $scope.data = 'none';
        $scope.add = function(){


          var f = document.getElementById('file').files[0],
          r = new FileReader();
          r.onloadend = function(e){
            $scope.data = e.target.result;
        }
        r.readAsBinaryString(f);
        $scope.guardarImagen=false;
    }


}


})

})();