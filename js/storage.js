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
        return c.id !== id;
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

