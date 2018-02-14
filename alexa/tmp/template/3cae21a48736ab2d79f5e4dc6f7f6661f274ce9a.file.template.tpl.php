<?php /* Smarty version Smarty-3.1.13, created on 2018-01-17 08:41:57
         compiled from "/Applications/MAMP/htdocs/tips/views/layout/blank/template.tpl" */ ?>
<?php /*%%SmartyHeaderCode:17879616425a5f52a5c16f61-01699388%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3cae21a48736ab2d79f5e4dc6f7f6661f274ce9a' => 
    array (
      0 => '/Applications/MAMP/htdocs/tips/views/layout/blank/template.tpl',
      1 => 1514529089,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '17879616425a5f52a5c16f61-01699388',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'titulo' => 0,
    '_layoutParams' => 0,
    '_contenido' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_5a5f52a5d25aa6_66253617',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5a5f52a5d25aa6_66253617')) {function content_5a5f52a5d25aa6_66253617($_smarty_tpl) {?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="" type="image/png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title><?php echo (($tmp = @$_smarty_tpl->tpl_vars['titulo']->value)===null||$tmp==='' ? $_smarty_tpl->tpl_vars['_layoutParams']->value['configs']['app_name'] : $tmp);?>
</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
  
    <!-- Bootstrap core CSS     -->
    <link href="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
css/bootstrap.min.css" rel="stylesheet" />
    <!--  Material Dashboard CSS    -->
    <link href="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
css/material-dashboard-v=1.2.1.css" rel="stylesheet" />
    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
css/demo.css" rel="stylesheet" />
    <!--     Fonts and icons     -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body class="off-canvas-sidebar">
<input type="" name="alert" id="alert" value="<?php echo Session::get('_valor');?>
">
<input type="" name="alert_color" id="alert_color" value="<?php echo Session::get('_color');?>
">
<input type="" name="alert_mensaje" id="alert_mensaje" value="<?php echo Session::get('_mensaje');?>
">

    <nav class="navbar navbar-primary navbar-transparent navbar-absolute">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="">TimeTrack</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['root'];?>
index">
                            <i class="material-icons">home</i> Home
                        </a>
                    </li>
                    <li class="">
                        <a href="register.html">
                            <i class="material-icons">person_add</i> Register
                        </a>
                    </li>
                    <li class="  ">
                        <a href="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['root'];?>
index/shopping">
                            <i class="material-icons">shopping_cart</i>shopping
                        </a>
                    </li>
                    <li class="  ">
                        <a href="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['root'];?>
index/login">
                            <i class="material-icons">fingerprint</i> Login
                        </a>
                    </li>
                    
                    
                    
                </ul>
            </div>
        </div>
    </nav>
    <div class="wrapper wrapper-full-page">
        <div class="full-page login-page" filter-color="black" data-image="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
img/Computer-time.jpg">
        <?php echo $_smarty_tpl->getSubTemplate ($_smarty_tpl->tpl_vars['_contenido']->value, $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


        <footer class="footer">
            <div class="container">
                <nav class="pull-left">
                    <ul>
                        <li>
                           <a href="#btn" class="btn btn-just-icon btn-simple">
                                                <i class="fa fa-facebook-square"></i>
                                            </a>
                                            <a href="#pablo" class="btn btn-just-icon btn-simple">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="#eugen" class="btn btn-just-icon btn-simple">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                        </li>
                        
                    </ul>
                </nav>
                <p class="copyright pull-right">
                    &copy;
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    Creado por <a href="http://www.creative-tim.com"> @tahito1987 </a>.
                </p>
            </div>
        </footer>
        </div>
    </div>
</body>
<!--   Core JS Files   -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery-3.2.1.min.js" type="text/javascript"></script>
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/bootstrap.min.js" type="text/javascript"></script>
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/material.min.js" type="text/javascript"></script>
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
<!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
<!-- Library for adding dinamically elements -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/arrive.min.js" type="text/javascript"></script>
<!-- Forms Validations Plugin -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery.validate.min.js"></script>
<!--  Plugin for Date Time Picker and Full Calendar Plugin-->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/moment.min.js"></script>
<!--  Charts Plugin, full documentation here: https://gionkunz.github.io/chartist-js/ -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/chartist.min.js"></script>
<!--  Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery.bootstrap-wizard.js"></script>
<!--  Notifications Plugin, full documentation here: http://bootstrap-notify.remabledesigns.com/    -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/bootstrap-notify.js"></script>
<!--   Sharrre Library    -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery.sharrre.js"></script>
<!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/bootstrap-datetimepicker.js"></script>
<!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery-jvectormap.js"></script>
<!-- Sliders Plugin, full documentation here: https://refreshless.com/nouislider/ -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/nouislider.min.js"></script>
<!--  Google Maps Plugin    -->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1_8C5Xz9RpEeJSaJ3E_DeBv8i7j_p6Aw"></script>
<!--  Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery.select-bootstrap.js"></script>
<!--  DataTables.net Plugin, full documentation here: https://datatables.net/    -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery.datatables.js"></script>
<!-- Sweet Alert 2 plugin, full documentation here: https://limonte.github.io/sweetalert2/ -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/sweetalert2.js"></script>
<!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jasny-bootstrap.min.js"></script>
<!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/fullcalendar.min.js"></script>
<!-- Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/jquery.tagsinput.js"></script>
<!-- Material Dashboard javascript methods -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/material-dashboard.js?v=1.2.1"></script>
<!-- Material Dashboard DEMO methods, don't include it in your project! -->
<script src="<?php echo $_smarty_tpl->tpl_vars['_layoutParams']->value['ruta_layout'];?>
js/demo.js"></script>
<script type="text/javascript">
    $().ready(function() {
        demo.checkFullPageBackgroundImage();

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        //
    });
</script>

</html>
<!-- Localized --><?php }} ?>