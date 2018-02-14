<?php



class rolModel extends Model {

    public function __construct() {

        parent::__construct();

    }


    public function consult($condition=1) {

        $data = $this->_db->query("SELECT `id`, `name`, `state`, `created`, `update` 
                                   FROM `rol` 
                                   WHERE state!='0'  and  ".$condition);
        if ($data)
            return $data->fetchall();

    }

    public function permisos($idrol)
    {

        $data = $this->_db->query("SELECT permission.`id`, permission.`name`, permission.`value`, permission.`module`
                                   FROM `permission` 
                                   inner join `rol_has_permission`  on rol_has_permission.rol_id=".$idrol." 
                                   where rol_has_permission.permission_id=permission.id ");
        if ($data)
            return $data->fetchall();
    }

}


?>