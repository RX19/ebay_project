function actualizarCantidadCarrito() {
    let cantidadCarrito = localStorage.getItem('carritoCantidad') || 0;
    console.log(localStorage.getItem('carritoCantidad'));
    console.log("Cantidad en el carrito:", cantidadCarrito); 
    document.getElementById('cuenta-carrito').textContent = cantidadCarrito;
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarNumeroCarrito();
});
