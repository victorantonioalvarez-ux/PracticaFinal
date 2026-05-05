import Category from "modelos.js"

document.addEventListener("DOMContentLoaded",function(){
    
    mostrarCategorias();

    const formCategory = document.getElementById("form-categorias");

    category.addEventListener("submit", function(event){
        event.preventDefault();

        const name = getElementById("nueva-categoria");
        const color = getElementById("color-categoria");

        if (nombre === ""){
            alert("El nombre de la categoria no puede estar vacio.");
            return;
        }

    });

    const nuevacategoria = crearCategoria(nombre, color);
    agregarCategoria(nuevaCategoria);

    formCategory.requestFullscreen();
    mostrarCategorias();
});