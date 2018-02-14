<?php

class loginModel extends Model
{
    public function __construct() {
        parent::__construct();
    }
    
    public function getUsuario($usuario, $password)
    {
        $datos = $this->_db->query(
                "select * from usuarios " .
                "where usuario = '$usuario' " .
                "and pass = '" . Hash::getHash('sha1', $password, HASH_KEY) ."'"
                );
        
        return $datos->fetch();
    }
	
	
	public function inicio($condicion)
    {
        $datos = $this->_db->query(
									"select  
										pro_pro.pro_pro_key,
										pro_pro.pro_pro_nombre,
										pro_pro.pro_pro_estado,
										pro_pro.usu_key,
										pro_pro.pro_pro_fecha_ini,
										pro_pro.pro_pro_duracion,
										pro_pro.pro_pro_fecha_fin,
										pro_pro.pro_pro_descripcion,
										
										
										pro_tar.pro_tar_key,
										pro_tar.pro_pro_key,
										pro_tar.pro_tar_estado,
										pro_tar.pro_tar_nombre,
										pro_tar.pro_tar_descripcion,
										pro_tar.pro_tar_prioridad,
										pro_tar.usu_key as tar_usu_key,
										pro_tar.pro_tar_duracion,
										pro_tar.pro_tar_fecha_creacion,
										pro_tar.pro_tar_fecha_inicio,
										pro_tar.pro_tar_fecha_cierre,
										pro_tar.pro_tar_avance,
										pro_tar.pro_tar_terminado,
										pro_tar.pro_tar_aprobado,
										
										
										pro_bit.pro_bit_key,
										pro_bit.pro_bit_observacion,
										pro_bit.pro_tar_key,
										pro_bit.pro_bit_fecha_creacion,
										pro_bit.pro_bit_fecha_elaboracion,
										pro_bit.usu_key as bit_usu_key,
										pro_bit.des_usu_key,
										pro_bit.pro_bit_estado
										
										from pro_pro,pro_tar,pro_bit where ".$condicion."
																	and pro_bit.pro_tar_key = pro_tar.pro_tar_key
																	and pro_tar.pro_pro_key = pro_pro.pro_pro_key"
								   );
			//			print_r($datos);exit;
        /*
		select  
	    pro_pro.pro_pro_key,
		pro_pro.pro_pro_nombre,
		pro_pro.pro_pro_estado,
		pro_pro.usu_key,
		pro_pro.pro_pro_fecha_ini,
		pro_pro.pro_pro_duracion,
		pro_pro.pro_pro_fecha_fin,
		pro_pro.pro_pro_descripcion,
        
        
        pro_tar.pro_tar_key,
        pro_tar.pro_pro_key,
        pro_tar.pro_tar_estado,
        pro_tar.pro_tar_nombre,
        pro_tar.pro_tar_descripcion,
        pro_tar.pro_tar_prioridad,
        pro_tar.usu_key,
        pro_tar.pro_tar_duracion,
        pro_tar.pro_tar_fecha_creacion,
        pro_tar.pro_tar_fecha_inicio,
        pro_tar.pro_tar_fecha_cierre,
        pro_tar.pro_tar_avance,
        pro_tar.pro_tar_terminado,
        pro_tar.pro_tar_aprobado,
        
        
        pro_bit.pro_bit_key,
        pro_bit.pro_bit_observacion,
        pro_bit.pro_tar_key,
        pro_bit.pro_bit_fecha_creacion,
        pro_bit.pro_bit_fecha_elaboracion,
        pro_bit.usu_key,
        pro_bit.des_usu_key,
        pro_bit.pro_bit_estado
        
        from pro_pro,pro_tar,pro_bit where 
        				pro_bit.des_usu_key = 1
        			    and pro_bit.pro_tar_key = pro_tar.pro_tar_key
                                    and pro_tar.pro_tar_key = pro_pro.pro_pro_key
		print_r($datos);exit;
		*/
		if($datos)
        return $datos->fetchAll();
    }
	
	
	public function inicio2()
	{
	 $datos = $this->_db->query("
	select pro_pro.pro_pro_key,
										pro_pro.pro_pro_nombre,
										pro_pro.pro_pro_estado,
										pro_pro.usu_key,
										pro_pro.pro_pro_fecha_ini,
										pro_pro.pro_pro_duracion,
										pro_pro.pro_pro_fecha_fin,
										pro_pro.pro_pro_descripcion,
										
										
										pro_tar.pro_tar_key,
										pro_tar.pro_pro_key as clave,
										pro_tar.pro_tar_estado,
										pro_tar.pro_tar_nombre,
										pro_tar.pro_tar_descripcion,
										pro_tar.pro_tar_prioridad,
										pro_tar.usu_key as tar_usu_key,
										pro_tar.pro_tar_duracion,
										pro_tar.pro_tar_fecha_creacion,
										pro_tar.pro_tar_fecha_inicio,
										pro_tar.pro_tar_fecha_cierre,
										pro_tar.pro_tar_avance,
										pro_tar.pro_tar_terminado,
										pro_tar.pro_tar_aprobado
										

 from pro_pro,pro_tar
 
  where pro_tar.usu_key = 1 and ( pro_tar_terminado = 0 or pro_tar_aprobado = 0  ) and pro_pro.pro_pro_key = pro_tar.pro_pro_key");
	
	if($datos)
        return $datos->fetchAll();
		
	}
	
	public function restablecer()
	{
	
	
	}
}

?>