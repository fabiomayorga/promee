<?php

class perfilModel extends Model {


  public function __construct() {
        parent::__construct();

    }

	
	public function consultar($condicion=1)
    {
      
    $datos = $this->_db->query( "SELECT `pre_key`, `gen_key`, `pre_fecha`, `edu_key`, `ecv_key`, `pre_numero_hijos`, `est_key`, `viv_key`, `veh_key`,`tip_veh`, `pre_placa`, `cel_key`,`ref_key`,`regs_key`,`regse_key`,`expf_key`, `cries_key`, `hpag_key`, `runt_key`, `dian_key`,`ban_key`,`per_numero_cuenta`,  `veh_marca`, `veh_modelo`, `per_antecedentes`, `per_judiciales` ,`usu_key` FROM `pre_per` WHERE " .$condicion );
    
    if($datos)
       return $datos->fetchall();

    }

    public function crear($datos)
    {
    

        $this->_db->prepare("INSERT INTO `pre_per`( `gen_key`, `pre_fecha`, `edu_key`, `ecv_key`, `pre_numero_hijos`, `est_key`, `viv_key`, `veh_key`,`tip_veh`, `pre_placa`, `cel_key`,`ref_key`,`regs_key`,`regse_key`,`expf_key`, `cries_key`, `hpag_key`, `runt_key`, `dian_key`,`ban_key`,`per_numero_cuenta`,  `veh_marca`, `veh_modelo`, `per_antecedentes`, `per_judiciales`,`usu_key` ) 
                                           VALUES (:gen_key,:pre_fecha,:edu_key,:ecv_key,:pre_numero_hijos,:est_key,:viv_key,:veh_key,:tip_veh,:pre_placa,:cel_key,0,0,0,0,0,0,0,0,:ban_key,:per_numero_cuenta, '',0,'','',:usu_key)")
                  ->execute($datos);
    }

    public function calificar($key,$valor)
    {
      //calificar referencias laborales
      $this->_db->prepare("UPDATE pre_per SET ref_key = :ref_key WHERE pre_key='{$key}'")
                ->execute(
                        array(
                            ':ref_key' => $valor
                        )
        );
    }

    public function validar($key,$valor,$tab)
    {

      $this->_db->prepare("UPDATE pre_per SET {$tab}_key = :valor WHERE pre_key='{$key}'")
                ->execute(
                        array(
                            ':valor' => $valor
                        )
        );
    }
    public function cambiar($key,$valor,$tab,$campo)
    {
      $this->_db->prepare("UPDATE {$tab} SET {$campo} = :valor WHERE pre_key='{$key}'")
                ->execute(
                        array(
                            ':valor' => $valor
                        )
        );
    }


  }

?>