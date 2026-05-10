const CLAVE_CATEGORIAS = "categorias";
const CLAVE_TAREAS = "tareas";

/* CATEGORIAS */

function obtenerCategorias() {
    const datos = localStorage.getItem(CLAVE_CATEGORIAS);
    if (datos) {
        return JSON.parse(datos);
    } else {
        return [];
    }
}

function guardarCategoria(categorias) {
    localStorage.setItem(CLAVE_CATEGORIAS, JSON.stringify(categorias));
}

function agregarCategoria(categoria){
    const categorias= obtenerCategorias();
    categorias.push(categoria);
    guardarCategoria(categorias);
}

function borrarCategoria(id) {
    const categorias = obtenerCategorias().filter(function(c){
        return c.id !== Number(id);
    });
    guardarCategoria(categorias);
    mostrarCategorias();
}


/* TAREAS */ 

function obtenerTareas() {
    const datos = localStorage.getItem(CLAVE_TAREAS);
    if (datos) {
        return JSON.parse(datos);
    } else {
        return [];
    }
}

function guardarTareas(tareas) {
    localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
}

function eliminarTarea(id) {
    const tareas = obtenerTareas().filter(function(t){
        return t.id !== id;
    });
    guardarTareas(tareas);
}

function agregarTarea(tarea) {
    const tareas = obtenerTareas();
    tareas.push(tarea);
    guardarTareas(tareas);
}

function marcarTareaTerminada(id) {
    const tareas = obtenerTareas().map(function(t) {
        if(t.id === id) {
            t.terminada = !t.terminada;
        }
        return t;
    });
    guardarTareas(tareas);
}