function generarIdTarea() {
    const tareas = obtenerTareas();
    const numero = tareas.length + 1;
    return "task-" + String(numero).padStart(3,"0");
}

function crearTarea(titulo, descripcion, fecha, categoria, prioridad) {
    return {
        id: generarIdTarea(),
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha,
        categoria: categoria,
        prioridad: prioridad,
        terminada: false
    };
}


function crearCategoria(nombre, color){
    return {
        id: Date.now() + Math.floor(Math.random() * 1000),
        nombre: nombre,
        color: color
    };
}