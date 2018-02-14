<div class="alert alert-success">
  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  <strong>Esta a pocos pasos!</strong>  solo contesta las siguientes preguntas para poder seguir con el proceso de seleccion...
</div> 
<form id="" method="post" action="{$_layoutParams.root}admin/usuario/perfil">
  <input type="hidden" name="enviar" class="form-control" value="1" required >
 <div class="panel panel-default">
 	<div class="panel-heading">
            
                <h4 class="panel-title">Información personal</h4>
                <p></p>
              </div>
    <div class="panel-body">

                <div class="form-group">
                  <label class="col-sm-2 control-label">Genero </label>
                  <div class="col-sm-4">
                    <select  class="form-control input-sm mb15"  name='genero' id="genero" required="true" style="width: 100%;">
                    <option value="">Elija su genero</option>
                    {foreach $genero as $gen}
                        <option value="{$gen.gen_key}" {if isset($temporal.tipoDocumento)}{if $temporal.tipoDocumento==$nombre.tdo_key}selected{/if}{/if}>{$gen.gen_nombre}</option>
                    {/foreach}
                  </select>
                  </div>
               
                  <label class="col-sm-2 control-label">Fecha de nacimiento </label>
                  <div class="col-sm-4">
                    <input type="text" name="Edad" id="edad" class="form-control" placeholder="AAAA/MM/DD" required >
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Nombre </label>
                  <div class="col-sm-4">
                    <input type="text" name="nombre" class="form-control" placeholder="" required >
                  </div>
               
                  <label class="col-sm-2 control-label">Apellido </label>
                  <div class="col-sm-4">
                    <input type="text" name="apellido" class="form-control" placeholder="" required >
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="col-sm-2 control-label">Tipo documento</label>
                  <div class="col-sm-4">
                   <select  class="form-control input-sm mb15"  name='tipoDocumento' id="tipoDocumento" required="true" style="width: 100%;">
                    <option value="">Elija el tipo de documento</option>
                    {foreach $tDocumento as $nombre}
                        <option value="{$nombre.tdo_key}" >{$nombre.tdo_nombre}</option>
                    {/foreach}
                  </select>
                  </div>
                
                  <label class="col-sm-2 control-label"># de documento </label>
                  <div class="col-sm-4">
                    <input class="form-control" name="documento" placeholder="1116000000" value="{$usuario[0].usu_num_documento}" required>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label">Educación </label>
                  <div class="col-sm-4">
                    <select  class="form-control input-sm mb15"  name='niveleducativo' id="niveleducativo" required="true" style="width: 100%;">
                    <option value="">Elija su educacion</option>
                    {foreach $educacion as $edu}
                        <option value="{$edu.edu_key}" >{$edu.edu_nombre}</option>
                    {/foreach}
                                    
                  </select>
                  </div>

                </div>
     </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Información Familiar</h4>
        <p></p>
    </div>
    <div class="panel-body">
        <div class="form-group">
          <label class="col-sm-2 control-label">Estado civil</label>
          <div class="col-sm-4">
            
            <select  class="form-control input-sm mb15"  name='civil' id="civil" required="true" style="width: 100%;">
                    <option value="">Elija estado civil</option>
                     {foreach $ecivil as $civil}
                        <option value="{$civil.ecv_key}" >{$civil.ecv_nombre}</option>
                    {/foreach}               
                  </select>
          </div>
       
          <label class="col-sm-2 control-label">Personas a cargo </label>
          <div class="col-sm-4">
            <select  class="form-control input-sm mb15"  name='personascargo' id="personascargo" required="true" style="width: 100%;">
                    <option value="">Elija personas a cargo</option>
                     {foreach $personascargo as $car}
                        <option value="{$car.car_key}" >{$car.car_nombre}</option>
                    {/foreach}    
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Estrato Socioeconómico</label>
          <div class="col-sm-4">
            <select  class="form-control input-sm mb15"  name='estrato' id="estrato" required="true" style="width: 100%;">
                    <option value="">Elija su estrato</option>
                     {foreach $estrato as $eco}
                        <option value="{$eco.eco_key}" >{$eco.eco_nombre}</option>
                    {/foreach}    
            </select>
          </div>
       
          <label class="col-sm-2 control-label"> Tipo de vivenda </label>
          <div class="col-sm-4">
            <select  class="form-control input-sm mb15"  name='vivenda' id="vivenda" required="true" style="width: 100%;">
                    <option value="">Elija su tipo de vivienda</option>
                     {foreach $vivienda as $vivi}
                        <option value="{$vivi.viv_key}" >{$vivi.viv_nombre}</option>
                    {/foreach}    
            </select>
          </div>

          
     
        </div>      
     </div>
  </div>

   <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Vehiculo</h4>
        <p></p>
    </div>
    <div class="panel-body">
        <div class="form-group">
          <label class="col-sm-2 control-label">Tiene vehiculo</label>
          <div class="col-sm-4">
          <select  class="form-control input-sm mb15"  name='tipovehiculo' id="tipovehiculo" required="true">
                    <option value="">Elija el tipo de vehiculo</option>
                     {foreach $vehiculo as $veh}
                        <option value="{$veh.veh_key}" >{$veh.veh_nombre}</option>
                    {/foreach}   
                   
                  </select>
          </div>
       
          <label class="col-sm-2 control-label">Tipo de vehiculo </label>
          <div class="col-sm-4">
            <input type="text" name="tipovehiculo2" id="tipovehiculo2"  class="form-control" placeholder="" required >
          </div>
        </div>

        <div class="form-group">
          
          <label class="col-sm-2 control-label">Placa </label>
          <div class="col-sm-4">
            <input type="text" name="placa" id="placa"  class="form-control" placeholder="" required >
          </div>
        </div>   
     </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Información laboral</h4>
        <p></p>
    </div>
    <div class="panel-body">
        <div class="form-group">
          <label class="col-sm-2 control-label">Estado laboral</label>
          <div class="col-sm-4">
            <select  class="form-control input-sm mb15"  name='estadolaboral' id="estadolaboral" required="true">
                    <option value="">Elija estado laboral</option>
                    {foreach $estadolaboral as $elab}
                        <option value="{$elab.elab_key}" >{$elab.elab_nombre}</option>
                    {/foreach}   
            </select>
          </div>
       
          <label class="col-sm-2 control-label">Tipo de trabajo</label>
          <div class="col-sm-4">
            <select  class="form-control input-sm mb15"  name='tipotrabajo' id="tipoDocumento" required="true">
                    <option value="">Elija tipo de trabajo</option>
                   {foreach $tipotrabajo as $tact}
                        <option value="{$tact.tact_key}" >{$tact.tact_nombre}</option>
                    {/foreach}   
            </select>
          </div>
        </div>   

        <div class="form-group">
          <label class="col-sm-2 control-label">Tipo de contrato</label>
          <div class="col-sm-4">
            <select  class="form-control input-sm mb15"  name='tipocontrato' id="tipocontrato" required="true">
                    <option value="">Elija tipo de trabajo</option>
                     {foreach $tipocontrato as $tcont}
                        <option value="{$tcont.tcont_key}" >{$tcont.tcont_nombre}</option>
                    {/foreach}   
            </select>
          </div>
       
          <label class="col-sm-2 control-label">Sueldo </label>
          <div class="col-sm-4">
            <input type="text" name="sueldo" class="form-control" placeholder="" required >
          </div>
        </div>   
        <div class="form-group">
          <label class="col-sm-2 control-label">Antiguedad</label>
          <div class="col-sm-4">
             <select  class="form-control input-sm mb15"  name='antiguedad' id="antiguedad" required="true">
                    <option value="">Elija antiguedad</option>
                    {foreach $antiguedad as $antg}
                        <option value="{$antg.antg_key}" >{$antg.antg_nombre}</option>
                    {/foreach}   
            </select>
          </div>
       
          <label class="col-sm-2 control-label">Empresa </label>
          <div class="col-sm-4">
            <input type="text" name="empresa" class="form-control" placeholder="" required >
          </div>
        </div>  
        <div class="form-group">
          <label class="col-sm-2 control-label">Cargo</label>
          <div class="col-sm-4">
            <input type="text" name="cargo" class="form-control" placeholder="" required >
          </div>
       
          <label class="col-sm-2 control-label">Teléfono </label>
          <div class="col-sm-4">
            <input type="text" name="telefonoe" class="form-control" placeholder="" required >
          </div>
        </div>  
        <div class="form-group">
          <label class="col-sm-2 control-label">Dirección</label>
          <div class="col-sm-10">
            <input type="text" name="direcione" class="form-control" placeholder="" required >
          </div>
       
          
        </div>  
     </div>
  </div>

  <!-- datos -->
  <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Información adicional</h4>
        <p>Activos-Pasivos</p>
    </div>
    <div class="panel-body">
        
        <!-- Activos  -->
        
        
        <div class="form-group">
          <label class="col-sm-2 control-label">Valor de la vivienda</label>
          <div class="col-sm-4">
            <input type="text" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" name="valorvivienda" class="form-control" value="0" placeholder="" required >
          </div>
       
          <label class="col-sm-2 control-label">Valor del vehiculo</label>
          <div class="col-sm-4">
            <input type="text" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" name="valorvehiculo" class="form-control" value="0" placeholder="" required >
          </div>
        </div>   

        <div class="form-group">
          <label class="col-sm-2 control-label">Otros activos</label>
          <div class="col-sm-4">
            <input type="text" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" name="otrosactivos" class="form-control" value="0" placeholder="" required >
          </div>
        </div>  



        <div class="form-group">


          <label class="col-sm-2 control-label">Obligaciones con bancos</label>
          <div class="col-sm-4">
            <input type="text" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" name="obligacionesbancos" class="form-control" value="0" placeholder="" required >
          </div>
          <label class="col-sm-2 control-label">Cuota bancarias</label>
          <div class="col-sm-4">
            <input type="text" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" name="cuotabancaria" class="form-control" value="0" placeholder="" required >
          </div>
        </div>  

        <div class="form-group">
          <label class="col-sm-2 control-label">Otros pasivos</label>
          <div class="col-sm-4">
           <input type="text" name="otrospasivos" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" class="form-control" value="0" placeholder="" required >        
          </div>
          
        </div>  

        <div class="form-group">
          <label class="col-sm-2 control-label">Otros ingresos</label>
          <div class="col-sm-4">
           <input type="text" name="otrosingrsos" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" class="form-control" value="0" placeholder="" required >        
          </div>
          <label class="col-sm-2 control-label">Cupo targeta  de crédito</label>
          <div class="col-sm-4">
           <input type="text" name="tarjetadecredito" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" class="form-control" value="0" placeholder="" required >        
          </div>
        </div>  

        <div class="form-group">
          <label class="col-sm-2 control-label">Gastos</label>
          <div class="col-sm-4">
           <input type="text" name="gastos" onkeyup="puntitos(this,this.value.charAt(this.value.length-1))" class="form-control" value="0" placeholder="" required >        
          </div>
          <label class="col-sm-2 control-label">Otros créditos</label>
          <div class="col-sm-4">
           <input type="text" name="otroscreditos" conkeyup="puntitos(this,this.value.charAt(this.value.length-1))"lass="form-control"  value="0" placeholder="" required >        
           
          </div>
        </div>  
        
        
     </div>
  </div>
<!-- Bancos -->
<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Información bancaria</h4>
        
    </div>
    <div class="panel-body">  

        <div class="form-group">
          <label class="col-sm-2 control-label">Banco</label>
          <div class="col-sm-4">
           <select  class="form-control input-sm mb15"  name='banco' id="banco" required="true">
                    <option value="">Elija banco</option>
                    {foreach $bancos as $ban}
                        <option value="{$ban.ban_key}" >{$ban.ban_nombre}</option>
                    {/foreach}   
            </select>
          </div>
          <label class="col-sm-2 control-label">N&uacute;mero de cuenta</label>
          <div class="col-sm-4">
           <input type="text" name="numerocuenta" id="numerocuenta" class="form-control" value="0" placeholder="" required >        
          </div>
        </div>  

        
        
     </div>
  </div>



   <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Referencias comerciales</h4>
        <p></p>
    </div>
    <div class="panel-body">
        
        <div class="form-group">
          <label class="col-sm-2 control-label">Nombre</label>
          <div class="col-sm-4">
            <input type="text" name="nombrer1" class="form-control" placeholder="" required >
          </div>
       
          <label class="col-sm-2 control-label">Teléfono</label>
          <div class="col-sm-4">
            <input type="text" name="telefonor1" class="form-control" placeholder="" required >
          </div>
        </div>  
        <div class="form-group">
          <label class="col-sm-2 control-label">Empresa - cargo</label>
          <div class="col-sm-10">
            <input type="text" name="direcionr1" class="form-control" placeholder="" required >
          </div>
        </div>  

        <hr>
         <div class="form-group">
          <label class="col-sm-2 control-label">Nombre</label>
          <div class="col-sm-4">
            <input type="text" name="nombrer2" class="form-control" placeholder="" required >
          </div>
       
          <label class="col-sm-2 control-label">Teléfono</label>
          <div class="col-sm-4">
            <input type="text" name="telefonor2" class="form-control" placeholder="" required >
          </div>
        </div>  
        <div class="form-group">
          <label class="col-sm-2 control-label">Empresa - cargo</label>
          <div class="col-sm-10">
            <input type="text" name="direcionr2" class="form-control" placeholder="" required >
          </div>
        </div>  


     </div>
        <div class="panel-footer">
            <div class="row">
              <div class="col-sm-12 ">
                <button type="submit" class="btn btn-success pull-right">Guardar datos</button>
                
              </div>
            </div>
          </div>
  </div>


</form>