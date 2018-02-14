<?php


class usuarioController extends Controller {

    private $_user;
	
    public function __construct() {

        parent::__construct();
        $this->_user = $this->loadModel('user','admin');
    }

    public function index() {

    }

   

}



?>