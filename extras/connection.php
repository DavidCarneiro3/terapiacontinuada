<?php
// CONEXAO, N�O MECHER

$mysqli = new mysqli ("terapiabd.mysql.dbaas.com.br","terapiabd","terapia@123","terapiabd");

if (mysqli_connect_errno()) {
   echo 'Não foi possível conectar-se ao banco de dados: ' . mysqli_connect_error();
}
?>