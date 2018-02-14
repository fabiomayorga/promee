
<style type="text/css">
    .dataTables_filter{
            margin-left: 56%;
    }
.pagination{
            margin-left: 60%;
    }
</style>
<form id="form1" class="panel panel-default">
	<div class="panel-heading">

	</div>


   <div class="panel-body">
    <table class="table  table-hover table-border" align="" id="table-index">
        <thead> 
            <tr>
                <th>Requisición</th>
                <th>Realizado por</th>
                <th>Proveedor</th>
                <th>Fecha limite</th>
                
                <th>Usuario</th>
               
                <th colspan=""></th>
            </tr>
        </thead> 
        <tbody> 
        {foreach $datos as $dato}
            <tr>
                <td>{$dato.codigo}</td>
                <td>{$dato.realizado_por}</td>
                <td>{$dato.proveedor}</td>
                <td>{$dato.fecha_limite}</td>
                <td>{$dato.usuario}</td>
                <td class="opcion" align="right">
                    <button class="btn  btn-primary btn-sm" onclick="modal({$dato.id},{$dato.codigo});" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" >Aprobar</button>
                    <button class="btn  btn-primary btn-sm" onclick="modal2({$dato.id},{$dato.codigo});" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal2" >No aprobar</button>
                    <a class="btn  btn-danger btn-sm" href="{$_layoutParams.root}libs/pdf/more.php?id={$dato.id}">PDF</a>
				 </td>
            </tr>
        {/foreach}
        </tbody>
    </table>
  </div>	  
	
	
</form>


<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">  <i class="glyphicon glyphicon-info-sign"></i> Verificación</h4>
      </div>
      <div class="modal-body" style="text-align: center">
        <p>Deseas aprobar esta solicitud  <strong id="codigo"></strong></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cerrar</button>
        <a id="aprobar" type="button" class="btn btn-primary btn-sm">Aprobar</a>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="modal fade" id="myModal2" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">  <i class="glyphicon glyphicon-info-sign"></i> Verificación</h4>
      </div>
      <div class="modal-body" style="text-align: center">
        <p>Deseas no aprobar esta solicitud  <strong id="codigo2"></strong></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cerrar</button>
        <a id="aprobar2" type="button" class="btn btn-primary btn-sm" >No Aprobar</a>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->