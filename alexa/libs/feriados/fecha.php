<?php

class fechas {

    private $_festivos = array("2013-01-01", "2013-01-07", "2013-03-24", "2013-03-25", "2013-03-28", "2013-03-29", "2013-03-31",
        "2013-05-01",
        "2013-05-13",
        "2013-06-03",
        "2013-06-10",
        "2013-07-01",
        "2013-07-20",
        "2013-08-07",
        "2013-08-19",
        "2013-10-14",
        "2013-11-04",
        "2013-11-11",
        "2013-12-08",
        "2013-12-25"
    );

    public function __construct() {
        $this->_datos = array();
        $this->_paginacion = array();
    }

    function comparaFechas($diasLimite) {
        $starDate = new DateTime(date("Y-m-d"));
        $tempDate = new DateTime($starDate->format('Y-m-d'));
        $endDate = new DateTime($starDate->format('Y-m-d'));
        $endDate->modify("+" . $diasLimite . " day");
        do {
            if ($tempDate->format('l') == 'Saturday' || $tempDate->format('l') == 'Sunday' || in_array($tempDate->format('Y-m-d'), $this->_festivos)) {
                $endDate->modify('+1 day');
            }
            $tempDate->modify('+1 day');
        } while (round(($endDate->format('U') - $tempDate->format('U')) / (60 * 60 * 24)) != 0);

        if ($endDate->format('l') == 'Saturday' || $endDate->format('l') == 'Sunday' || in_array($endDate->format('Y-m-d'), $this->_festivos)) {
            $endDate->modify('+1 day');
            if ($endDate->format('l') == 'Saturday' || $endDate->format('l') == 'Sunday' || in_array($endDate->format('Y-m-d'), $this->_festivos)) {
                $endDate->modify('+1 day');
                if ($endDate->format('l') == 'Saturday' || $endDate->format('l') == 'Sunday' || in_array($endDate->format('Y-m-d'), $this->_festivos)) {
                    $endDate->modify('+1 day');
                }
            }
        }
        return $endDate->format('Y-m-d');
    }

    function diasFaltantes($fechaFin) {
        $starDate = new DateTime(date("Y-m-d"));
        $tempDate = new DateTime($starDate->format('Y-m-d'));
        $fechaFin = new DateTime($fechaFin);
        $endDate = new DateTime($fechaFin->format('Y-m-d'));
        $day = 0;
        $dias = round(($endDate->format('U') - $tempDate->format('U')) / (60 * 60 * 24));
        for ($i = 0; $i < $dias; $i++) {
            if ($tempDate->format('l') == 'Saturday' || $tempDate->format('l') == 'Sunday') {
                $day++;
            }
            if (in_array($tempDate->format('Y-m-d'), $this->_festivos)) {
                $day++;
            }
            $tempDate->modify('+1 day');
        }
        return $day;
    }

}

?>
