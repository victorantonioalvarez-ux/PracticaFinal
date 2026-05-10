function mostrarTareas(){
    const tareas = obtenerTareas();

    const pendientes = tareas.filter(function(t){
        return t.realizada === false;
    });

    const terminadas = tareas.filter(function(t){
        return t.realizada === true;
    });

    const listaPendientes = docuemnt.querySelectorAll(".lista-tareas")[0];
    const listaTerminadas = docuemnt.querySelectorAll(".lista-tareas")[0];

    listaPendientes.innerHTML = "";
    listaTerminadas.innerHTML = "";

    if (pendientes.length === 0) {
        listaPendientes.innerHTML = "<p>No hay tareas pendientes.</p>";
    } else {
        pendientes.array.forEach(function(tareas) {
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