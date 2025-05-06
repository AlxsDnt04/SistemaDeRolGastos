<?php
// datos.php
// Este archivo contiene la lógica para manejar los datos de los usuarios
$total25 = $_POST['total25'];
$total50 = $_POST['total50'];
$total100 = $_POST['total100'];

echo "<h2>Datos Recibidos</h2>";
echo "<p>Total 25: $total25</p>";
echo "<p>Total 50: $total50</p>";
echo "<p>Total 100: $total100</p>";


echo "<table border='1'>";
echo "<tr><th>Tipo</th><th>Total</th></tr>";
echo "<tr><td>Total 25</td><td>$total25</td></tr>";
echo "<tr><td>Total 50</td><td>$total50</td></tr>";
echo "<tr><td>Total 100</td><td>$total100</td></tr>";
echo "</table>";
?>