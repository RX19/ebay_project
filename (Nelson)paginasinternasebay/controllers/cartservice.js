function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("cosas")) || [];
    let cuenta = 0;
    let nuevaMemoria;

    const indiceProducto = memoria.findIndex(cosa => cosa.id === producto.id);

    if (indiceProducto === -1) {
        nuevaMemoria = memoria;
        nuevaMemoria.push(getNuevaProductoParaMemoria(producto));  
        cuenta = 1;         
    } else {
        nuevaMemoria = memoria;
        nuevaMemoria[indiceProducto].cantidad++;
        cuenta = nuevaMemoria[indiceProducto].cantidad;
    }

    localStorage.setItem("cosas", JSON.stringify(nuevaMemoria));
    actualizarNumeroCarrito();
    actualizarTotales();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("cosas")) || [];
    const indiceProducto = memoria.findIndex(cosa => cosa.id === producto.id);
    let cuenta = 0;

    if (indiceProducto !== -1) {
        if (memoria[indiceProducto].cantidad === 1) {
            memoria.splice(indiceProducto, 1); 
        } else {
            memoria[indiceProducto].cantidad--;
            cuenta = memoria[indiceProducto].cantidad;
        }
        localStorage.setItem("cosas", JSON.stringify(memoria));
        actualizarNumeroCarrito();
        actualizarTotales();
    }
    return cuenta;
}

function getNuevaProductoParaMemoria(producto) {
    const nuevoProducto = { ...producto };
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("cosas")) || [];
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    document.getElementById('cuenta-carrito').innerText = cuenta;
}

function actualizarTotales() {
    const memoria = JSON.parse(localStorage.getItem("cosas")) || [];
    const totalUnidades = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    const totalPrecio = memoria.reduce((acum, current) => acum + (current.cantidad * current.precio), 0);
    
    document.getElementById('unidades').innerText = totalUnidades;
    document.getElementById('precio').innerText = totalPrecio;

    // Mostrar u ocultar elementos según el estado del carrito
    const carritoVacio = document.getElementById('carrito-vacio');
    const totalesSection = document.getElementById('totales');

    if (totalUnidades === 0) {
        carritoVacio.style.display = 'block';
        totalesSection.style.display = 'none';
    } else {
        carritoVacio.style.display = 'none';
        totalesSection.style.display = 'block';
    }
}

actualizarNumeroCarrito();
actualizarTotales();
