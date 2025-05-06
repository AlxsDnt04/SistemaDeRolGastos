//funcion para calcular ingreso
function calcularIngreso() {
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const hora_25 = parseFloat(document.getElementById("hora25").value);
    const hora_50 = parseFloat(document.getElementById("hora50").value);
    const hora_100 = parseFloat(document.getElementById("hora100").value);
    //hora normal
    const hora_normal = (sueldo/160).toFixed(2);
    //calculo al 25%
    const total_hora_25 = (hora_normal * hora_25 * 1.25).toFixed(2);
    document.getElementById("temp_total_25").value = total_hora_25; // Mostrar el total al 25% en el campo correspondiente
    //calculos al 50%
    const total_hora_50 = (hora_normal * hora_50 * 1.5).toFixed(2);
    document.getElementById("temp_total_50").value = total_hora_50; // Mostrar el total al 50% en el campo correspondiente
    //calculos al 100%
    const total_hora_100 = (hora_normal * hora_100 * 2).toFixed(2);
    document.getElementById("temp_total_100").value = total_hora_100; // Mostrar el total al 100% en el campo correspondiente
    //calculo total (sueldo + bonos + hora25 + hora50 + hora100)
    const total_ingresos = (sueldo + parseFloat(total_hora_25) + parseFloat(total_hora_50) + parseFloat(total_hora_100)).toFixed(2);
    document.getElementById("total_ingresos").value = total_ingresos; // Mostrar el total de ingresos en el campo correspondiente
    
}
/* calcular egresos */
function calcularEgresos() {
    const iess = parseFloat(document.getElementById("iess").value);
    const multas = parseFloat(document.getElementById("multas").value);
    const atrasos = parseFloat(document.getElementById("atrasos").value);
    const alimentacion = parseFloat(document.getElementById("alimentacion").value);
    const anticipo = parseFloat(document.getElementById("anticipo").value);
    const otros = parseFloat(document.getElementById("otros").value);
    //calculo total (iess + multas + atrasos + alimentacion + anticipo + otros)
    const total_egresos = (iess + multas + atrasos + alimentacion + anticipo + otros).toFixed(2);
    document.getElementById("total_egresos").value = total_egresos; // Mostrar el total de egresos en el campo correspondiente
}

/* accion del boton submit */
const formulario = document.getElementById("rolPagos");
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    calcularIngreso(); // Llamar a la función para calcular el ingreso
    // crear formulario oculto 
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "datos.php"; 

    // Obtener los valores de los campos de texto
    const campos = {
        /* ingresos */
        total_25: document.getElementById("temp_total_25").value,
        total_50: document.getElementById("temp_total_50").value,
        total_100: document.getElementById("temp_total_100").value,
        /* total ing */
        total_ingresos: document.getElementById("total_ingresos").value,
        /* egresos */
        iess: document.getElementById("iess").value,
        multas: document.getElementById("multas").value,
        atrasos: document.getElementById("atrasos").value,
        alimentacion: document.getElementById("alimentacion").value,
        anticipo: document.getElementById("anticipo").value,
        otros: document.getElementById("otros").value,
        /* total eng */
        total_egresos: document.getElementById("total_egresos").value, 
    }

    for (const key in campos) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = campos[key];
        form.appendChild(input);
    }

    // imprimir el formulario mediante php
    document.body.appendChild(form); // Ensure the form is added to the DOM
    form.submit(); // Submit the form immediately
}); 
