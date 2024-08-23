document.addEventListener('DOMContentLoaded', () => {
    actualizarNumeroCarrito(); // Actualiza el número del carrito en el navbar

    const formularioPago = document.getElementById('formulario-pago');
    formularioPago.addEventListener('submit', (event) => {
        event.preventDefault();
        confirmarPago();
    });

    // Configuración del modal
    const modal = document.getElementById('modal-confirmacion');
    const closeButton = document.querySelector('.close-button');
    const cerrarModalButton = document.getElementById('cerrar-modal');

    closeButton.addEventListener('click', cerrarModal);
    cerrarModalButton.addEventListener('click', cerrarModal);

    function cerrarModal() {
        modal.style.display = 'none';
        window.location.href = "/(Nelson)paginasinternasebay/public/outlet.html"; // Redirigir a outlet después de cerrar el modal
    }
});

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem('cosas')) || [];
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    document.getElementById('cuenta-carrito').innerText = cuenta;
}

function confirmarPago() {
    alert("Pago confirmado. ¡Gracias por su compra!");
    localStorage.removeItem('cosas'); 
    actualizarNumeroCarrito(); 

    
    const modal = document.getElementById('modal-confirmacion');
    modal.style.display = 'flex';
}
