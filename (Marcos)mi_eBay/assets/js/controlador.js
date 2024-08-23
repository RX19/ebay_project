function descuentoArticulo(precio, porcentajeDescuento){
    var descuento = precio * (porcentajeDescuento/100);
    console.log(descuento);
    return descuento;          
}

var articulos = [
    {
        URLImagen: '/images/Dell Optiplex 380 i5-10500.jpg', 
        nombre: 'Dell OptiPlex 3080 Core i5-10500 3,10 GHz 16 GB RAM 256 GB SSD SIN SISTEMA OPERATIVO',
        precio: 249.45,
        porcentajeDescuento: 10,
        precioEnvio: 12.43
    },
    {
        URLImagen: '/images/HP Slim S01-aF2023w Pentium.png', 
        nombre: 'HP Slim S01-aF2023w Pentium plateado J5040 3,2 GHz 8 GB 256 GB SSD Win 11',
        precio: 139.99,
        porcentajeDescuento: 0,
        precioEnvio: 18.10
    },
    {
        URLImagen: '/images/Dell PC SFF procesador Intel 8 GB RAM 500 GB HDD Windows 10 Wi-Fi.png', 
        nombre: 'Dell PC SFF procesador Intel 8 GB RAM 500 GB HDD Windows 10 Wi-Fi',
        precio: 74.98,
        porcentajeDescuento: 0,
        precioEnvio: 16.01
    },
    {
        URLImagen: '/images/Computadora de escritorio para juegos PC i7 32 GB DDR4 256 GB SSD NVIDIA GTX 745 W11 RGB.png', 
        nombre: 'Computadora de escritorio para juegos PC i7 32 GB DDR4 256 GB SSD NVIDIA GTX 745 W11 RGB',
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
            <div class="informacion_articulo">
                <span name="nombre">${articulo.nombre}</span>
                <span name="precio">US $${articulo.precio - descuentoArticulo(articulo.precio,articulo.porcentajeDescuento)}</span>
                <span name="descuento">${articulo.precio}</span>
                <span name="envio"> + US $${articulo.precioEnvio}</span>
                <span name="compra_subasta">¡Cómpralo ahora!</span>
                <span name="informacion_extra">Finalizado</span>
            </div>
        </div>`;
    });
}
generarArticulos();

