// Funciones para las operaciones
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

// Función para mostrar el menú y obtener la opción del usuario
function mostrarMenu() {
    return prompt(
        `Selecciona una operación:
        1. Sumar
        2. Restar
        3. Multiplicar
        4. Dividir
        5. Salir`
    );
}

// Función para validar si un valor es un número válido
function esNumeroValido(valor) {
    return !isNaN(valor) && valor.trim() !== "";
}

// Función para pedir un número al usuario
function pedirNumero(mensaje) {
    let numero;
    while (true) {
        const input = prompt(mensaje);
        if (esNumeroValido(input)) {
            numero = parseFloat(input);
            break;
        } else {
            alert("Entrada no válida. Ingresa un número.");
        }
    }
    return numero;
}

// Función principal de la calculadora
function calculadora() {
    while (true) {
        const opcion = mostrarMenu();

        // Salir si el usuario elige la opción 5
        if (opcion === "5") {
            alert("Hasta la próxima!");
            break;
        }

        // Pedir los dos números al usuario
        const numero1 = pedirNumero("Ingresa el primer número:");
        const numero2 = pedirNumero("Ingresa el segundo número:");

        let resultado;

        // Realizar la operación seleccionada
        switch (opcion) {
            case "1":
                resultado = sumar(numero1, numero2);
                break;
            case "2":
                resultado = restar(numero1, numero2);
                break;
            case "3":
                resultado = multiplicar(numero1, numero2);
                break;
            case "4":
                resultado = dividir(numero1, numero2);
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
                continue; // Volver al inicio del bucle
        }

        // Mostrar el resultado
        alert(`El resultado es: ${resultado}`);
    }
}

// Llamar a la función principal para iniciar la calculadora
calculadora();