<?php



class permissionModel extends Model {



    public function __construct() {

        parent::__construct();

    }



    public function consult($condicion=1) {

        $data = $this->_db->query("SELECT `id`, `name`, `value`, `module` FROM `permission` WHERE ".$condicion);
        if ($data)
            return $data->fetchall();
    }


}



?>