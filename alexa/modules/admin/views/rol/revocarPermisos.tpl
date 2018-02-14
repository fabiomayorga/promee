
<form name="form1" method="POST" enctype="multipart/form-data" action="{$_layoutParams.root}admin/rol/revocarPermiso/{$datos.rol_key}" class="panel panel-default">

    {$i="1"}

    <input type="hidden" value="1" name="guardar"/>
    <div class="panel-heading">
        <b>Seleccione los permisos a revocar para el rol: {$datos.rol_nombre}</b>
    </div>
    <div class="panel-body">
    <table style="width: 100%">

            <tr>
            {foreach $permisos as $dato}
                <td>
                    <table>
                    <tr>
                        <td><input type="checkbox" name="permiso{$i}" value="{$dato.pxr_key}"/></td>
                        <td ><span style="margin-top:20px;">{$dato.per_modulo}-{$dato.per_nombre}</span></td>
                    <tr>
                    </table>
                </td>
                {if ($i%3)==0}   
            </tr>
            <tr>
                {/if}
                {$i=$i+"1"}
            {/foreach}
        </tr>
    </table>
    <input type="hidden" value="{$i}" name="totalPermisos"/>
    <br>
    <p class="pull-right">
        <button class="btn btn-primary"><i class="icon-ok"></i> Revocar</button>

        <a href="{$_layoutParams.root}admin/rol/detalles/{$datos.rol_key}" class="btn btn-danger">
            Cancelar
        </a>

    </p>
</div>
</form>

