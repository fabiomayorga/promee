<?php

class loginController extends Controller {

    private $_acceso;
    public function __construct() {
        parent::__construct();
        $this->_acceso = $this->loadModel('usuario', 'admin');
    }

    public function index() {
        if (Session::get('autenticado')) {
        }
        if ($this->getInt('enviar') == 1) {
            if ($comprobar != 1) {
            if ($nombre['usu_estado'] != 1) {
            Session::set('autenticado', true);
        }

        $this->_view->renderizar('index','inicio');
    }

    public function panel() {
        
        }
    }
	function tareas($id_proyecto,$vector)
    function tareasLista($id_proyecto,$vector)

}

?>