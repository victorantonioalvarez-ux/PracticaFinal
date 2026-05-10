function crearCategoria(nombre, color){
    return {
        id: Date.now(),
        nombre: nombre,
        color: color
    };
}

function crearTarea(titulo, descripcion, fecha, categoria, prioridad) {
    return {
        id: generarIdTarea(),
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha,
        categoria: categoria,
        prioridad: prioridad,
        realitzada: false
    };
}

