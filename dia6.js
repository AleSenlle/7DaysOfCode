// Primero definimos las categorias
const categorias = ["Almacen", "Bebidas", "Frescos", "Congelados", "Limpieza", "Perfumeria"];
const listaSuper = {
    Almacen: [],
    Bebidas: [],
    Frescos: [],
    Congelados: [],
    Limpieza: [],
    Perfumeria: []
};

// Funcion para validar que se ingresen elementos correctamente
function esElementoValido(elemento) {
    return elemento.trim() !== "" && !/^\d+$/.test(elemento);
}

// Funcion para asignar un elementos a una categoria
function asignarCategoria(elemento) {
    let mensaje = `En que categoria deberia ir "${elemento}"?\n`;
    categorias.forEach((categoria, index) => {
        mensaje += `${index + 1}. ${categoria}\n`;
    });
    // Ahora pedirle al usuario que eliga una categoria
    const categoriaElegida = parseInt(prompt(mensaje)) - 1;
    // Validar la eleccion del usuario
    if (categoriaElegida >= 0 && categoriaElegida < categorias.length) {
        const categoria = categorias[categoriaElegida];
        listaSuper[categoria].push(elemento.toLowerCase());
        alert(`"${elemento}" se agregó a "${categoria}"`);
    } else {
        alert("Opción invalida. Intente de nuevo");
        asignarCategoria(elemento); // Volverá a preguntarle por la categoria del elemento
    }
}

// Funcion para mostrar la lista completa
function mostrarLista() {
    console.log("---Lista del Super---");
    for (const categoria in listaSuper) {
        if (listaSuper[categoria].length > 0) {
            console.log(`\n${categoria}:`);
            listaSuper[categoria].forEach((elemento, index) => {
                console.log(`${index + 1}. ${elemento}`);
            });
        }
    }
}

// Funcion para borrar un elemento de la lista
function borrarElemento() {
    while (true) {
        const elementoABorrar = prompt("¿Qué elemento deseas borrar? (o escribe 'fin' para terminar)").toLowerCase();
        if (elementoABorrar === "fin") {
            break; // Salir del bucle si el usuario escribe 'fin'
        }

        let elementoEncontrado = false;

        // Buscar el elemento en todas las categorías
        for (const categoria in listaSuper) {
            const index = listaSuper[categoria].indexOf(elementoABorrar);
            if (index !== -1) {
                // Confirmar si el usuario realmente quiere borrar el elemento
                const confirmacion = confirm(`¿Estás seguro de que quieres borrar "${elementoABorrar}" de "${categoria}"?`);
                if (confirmacion) {
                    listaSuper[categoria].splice(index, 1); // Borrar el elemento
                    alert(`"${elementoABorrar}" ha sido borrado de "${categoria}".`);
                    elementoEncontrado = true;

                    // Mostrar la lista actualizada
                    mostrarLista();
                } else {
                    alert("Borrado cancelado.");
                }
                break; // Salir del bucle una vez que se encuentra el elemento
            }
        }

        // Si el elemento no se encuentra
        if (!elementoEncontrado) {
            alert("¡No fue posible encontrar el elemento en la lista!");
        }
    }
}

// Funcion principal
function crearListaSuper() {
    while (true) {
        // Pedir al usuario que ingrese un elemento
        const elemento = prompt("Ingresa un elemento para tu lista de super, o escribe 'fin', para finalizar: ");
        // Salir del bucle si el usuario escribe "Fin"
        if (elemento.toLowerCase() === 'fin') {
            break;
        }
        // Validar el elemento ingresado
        if (!esElementoValido(elemento)) {
            alert("El dato ingresado no es válido, por favor intente nuevamente.");
            continue;
        }
        // Asignar el elemento a una categoria
        asignarCategoria(elemento);
    }

    // Mostrar la lista completa y ordenada
    mostrarLista();

    // Preguntar si el usuario quiere borrar un elemento
    const quiereBorrar = confirm("¿Deseas borrar algún elemento de la lista?");
    if (quiereBorrar) {
        borrarElemento();
    }
}

// Llamar a la funcion para crear el programa
crearListaSuper();