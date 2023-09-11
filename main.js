function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea);
        };

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
}

//Marca una tarea como completada
function marcarCompletada (tarea) {
    tarea.classLit.toogle("completed");
}

//Agrega evento de clicl a las tareas para marcarlas como completas

document.getElementById("listaTareas").addEventListener("click", 
function(event){
    if (event.target.tagName === "LI") {
        marcarCompletada(event.target);
    }
});

//agregar evento de cic al boton agregar
document.getElementById("agregar").addEventListener("click", agregarTarea);