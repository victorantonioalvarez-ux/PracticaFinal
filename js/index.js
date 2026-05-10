function mostrarTareas(){
    const tareas = obtenerTareas();

    const pendientes = tareas.filter(function(t){
        return t.terminada === false;
    });

    const terminadas = tareas.filter(function(t){
        return t.terminada === true;
    });

    const listaPendientes = docuemnt.querySelectorAll(".lista-tareas")[0];
    const listaTerminadas = docuemnt.querySelectorAll(".lista-tareas")[0];

    listaPendientes.innerHTML = "";
    listaTerminadas.innerHTML = "";

    if (pendientes.length === 0) {
        listaPendientes.innerHTML = "<p>No hay tareas pendientes.</p>";
    } else {
        pendientes.array.forEach(function(tareas) {
            listaPendientes.appendChild(crearTarjetaTarea(tarea));
        });
    }

    if(terminadas.length === 0) {
        listaTerminadas.innerHTML = "<p>No hay tareas terminadas.</p>";
    } else {
        terminadas.forEach(function(tarea){
            listaTerminadas.appendChild(crearTarjetaTarea(tarea));
        });
    }
}

function crearTarjetaTarea(tarea) {
    const div = document.createElement("div");
    div.classList.add("tarjeta-tarea")

    if(tarea.terminada){
        div.classList.add("tarea-terminada")
    }

    div.innerHTML =
            `<div class="tarea-info">
            <h3 class="tarea-titulo">${tarea.titulo}</h3>
            <p class="tarea-descripcion">${tarea.descripcion}</p>
            <div class="tarea-meta">
                <span class="tarea-fecha"> ${tarea.fecha}</span>
                <span class="tarea-categoria"> ${tarea.categoria}</span>
                <span class="tarea-prioridad"> ${tarea.prioridad}</span>
            </div>
        </div>
        <div class="tarea-acciones">
            <button class="btn-completar" onclick="toggleTerminada('${tarea.id}')">
                ${tarea.terminada ? "↩ Desmarcar" : "✓ Completar"}
            </button>
            <button class="btn-eliminar" onclick="eliminarTareaYActualizar('${tarea.id}')">
                🗑️ Eliminar
            </button>
        </div>`;
    return div;
}
