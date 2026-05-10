
document.addEventListener("DOMContentLoaded", function(){

    mostrarTareas();

    const btnCrear = document.querySelector("#form-index button[type='button']");
    btnCrear.addEventListener("click", function(){
        window.location.href = "./creaciontareanueva.html"
    });

    const formIndex = document.getElementById("form-index")
    formIndex.addEventListener("submit", function(event){
        event.preventDefault();
        
        const inputArchivo = document.getElementById("archivojson");
        const archivo = inputArchivo.files[0];

        if(!archivo) {
            alert("Por favor selecciona un archivo JSON.")
            return;
        }
        const lector = new FileReader();
        lector.onload = function(e) {
            try{
                const tareasImportadas = JSON.parse(e.target.result);
                importarTareas(tareasImportadas);
                mostrarTareas();
                alert("Tareas importadas correctamente.");
                formIndex.reset();
            } catch (error) {
                alert("El archivo no tiene un formato JSON válido.")
            }
        };
        lector.readAsText(archivo);
    })
});

function importarTareas(tareasNuevas) {
    const tareasExistentes = obtenerTareas();
    const idsExistentes = tareasExistentes.map(function(t) {
        return t.id;
    });

    tareasNuevas.forEach(function(tarea){
        if (!idsExistentes.includes(tarea.id)){
            let categoria = tarea.categoria;
            if(typeof categoria === "objeto" && categoria !== null) {
                categoria = categoria.nom;

            }

            const tareaAdaptada = {
                id: tarea.id,
                titulo: tarea.titulo || tarea.titol || "",
                descripcion: tarea.descripcion || tarea.descripcio || "",
                fecha: tarea.fecha || tarea.data || "",
                categoria: categoria || "",
                prioridad: tarea.prioridad || tarea.prioritat || "",
                terminada: tarea.terminada || tarea.realitzada || false
            };

            agregarTarea(tareaAdaptada)
        }
    });
}

function mostrarTareas(){
    const tareas = obtenerTareas();

    const pendientes = tareas.filter(function(t){
        return t.terminada === false;
    });

    const terminadas = tareas.filter(function(t){
        return t.terminada === true;
    });

    const listaPendientes = docuemnt.querySelectorAll(".lista-tareas")[0];
    const listaTerminadas = docuemnt.querySelectorAll(".lista-tareas")[1];

    listaPendientes.innerHTML = "";
    listaTerminadas.innerHTML = "";

    if (pendientes.length === 0) {
        listaPendientes.innerHTML = "<p>No hay tareas pendientes.</p>";
    } else {
        pendientes.array.forEach(function(tareas) {
            listaPendientes.appendChild(crearTarjetaTarea(tareas));
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

function toggleTerminada(id) {
    marcarTareaTerminada(id);
    mostrarTareas();
}

function eliminarTareasYActualizar(id) {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")){
        eliminarTareas(id)
        mostrarTareas();
    }
    
}