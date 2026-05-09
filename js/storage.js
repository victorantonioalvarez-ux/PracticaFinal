const clave_categorias = "categorias";

function obtenerCategorias() {
    const datos = localStorage.getItem(clave_categorias);
    if (datos) {
        return JSON.parse(datos);
    } else {
        return [];
    }
}