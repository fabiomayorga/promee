$(document).ready(function() {

    $("#buscar").autocomplete({
        source: function(request, response) {
            $.ajax({
                type: "POST",
                url: _root_ + "admin/rol/consultaAjax",
                dataType: "json",
                data: {
                    valor: request.term
                },
                success: function(data) {
                    response($.map(data, function(item) {
                        return {
                            value: item.rol_nombre,
                            label: item.rol_nombre,
                            key: item.rol_key
                        };
                    }));
                }
            });
        },
        minLength: 2,
        select: function(event, ui) {
            window.location = _root_ + "admin/rol/detalles/" + ui.item.key;
        },
        open: function() {
         //   $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
         //   $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
$('#modificar').on('show', function () {
//aquyi va mandar el valor de la llave y de nombre
 

});
	
	
	
	
});

function datos(x,y)
{
	$("#key").val(x);
	$("#nombreedit").val(y);
	
}


