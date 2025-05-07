<?php
// datos.php
// Este archivo contiene la lógica para manejar los datos de los usuarios
/* INGRESOS */
$total25 = $_POST['total25'];
$total50 = $_POST['total50'];
$total100 = $_POST['total100'];
$totalIngresos = $_POST['total_ingresos'];
/* EGRESOS */
$aporteIess = $_POST['iesst'];
$totalEgresos = $_POST['totalEgres'];
/* TOTAL */
$totalNeto = $_POST['total_a_pagar'];

echo "<h2>Datos Recibidos</h2>";
echo "<h2>Ingresos</h2>";
echo "<p>Total hora 25: $total25</p>";
echo "<p>Total hora 50: $total50</p>";
echo "<p>Total hora 100: $total100</p>";
echo "<p>Total Ingresos: $totalIngresos</p>";

echo "<h2>Egresos</h2>";
echo "<p>Aporte IESS: $aporteIess</p>";
echo "<p>Total Egresos: $totalEgresos</p>";

echo "<h2>Total Neto</h2>";
echo "<p>Total a Pagar: $totalNeto</p>";
?>