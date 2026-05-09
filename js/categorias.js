
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

function mostrarCategorias(){
    const lista = document.getElementById("lista-categorias");
    const categorias = obtenerCategorias();

    lista.innerHTML = "";

    if (categorias.length === 0) {
        lista.innerHTML = "<p>No hay categorias creadas todavia.</p>";
        return;
    }

    categorias.forEach(function(c){
        const div = document.createElement("div");
        div.classList.add("tarjeta-categoria");

        div.innerHTML =
            `<div class="cat-info">
                <span class="cat-color" style="background-color: ${c.color}"></span>
                <span class="cat-nombre">${c.nombre}</span>
            </div>
            <button class="btn-eliminar" onclick="borrarCategoria(${c.id})">🗑 Eliminar</button>`;
        
        lista.appendChild(div);
    });
}