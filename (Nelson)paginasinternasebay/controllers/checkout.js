document.addEventListener('DOMContentLoaded', () => {
    const resumenCarrito = document.getElementById('resumen-carrito');
    const productos = JSON.parse(localStorage.getItem('cosas')) || [];

    // Actualiza el número del carrito en el navbar
    actualizarNumeroCarrito();

    if (productos.length === 0) {
        resumenCarrito.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        productos.forEach(producto => {
            const productoResumen = document.createElement('div');
            productoResumen.classList.add('resumen-producto');
            productoResumen.innerHTML = `
                <img src="/img/${producto.id}.png" alt="Imagen de ${producto.name}">
                <h3>${producto.name}</h3>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Total: $${producto.precio * producto.cantidad}</p>
            `;
            resumenCarrito.appendChild(productoResumen);
        });

        const totalPrecio = productos.reduce((acum, current) => acum + (current.cantidad * current.precio), 0);
        const totalResumen = document.createElement('div');
        totalResumen.classList.add('total-resumen');
        totalResumen.innerHTML = `<h2>Total a pagar: $${totalPrecio}</h2>`;
        resumenCarrito.appendChild(totalResumen);
    }

    document.getElementById('proceder-pago').addEventListener('click', () => {
        procederPago();
    });
});

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem('cosas')) || [];
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    document.getElementById('cuenta-carrito').innerText = cuenta;
}

function procederPago() {
    window.location.href = "/(Nelson)paginasinternasebay/public/informacionpago.html"; // Nueva página para información de pago
}

