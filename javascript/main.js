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
    const total = (sueldo + parseFloat(total_hora_25) + parseFloat(total_hora_50) + parseFloat(total_hora_100)).toFixed(2);
    
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
        total_25: document.getElementById("temp_total_25").value,
        total_50: document.getElementById("temp_total_50").value,
        total_100: document.getElementById("temp_total_100").value,
        

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
