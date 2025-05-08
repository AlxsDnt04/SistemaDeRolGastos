<?php
// Datos de conexión
$host = "localhost";
$usuario = "root";
$contrasena = "";
$baseDeDatos = "sistemaderol";

// Crear conexión
$conexion = new mysqli($host, $usuario, $contrasena, $baseDeDatos);

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

echo "Conexión exitosa";
?>