<?php
$logfile = "logs.txt";
$data = file_get_contents("php://input");
file_put_contents($logfile, $data . PHP_EOL, FILE_APPEND);
?>
