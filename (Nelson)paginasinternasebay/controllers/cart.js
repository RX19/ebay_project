const contenedorTargetas = document.getElementById("productos-container");

function crearTargetaProductosInicio() {
    contenedorTargetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem('cosas'));
    
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevacosa = document.createElement("div");
            nuevacosa.classList = "targeta-producto";
            nuevacosa.innerHTML = `
                <img src="/img/${producto.id}.png" alt="Imagen de ${producto.name}">
                <h3>${producto.name}</h3>
                <p>Precio: $${producto.precio}</p>
                <section id="hola">
                <div class="cantidad-control">
                    <button>-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button>+</button>
                </div>
                </section>
            `;

            contenedorTargetas.appendChild(nuevacosa);

            nuevacosa
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const nuevaCantidad = agregarAlCarrito(producto);
                    const cuentaElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
                    cuentaElement.innerText = nuevaCantidad;
                    actualizarTotales();
                });

            nuevacosa
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    const nuevaCantidad = restarAlCarrito(producto);
                    const cuentaElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
                    cuentaElement.innerText = nuevaCantidad;
                    if (nuevaCantidad === 0) {
                        crearTargetaProductosInicio(); // Refresca las tarjetas si la cantidad llega a 0
                    }
                    actualizarTotales();
                });
        });
        
    } else {
        actualizarTotales();
    }
}

crearTargetaProductosInicio();

// Aquí agregas el código para redirigir al checkout al hacer clic en "Comprar"
document.getElementById('boton-comprar').addEventListener('click', () => {
    window.location.href = "/(Nelson)paginasinternasebay/public/checkout.html";
});
