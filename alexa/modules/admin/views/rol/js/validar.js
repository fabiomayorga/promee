$(document).ready(function(){
    $('#form1').validate({
        rules:{
            nombre:{
                required: true,
                maxlength: 75
            }
        },
        messages:{
            nombre: {
                required: "Dato Obligatorio",
                maxlength: "maximo 75 caracteres"
            }
        }
    });
});
