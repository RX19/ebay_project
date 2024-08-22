function agregarAlCarrito(producto){
    const memoria = localStorage.getItem("cosas")
    console.log(memoria)
    if(!memoria) {
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("cosas",JSON.stringify([nuevoProducto]));
    }
}