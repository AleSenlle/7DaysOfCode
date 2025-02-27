// script.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del DOM
    const techInput = document.getElementById("tech-input");
    const addTechBtn = document.getElementById("add-tech-btn");
    const techList = document.getElementById("tech-list");
    const techComment = document.getElementById("tech-comment");

    // Función para agregar una tecnología
    addTechBtn.addEventListener("click", function () {
        const technology = techInput.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

        if (technology) {
            // Verificar si la tecnología ya está en la lista
            const existingTechs = Array.from(techList.children).map(li => li.textContent.toLowerCase());
            if (existingTechs.includes(technology.toLowerCase())) {
                alert("¡Esta tecnología ya está en la lista!");
            } else {
                // Agregar la tecnología a la lista
                const listItem = document.createElement("li");
                listItem.textContent = technology;
                techList.appendChild(listItem);

                // Mostrar un mensaje personalizado
                techComment.textContent = getTechComment(technology);

                // Limpiar el input
                techInput.value = "";
            }
        } else {
            alert("Por favor, ingresa el nombre de una tecnología.");
        }
    });

    // Función para generar un mensaje personalizado
    function getTechComment(tech) {
        const comments = {
            "react": "¡React es una excelente elección para construir interfaces modernas!",
            "vue": "Vue es genial por su simplicidad y flexibilidad.",
            "node.js": "Node.js es perfecto para desarrollar aplicaciones backend escalables.",
            "c#": "C# es un lenguaje potente para desarrollo de aplicaciones empresariales.",
            "java": "Java es un clásico que nunca pasa de moda.",
            // Agrega más tecnologías y mensajes aquí
        };

        // Convertir a minúsculas para evitar problemas de coincidencia
        const lowerTech = tech.toLowerCase();

        // Retornar el mensaje correspondiente o uno genérico
        return comments[lowerTech] || `¡Muy interesante! Aprender ${tech} será útil en tu camino como desarrollador.`;
    }
});