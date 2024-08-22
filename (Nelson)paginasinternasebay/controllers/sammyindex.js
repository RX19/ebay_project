const contenedorTargetas = document.getElementById("productos-container");

function crearTargetaProductosInicio(productos) {
productos.forEach(producto => {
  const nuevacosa = document.createElement("div");
  nuevacosa.classList = "targeta-producto";
  nuevacosa.innerHTML = `
    <img src="/img/${producto.id}.png" alt="Imagen de ${producto.name}">
    <h3>${producto.name}</h3>
    <p>Precio: $${producto.precio}</p>
    <button>Agregar al carrito</button>
  `;
  contenedorTargetas.appendChild(nuevacosa);
}); 
}

crearTargetaProductosInicio(cosas);
