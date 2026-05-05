function crearCategoria(nombre, color){
    return {
        id: Date.now(),
        nombre: nombre,
        color: color
    };
}