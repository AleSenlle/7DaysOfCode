// Generar un número aleatorio entre 0 y 10
const numeroCorrecto = Math.floor(Math.random() * 11);

let intentos = 3;

// Array para almacenar los números ya ingresados
const numerosIngresados = [];

// Función para adivinar el número
function adivinarNumero() {
    while (intentos > 0) {
        // Pedir al usuario que ingrese un número
        const inputUsuario = prompt("Adivina el número (entre 0 y 10):");
        const numeroUsuario = parseInt(inputUsuario);

        // Validar la entrada del usuario
        if (isNaN(numeroUsuario)) {
            alert("Por favor, ingresa un número válido.");
            continue; // Volver al inicio del bucle
        }

        if (numeroUsuario < 0 || numeroUsuario > 10) {
            alert("El número debe estar entre 0 y 10.");
            continue; // Volver al inicio del bucle
        }

        if (numerosIngresados.includes(numeroUsuario)) {
            alert("Ya ingresaste este número. Prueba con otro.");
            continue; // Volver al inicio del bucle
        }

        // Agregar el número ingresado al array
        numerosIngresados.push(numeroUsuario);

        // Verificar si el número es correcto
        if (numeroUsuario === numeroCorrecto) {
            alert("¡Felicidades! Adivinaste el número.");
            return; // Terminar el programa si acierta
        } else {
            intentos--; // Reducir el número de intentos
            if (intentos > 0) {
                alert(`Incorrecto. Te quedan ${intentos} intentos.`);
            }
        }
    }

    // Si se agotan los intentos
    alert(`Lo siento, no adivinaste. El número correcto era ${numeroCorrecto}.`);
}

// Llamar a la función para iniciar el juego
adivinarNumero();