
document.addEventListener("DOMContentLoaded", function() {
 
    mostrarCategorias();
 
    const formCategorias = document.getElementById("form-categorias");
 
    formCategorias.addEventListener("submit", function(event) {
        event.preventDefault();
 
        const nombre = document.getElementById("nueva-categoria").value;
        const color = document.getElementById("color-categoria").value;
 
        if (nombre === "") {
            alert("El nombre de la categoría no puede estar vacío.");
            return;
        }
 
        const nuevaCategoria = crearCategoria(nombre, color);
        agregarCategoria(nuevaCategoria);
 
        formCategorias.reset();
        mostrarCategorias();
    });
});

