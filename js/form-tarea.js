
document.addEventListener("DOMContentLoaded", function(){

    cargarCategorias();

    const formTareas = document.getElementById("form-tareas");

    formTareas.addEventListener("submit", function(event){
        event.preventDefault();

        const titulo = document.getElementById("titulo-tarea").value;
        const descripcion = document.getElementById("descripcion").value;
        const fecha = document.getElementById("fecha").value;
        const categoria = document.getElementById("categoria").value;
        const prioridad = document.getElementById("prioridad").value;

        if (titulo === "") {
            alert("El titulo no puede estar vacío.")
            return;
        }
        if (descripcion === "") {
            alert("La descripcion no puede estar vacío.")
            return;
        }
        if (fecha === "") {
            alert("La fecha no puede estar vacío.")
            return;
        }

        const nuevaTarea = crearTarea(titulo, descripcion, fecha, categoria, prioridad);
        agregarTarea(nuevaTarea);
        
        alert("Tarea creada correctamente.");
        formTareas.reset()
        cargarCategorias();
        
    });
});

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

    categorias.forEach(function(c){
        const opcion = document.createElement("option");
        opcion.value = c.nombre;
        opcion.textContent = c.nombre;
        select.appendChild(opcion);
    });
}

