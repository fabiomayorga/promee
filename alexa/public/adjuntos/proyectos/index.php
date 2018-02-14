<?php
$file = $_GET['f'];
header("Content-disposition: attachment; filename=$file");
header("Content-type: application/octet-stream");
readfile($file);
?>