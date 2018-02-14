 $(document).ready(function(){
        /**
         * Funcion para añadir una nueva columna en la tabla
         */
         var vamosen=1;
        $("#add").click(function(){
            // Obtenemos el numero de filas (td) que tiene la primera columna
            // (tr) del id "tabla"
            var tds=$("#tabla tbody tr:first td").length;
            // Obtenemos el total de columnas (tr) del id "tabla"
            var trs=$("#tabla tbody tr").length;
            var nuevaFila="<tr>";
          
                // añadimos las columnas
                nuevaFila+='<td><input type="" name="producto['+vamosen+'][descripcion]" class="form-control modi"></td>'+
                            '<td><input type="" name="producto['+vamosen+'][unidad_comercial]" class="form-control modi"></td>'+
                            '<td><input type="" name="producto['+vamosen+'][cantidad_pedida]" class="form-control modi"></td>'+
                            '<td><input type="" name="producto['+vamosen+'][cantidad_despachada]" class="form-control modi"></td>'+
                            '<td><input type="" name="producto['+vamosen+'][valor_unitario]" class="form-control modi"></td>'+
                            '<td><input type="" name="producto['+vamosen+'][valor_iva]" class="form-control modi"></td>';
          
            // Añadimos una columna con el numero total de columnas.
            // Añadimos uno al total, ya que cuando cargamos los valores para la
            // columna, todavia no esta añadida
          
            nuevaFila+="</tr>";
            $("#tabla").append(nuevaFila);
            vamosen++;
        });
 
        /**
         * Funcion para eliminar la ultima columna de la tabla.
         * Si unicamente queda una columna, esta no sera eliminada
         */
        $("#del").click(function(){
            // Obtenemos el total de columnas (tr) del id "tabla"
            var trs=$("#tabla tbody tr").length;
            if(trs>1)
            {
                // Eliminamos la ultima columna
                $("#tabla  tbody tr:last").remove();
                vamosen--;
            }
        });
    });

  function modal(id,codigo) {
     $("#codigo").html(codigo);
     $("#aprobar").attr("href", _root_+"cotizacion/solicitud/aprobar/"+id);
 }
   function modal2(id,codigo) {
     $("#codigo2").html(codigo);
     $("#aprobar2").attr("href", _root_+"cotizacion/solicitud/noaprobar/"+id);
 }