const CLAVE_CATEGORIAS = "categorias";

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

