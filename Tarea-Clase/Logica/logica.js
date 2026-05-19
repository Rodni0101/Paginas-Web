// Referencias a los inputs del formulario
const inputCodigo = document.getElementById('codigo');
const inputProducto = document.getElementById('producto');
const inputValor = document.getElementById('valor');
const inputCantidad = document.getElementById('cantidad');
const inputTotal = document.getElementById('total');

// Referencia al botón de limpiar
const botonLimpiar = document.getElementById('limpiar');

function verVentas() {
    // Obtenemos los valores de los campos
    const codigo = inputCodigo.value;
    const producto = inputProducto.value;
    const valor = inputValor.value;
    const cantidad = inputCantidad.value;
    const total = inputTotal.value;

    // Validación básica por si algún campo obligatorio está vacío
    if (!codigo || !producto || !valor || !cantidad) {
        alert("Por favor, completa todos los campos obligatorios.");
        return; // Detiene la ejecución de la función
    }

    // Mostramos los datos de forma ordenada
    console.log("--- Datos del Producto ---");
    document.write(`Código: ${codigo}`);
    document.write(`Producto: ${producto}`);
    document.write(`Valor Unitario: $${valor}`);
    document.write(`Cantidad: ${cantidad}`);
    document.write(`Total Acumulado: $${total}`);
    
    // También puedes verlo en una alerta si lo prefieres:
    alert(`Producto: ${producto}\nCantidad: ${cantidad}\nTotal: $${total}`);
}


function limpiarInputs() {
    // Asignamos un valor vacío a cada campo de texto
    inputCodigo.value = "";
    inputProducto.value = "";
    inputValor.value = "";
    inputCantidad.value = "";
    inputTotal.value = "";
}

// Vinculamos la función al evento 'click' del botón Limpiar
botonLimpiar.addEventListener('click', limpiarInputs);


function calcularTotal() {
    const valor = parseFloat(inputValor.value) || 0;
    const cantidad = parseFloat(inputCantidad.value) || 0;
    
    // Multiplicamos y asignamos el resultado al campo total
    inputTotal.value = valor * cantidad;
}

// Escuchamos cuando el usuario escribe en valor o cantidad para actualizar el total en tiempo real
inputValor.addEventListener('input', calcularTotal);
inputCantidad.addEventListener('input', calcularTotal);