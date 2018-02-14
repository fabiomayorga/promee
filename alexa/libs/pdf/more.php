<?php
require_once 'dompdf/dompdf_config.inc.php';


$link = mysql_connect('localhost', 'root', 'root')
    or die('No se pudo conectar: ' . mysql_error());

mysql_select_db('sgi') or die('No se pudo seleccionar la base de datos');

// Realizar una consulta MySQL
$query = 'SELECT solicitud.*,usuario.*
          FROM solicitud 
          inner join usu as usuario on usuario.usu_key= solicitud.id_usu
          where id='.$_GET['id'];
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
$solicitud = mysql_fetch_array($result, MYSQL_ASSOC);


$query = 'SELECT producto.*
          FROM producto 
          where id_solicitud='.$solicitud['id'];
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
        array_push($productos,$line);
}

$solicitud['productos']=$productos;


$solicitud['entrega']="";
if ($solicitud['id_usu_entrega']!=0) {
    $query = 'SELECT * from usu  
          where  usu.usu_key= '.$solicitud['id_usu_entrega'];
    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    $entrega = mysql_fetch_array($result, MYSQL_ASSOC);
    $solicitud['entrega']=$entrega['usu_nombre']." ".$entrega['usu_apellido'];
}

$productos=array();


        $porciones = explode("-", $solicitud['fecha_pedido']);
        $solicitud['fpdia']=$porciones[2];
        $solicitud['fpmes']=$porciones[1];
        $solicitud['fpano']=$porciones[0];
        $porciones = explode("-", $solicitud['fecha_limite']);
        $solicitud['fedia']=$porciones[2];
        $solicitud['femes']=$porciones[1];
        $solicitud['feano']=$porciones[0];

// Liberar resultados
mysql_free_result($result);

// Cerrar la conexión
mysql_close($link);


        # Contenido HTML del documento que queremos generar en PDF.
        $html='<!DOCTYPE html>
                <html>
                <head>
                        <meta charset="utf-8">
                        <title></title>
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <link rel="stylesheet" type="text/css" href="">
                </head>

                <body style="font-size: 10px">
                        <table style="table-layout: fixed; width: 100%;">
                                <tr>
                                        <td style="width: 80%">
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                <tr>
                                                                        <td style="text-align: center;" colspan="3">SISTEMA DE GESTION INTEGRADO </td>
                                                                </tr>
                                                                <tr>
                                                                        <td style="text-align: center;" colspan="3">   REQUISICION COMPRAS DE CONTADO CAJA MENOR</td>
                                                                </tr>
                                                                <tr>
                                                                        <td style="text-align: center;" colspan="">   VERSION<br>1.0 </td>
                                                                        <td style="text-align: center;">CODIGO<br>SGI-CO-R-14</td>
                                                                        <td style="text-align: center;">PAGINA</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                        <td style=" border: 1px solid black;" >
                                                <div style="text-align: center;">
                                                        <img style="width:1000%;" src="img/logo.png">
                                                </div>
                                        </td>
                                </tr>
                        </table>
                        
                        <br>
                        <table style="table-layout: fixed; width: 100%; border-collapse: collapse;" border="1">
                                <tr>
                                        <td style=" padding: 5px;background-color: #ededed">
                                                RECURSOS MATERIALES: Son todos los materiales, herramientas, equipos, componentes, que su gesti&oacute;n sea realizada por el proceso de Gesti&oacute;n de Recursos Materiales y Servicios
                                        </td>                                   
                                </tr>
                        </table>
                        
                        <br>
                        <table style="table-layout: fixed; width: 100%;">
                                <tr>
                                        <td style="width: 60%">
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 30%" colspan=""> FECHA DE PEDIDO: </td>
                                                                        <td style="text-align: center;background-color: #ededed">DIA</td>
                                                                        <td style="text-align: center;">'.$solicitud['fpdia'].'</td>
                                                                        <td style="text-align: center;background-color: #ededed">MES</td>
                                                                        <td style="text-align: center;">'.$solicitud['fpmes'].'</td>
                                                                        <td style="text-align: center;background-color: #ededed">AÑO</td>
                                                                        <td style="text-align: center;">'.$solicitud['fpano'].'</td>
                                                                </tr>
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 30%" colspan=""> FECHA LIMITE DE ENTREGA: </td>
                                                                        <td style="text-align: center;background-color: #ededed">DIA</td>
                                                                        <td style="text-align: center;">'.$solicitud['fedia'].'</td>
                                                                        <td style="text-align: center;background-color: #ededed">MES</td>
                                                                        <td style="text-align: center;">'.$solicitud['femes'].'</td>
                                                                        <td style="text-align: center;background-color: #ededed">AÑO</td>
                                                                        <td style="text-align: center;">'.$solicitud['feano'].'</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                        <td style="width: 20%" >
                                                
                                        </td>
                                        <td style=" width: 20%" >
                                                <table style="table-layout: fixed; width: 100%;" border="1">
                                                        <tbody>
                                                                <tr>
                                                                        <td style="text-align: center;background-color: #ededed;" >REQUISICI&Oacute;N No.</td>
                                                                </tr>
                                                                <tr>
                                                                        <td style="text-align: center;" > '.$solicitud['codigo'].' </td>
                                                                </tr>
                                                                
                                                        </tbody>
                                                </table>
                                        </td>
                                </tr>
                        </table>
                        <br>
                        <table style="table-layout: fixed; width: 100%;">
                                <tr>
                                        <td style="width: 45%">
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 40%" colspan=""> REALIZADA POR:</td>
                                                                        <td style="text-align: center;">'.$solicitud['realizado_por'].'</td>
                                                                        
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                        <td style="width: 10%" >
                                                
                                        </td>
                                        <td style=" width: 45%" >
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 40%" colspan="">CONTRATO O AREA:</td>
                                                                        <td style="text-align: center;">'.$solicitud['contrato_area'].'</td>
                                                                        
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                </tr>
                        </table>
                        <br>
                        <table style="table-layout: fixed; width: 100%;">
                                <tr>
                                        <td style="width: 40%">
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 40%" colspan=""> CENTRO DE COSTO:</td>
                                                                        <td style="text-align: center;">'.$solicitud['centro_costo'].'</td>
                                                                        
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                
                                        <td style=" width: 60%" >
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 40%" colspan="">PROVEEDOR:</td>
                                                                        <td style="text-align: center;">'.$solicitud['proveedor'].'</td>
                                                                        
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                </tr>
                        </table>
                        <br>
                        
                        <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                <tbody>
                                        
                                        <tr>
                                                <td style="text-align:center; ;background-color: #ededed;width: 60%" colspan=""> DESCRIPCION DE MATERIALES, HERRAMIENTAS, INSUMOS, EPP, EQUIPOS Y/O MAQUINARIA</td>
                                                <td style="text-align:center; ;background-color: #ededed;width: 10%" colspan=""> UNIDAD COMERCIAL</td>
                                                <td style="text-align:center; ;background-color: #ededed;width: 10%" colspan=""> CANTIDAD PEDIDA</td>
                                                <td style="text-align:center; ;background-color: #ededed;width: 10%" colspan=""> CANTIDAD DESPACHADA</td>
                                                <td style="text-align:center; ;background-color: #ededed;width: 10%" colspan=""> VALOR UNITARIO</td>
                                                <td style="text-align:center; ;background-color: #ededed;width: 10%" colspan=""> VALOR TOTAL IVA INCLUIDO</td>
                                        </tr>';
                                        $cantidad=0;
                        for ($i=0; $i < count($solicitud['productos']); $i++) { 
                                 $html=$html.'  <tr>
                                                <td style="width: 60%" colspan="">'.$solicitud['productos'][$i]['descripcion'].' </td>
                                                <td style="width: 10%" colspan="">'.$solicitud['productos'][$i]['unidad_comercial'].' </td>
                                                <td style="width: 10%" colspan="">'.$solicitud['productos'][$i]['cantidad_pedida'].' </td>
                                                <td style="width: 10%" colspan="">'.$solicitud['productos'][$i]['cantidad_despachada'].' </td>
                                                <td style="width: 10%" colspan="">'.$solicitud['productos'][$i]['valor_unitario'].' </td>
                                                <td style="width: 10%" colspan="">'.$solicitud['productos'][$i]['valor_iva'].' </td>
                                        </tr>';
                                        $cantidad=$cantidad+$solicitud['productos'][$i]['valor_iva'];
                        }
                        
                        $html=$html.'   <tr>
                                                <td style="text-align:center; ;background-color: #ededed;border-collapse: collapse;" colspan="5"> VALOR TOTAL DE LA REQUISICION:</td>
                                                <td style="" colspan=""> '.$cantidad.' </td>
                                                
                                        </tr>
                                </tbody>
                        </table>
                <br>
                        <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                <tbody>
                                        <tr>
                                                <td style="width: 100%" colspan=""> PARA SER UTILIZADO EN: '.$solicitud['observacion'].'</td>
        
                                        </tr>
                                </tbody>
                        </table>
                <br>
                        <table style="table-layout: fixed; width: 100%;">
                                <tr>
                                        <td style="width: 18%">
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: center ;background-color: #ededed;width: 100%" colspan=""> REVISADO Y APROBADO POR:</td>
                                                                </tr>';
                                                                if ($solicitud['estado']>2) {
                                                                       $html.='<tr>
                                                                        <td style="" colspan=""> Firma:<img style="width:400%;" src="img/firma.png"> </td>
                                                                         </tr>';
                                                                }
                                                                else{
                                                                         $html.='<tr>
                                                                        <td style="" colspan=""> Firma: <br><br><br><br><br></td>
                                                                         </tr>';
                                                                }
                                                                
                                                                

                                                                $html.='<tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 30%" colspan="">Cargo:</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                        <td style="width: 4%">
                                                
                                        </td>
                                        <td style="width: 18%">
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: center ;background-color: #ededed;width: 100%" colspan=""> ENTREGADO POR:</td>
                                                                </tr>';
                                                                if ($solicitud['estado'] > 2) {
                                                                       $html.='<tr>
                                                                        <td style="" colspan=""> Firma:<br><br><br>'.$solicitud['entrega'].'<br><br></td>
                                                                         </tr>';
                                                                }
                                                                else{
                                                                         $html.='<tr>
                                                                        <td style="" colspan=""> Firma:<br><br><br>'.$solicitud['entrega'].'<br><br> </td>
                                                                         </tr>';
                                                                }
                                                                $html.='
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 30%" colspan="">Cargo:</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                        <td style="width: 4%">
                                                
                                        </td>
                                        <td style="width: 18%">
                                                <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                                        <tbody>
                                                                
                                                                <tr>
                                                                        <td style="text-align: center ;background-color: #ededed;width: 100%" colspan=""> SOLICITADO POR:</td>
                                                                </tr>';
                                                               
                                                                       $html.='<tr>
                                                                        <td style="" colspan=""> Firma:<br><br>'.$solicitud['usu_nombre'].' '.$solicitud['usu_nombre'].'<br><br><br></td>
                                                                         </tr>';
                                                             
                                                                $html.='
                                                                <tr>
                                                                        <td style="text-align: ;background-color: #ededed;width: 30%" colspan="">Cargo:</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </td>
                                
                                </tr>
                        </table>
                        <br>
                        <table style="table-layout: fixed; width: 100%;border-collapse: collapse; " border="1">
                                <tr>
                                        <td style="text-align: center; width: 100%; padding: 5px;background-color: #ededed">
                                                Autorizo a INSPECTROL LTDA. para descontar de mi salario el material faltante y dañado en esta entrega los cuales declaro recibidos.
                                        </td>                                   
                                </tr>
                        </table>
                        <br>


                        <table style="table-layout: fixed; width: 100%;border-collapse: collapse;" border="1">
                                <tbody>
                                        
                                        <tr>
                                                <td style="text-align: center ;background-color: #ededed;width: 25%" colspan=""> Fecha</td>
                                                <td style="text-align: center ;background-color: #ededed;width: 25%" colspan=""> Elaboró</td>
                                                <td style="text-align: center ;background-color: #ededed;width: 25%" colspan=""> Revisó</td>
                                                <td style="text-align: center ;background-color: #ededed;width: 25%" colspan=""> Aprobó</td>
                                        </tr>
                                        <tr>
                                                <td style="text-align: center ;background-color: ;width: 25%" colspan=""> Fecha</td>
                                                <td style="text-align: center ;background-color: ;width: 25%" colspan=""> Lider HSEQ</td>
                                                <td style="text-align: center ;background-color: ;width: 25%" colspan=""> Gerente de Operaciones</td>
                                                <td style="text-align: center ;background-color: ;width: 25%" colspan=""> Gerente General</td>
                                        </tr>
                                        <tr>
                                                <td style="text-align:center ;background-color: #ededed;width: 30%" colspan="4">DOCUMENTO CONTROLADO</td>
                                        </tr>
                                </tbody>
                        </table>
                                        
 
                </body>
                </html>
                ';

        # Instanciamos un objeto de la clase DOMPDF.
        $mipdf = new DOMPDF();

        # Definimos el tamaño y orientación del papel que queremos.
        # O por defecto cogerá el que está en el fichero de configuración.
        $mipdf ->set_paper("A4", "portrait");

        # Cargamos el contenido HTML.
        $mipdf ->load_html(utf8_decode($html));

        # Renderizamos el documento PDF.
        $mipdf ->render();

        # Enviamos el fichero PDF al navegador.
        $mipdf ->stream('Solicitud-'.$solicitud['id'].'.pdf');
?>