function descuentoArticulo(precio, porcentajeDescuento){
    var descuento = precio * (porcentajeDescuento/100)
    return descuento;          
}

var articulos = [
    {
        URLImagen: 'Dell Optiplex 380 i5-10500.jpg', 
        nombre: 'Dell OptiPlex 3080 Core i5-10500 3,10 GHz 16 GB RAM 256 GB SSD SIN SISTEMA OPERATIVO',
        estado: 'Nuevo',
        precio: 249.45,
        porcentajeDescuento: 10,
        precioEnvio: 12.43
    },
    {
        URLImagen: 'HP Slim S01-aF2023w Pentium.png', 
        nombre: 'HP Slim S01-aF2023w Pentium plateado J5040 3,2 GHz 8 GB 256 GB SSD Win 11',
        estado: 'Nuevo',
        precio: 139.99,
        porcentajeDescuento: 0,
        precioEnvio: 18.10
    },
    {
        URLImagen: 'Dell PC SFF procesador Intel 8 GB RAM 500 GB HDD Windows 10 Wi-Fi.png', 
        nombre: 'Dell PC SFF procesador Intel 8 GB RAM 500 GB HDD Windows 10 Wi-Fi',
        estado: 'Usado',
        precio: 74.98,
        porcentajeDescuento: 0,
        precioEnvio: 16.01
    },
    {
        URLImagen: 'Computadora de escritorio para juegos PC i7 32 GB DDR4 256 GB SSD NVIDIA GTX 745 W11 RGB.png', 
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
                <img src="../images/${articulo.URLImagen}">
            </div>
            <div class="informacion_articulo">
                <div class="informacion_articulo_top">
                    <span name="nombre">${articulo.nombre}</span>
                    <span name="estado">Estado: ${articulo.estado} </span>         
                </div>
                <div class="informacion_articulo_bottom">
                    <div class="division">
                        <span>PRECIO DEL ARTICULO:</span>
                        <span name="precio">$ ${articulo.precio}</span>
                        <span name="envio">+$ ${articulo.precioEnvio}</span>
                    </div>
                    <div class="division">
                        <span>$FINALIZACION</span>
                        <span name="fecha">24-Mar</span>
                        <span name="hora">15:00</span>
                    </div>
                    <div class="division">
                        <span>VENDEDOR</span>
                        <span><a class="vendedor" href="#">Juan Perez</a></span>
                        <span name="calificacion">98% de aprovacion</span>
                    </div>
                </div>
            </div>
            <div class="botones">
                <button class="mejor">¡Hacer una mejor oferta!</button>
                <button>Más acciones</button>
            </div>
        </div>`;
    });
    
}
generarArticulos();