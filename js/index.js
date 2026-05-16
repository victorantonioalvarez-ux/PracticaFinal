
document.addEventListener("DOMContentLoaded", function(){

    mostrarTareas();
    mostrarGrafico();
    

    const btnCrear = document.querySelector("#form-index button[type='button']");
    btnCrear.addEventListener("click", function(){
        window.location.href = "./creaciontareanueva.html";
    });

    const formIndex = document.getElementById("form-index")
    formIndex.addEventListener("submit", function(event){
        event.preventDefault();
        
          const nombreArchivo = document.getElementById("archivojson").value.trim();

        if(nombreArchivo === "") {
            alert("Escribe el nombre del archivo que quieres importar.");
            return;
        }

        const ruta = "./datos/" + (nombreArchivo.endsWith(".json") ? nombreArchivo : nombreArchivo + ".json");
 
        fetch(ruta)
            .then(function(respuesta) {
                if (!respuesta.ok) {
                    throw new Error("Archivo no encontrado.");
                }
                return respuesta.json();
            })
            .then(function(tareasImportadas) {
                importarTareas(tareasImportadas);
                mostrarTareas();
                alert("Tareas importadas correctamente.");
                formIndex.reset();
            })
            .catch(function(error) {
                alert("No se ha podido cargar el archivo. Comprueba que el nombre es correcto.");
            });
    });
 
});


function importarTareas(tareasNuevas) {
    const tareasExistentes = obtenerTareas();
    const idsExistentes = tareasExistentes.map(function(t) {
        return t.id;
    });

    tareasNuevas.forEach(function(tarea){
        if (!idsExistentes.includes(tarea.id)){
            let categoria = tarea.categoria;
            if(typeof categoria === "object" && categoria !== null) {
                const categoriaExistente = obtenerCategorias().find(function(c) {
                    return c.nombre === categoria.nom;
                });
                if (!categoriaExistente) {
                    const nuevaCategoria = crearCategoria(categoria.nom, categoria.color);
                    agregarCategoria(nuevaCategoria);
                }
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

    const listaPendientes = document.querySelectorAll(".lista-tareas")[0];
    const listaTerminadas = document.querySelectorAll(".lista-tareas")[1];

    listaPendientes.innerHTML = "";
    listaTerminadas.innerHTML = "";

    if (pendientes.length === 0) {
        listaPendientes.innerHTML = "<p>No hay tareas pendientes.</p>";
    } else {
        pendientes.forEach(function(tarea) {
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
    } else {
        if(tarea.prioridad === "Alta") {
            div.classList.add("prioridad-alta");
        } else if(tarea.prioridad === "Media" || tarea.prioridad === "Mitjana"){
            div.classList.add("prioridad-media");
        } else {
            div.classList.add("prioridad-baja")
        }
    }

    div.innerHTML =
            `<div class="tarea-info">
            <h3 class="tarea-titulo">${tarea.titulo}</h3>
            <p class="tarea-descripcion">${tarea.descripcion}</p>
            <div class="tarea-meta">
                <span class="tarea-fecha"> ${tarea.fecha}</span>
                <span class="tarea-categoria" style="color:white; background-color: ${obtenerColorCategoria(tarea.categoria)}; padding: 2px 8px; border-radius: 5px;"> ${tarea.categoria}</span>
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

function obtenerColorCategoria(nombreCategoria) {
    const categorias = obtenerCategorias();
    const categoria = categorias.find(function(c) {
        return c.nombre === nombreCategoria;
    });
    if (categoria) {
        return categoria.color;
    } else {
        return "#e5e7eb";
    }
}

function toggleTerminada(id) {
    marcarTareaTerminada(id);
    mostrarTareas();
    mostrarGrafico();
}

function eliminarTareaYActualizar(id) {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")){
        eliminarTarea(id);
        mostrarTareas();
        mostrarGrafico();
    }
}