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

// Llamar a la funcion para crear el programa
crearListaSuper();