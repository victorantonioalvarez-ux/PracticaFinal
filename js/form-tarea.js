
function cargarCategorias(){
    const select = document.getElementById("categoria");
    const categorias = obtenerCategorias();

    select.innerHTML = "<option value=''>Selecciona</option>";

    if(categorias.length === 0) {
        const opcion = document.createElement("option");
        opcion.value = "";
        opcion.textContent = "no hay categorias creadas";
        opcion.disabled = true;
        select.appendChild(opcion);
        return;
    }

    catefgorias.forEach(function(c){
        const opcion = document.createElement("option");
        opcion.value = c.nombre;
        opcion.textContent = c.nombre;
        select.appendChild(opcion);
    });
}