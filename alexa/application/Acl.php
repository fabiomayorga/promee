<?php

class ACL {

    private $_db;
    private $_id;
    private $_role;
    private $_permisos;

    public function __construct($id = false) {
        if ($id) {
            $this->_id = (int) $id;
        } else {
            if (Session::get('autenticado')) {
                $this->_id = Session::get('id_usuario');
                $this->_db = new Database();
                $this->_role = Session::get('level');
                $this->_permisos = $this->getPermisosRole();
            } else {
                $this->_id = 0;
            }
        }
//        $this->compilarAcl();
    }
    public function getPermisosRole() {
        $permisos = $this->_db->query(
                "SELECT per.per_nombre, per.per_valor, pxr.pxr_key, pxr.per_key, pxr.rol_key
                    FROM pxr, per WHERE per.per_key = pxr.per_key
                    AND pxr.rol_key = '{$this->_role}'"
        );
        $permisos = $permisos->fetchAll(PDO::FETCH_ASSOC);
        $data = array();
        for ($i = 0; $i < count($permisos); $i++) {
            $key = $permisos[$i]['per_valor'];
            if ($key == '') {
                continue;
            }
            $data[$i] = array(
                'key' => $key
            );
        }

        return $data;
    }

    public function permiso($key) {
        $i=0;
        while ($i != count($this->_permisos)) {
            if (in_array($key, $this->_permisos[$i])) {
                return true;
            }
            $i++;
        }
        return false;
    }

    public function acceso($key) {
        if ($this->permiso($key)) {
            Session::tiempo();
            return;
        }
        echo "<script type='text/javascript'>window.location.replace('" . BASE_URL . "error/access/5050/')</script>";
//        header("location:" . BASE_URL . "error/access/5050");
        exit;
    }
    
}

?>