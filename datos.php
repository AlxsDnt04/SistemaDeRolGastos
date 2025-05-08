<?php
// datos.php
/* datos personales */
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$cedula = $_POST['cedula'];
$telefono = $_POST['telefono'];
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
// Formatear las variables a dos decimales
$total25 = number_format((float)$total25, 2, '.', '');
$total50 = number_format((float)$total50, 2, '.', '');
$total100 = number_format((float)$total100, 2, '.', '');
$totalIngresos = number_format((float)$totalIngresos, 2, '.', '');
$aporteIess = number_format((float)$aporteIess, 2, '.', '');
$totalEgresos = number_format((float)$totalEgresos, 2, '.', '');
$totalNeto = number_format((float)$totalNeto, 2, '.', '');
echo "<h2>Datos Recibidos</h2>";
echo "<p>Nombre: $nombre</p>";
echo "<p>Apellido: $apellido</p>";
echo "<p>Cedula: $cedula</p>";
echo "<p>Telefono: $telefono</p>";

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