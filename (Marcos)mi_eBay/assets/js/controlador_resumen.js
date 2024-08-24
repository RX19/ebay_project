function descuentoArticulo(precio, porcentajeDescuento){
    var descuento = precio * (porcentajeDescuento/100)
    return descuento;          
}

var articulos = [
    {
        URLImagen: '/images/Dell Optiplex 380 i5-10500.jpg', 
        nombre: 'Dell OptiPlex 3080 Core i5-10500 3,10 GHz 16 GB RAM 256 GB SSD SIN SISTEMA OPERATIVO',
        estado: 'Nuevo',
        precio: 249.45,
        porcentajeDescuento: 10,
        precioEnvio: 12.43
    },
    {
        URLImagen: '/images/HP Slim S01-aF2023w Pentium.png', 
        nombre: 'HP Slim S01-aF2023w Pentium plateado J5040 3,2 GHz 8 GB 256 GB SSD Win 11',
        estado: 'Nuevo',
        precio: 139.99,
        porcentajeDescuento: 0,
        precioEnvio: 18.10
    },
    {
        URLImagen: '/images/Dell PC SFF procesador Intel 8 GB RAM 500 GB HDD Windows 10 Wi-Fi.png', 
        nombre: 'Dell PC SFF procesador Intel 8 GB RAM 500 GB HDD Windows 10 Wi-Fi',
        estado: 'Usado',
        precio: 74.98,
        porcentajeDescuento: 0,
        precioEnvio: 16.01
    },
    {
        URLImagen: '/images/Computadora de escritorio para juegos PC i7 32 GB DDR4 256 GB SSD NVIDIA GTX 745 W11 RGB.png', 
        nombre: 'Computadora de escritorio para juegos PC i7 32 GB DDR4 256 GB SSD NVIDIA GTX 745 W11 RGB',
        estado: 'Nuevo',
        precio: 329.99,
        porcentajeDescuento: 5,
        precioEnvio: 35.81
    }
];

function generarArticulos(){
    var subContainer = document.getElementById('sub-container');
    
    articulos.forEach(articulo => {

        subContainer.innerHTML +=
        `<div class="articulo">
            <div class="imagen_articulo">
                <img src="../assets${articulo.URLImagen}">
            </div>
            <div class="division">
                <span name="nombre">${articulo.nombre}</span>
                <span> usuario | estrellas | calificacion</span>
                <span> Estado: Nuevo </span>
            </div>
            <div class="division_fecha">
                <span name="fecha">24-Mar</span>
                <span name="hora">15:00</span>
            </div>
            <div class="division_precio">
                <span name="precio">$ 400.25</span>
                <span>¡Compralo ahora o has una mejor oferta!</span>
                <span name="envio">$15.36</span>
            </div>
            <div class="botones">
                <button class="compralo">¡Comprálo ahora!</button>
                <button>Hacer una mejor oferta</button>
                <button>Más acciones</button>
            </div>
        </div>`;
    });
    
}
generarArticulos();