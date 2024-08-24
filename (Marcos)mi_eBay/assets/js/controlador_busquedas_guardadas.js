var articulos = [
    {
        URLImagen: '/images/Dell Optiplex 380 i5-10500.jpg', 
        nombre: 'Dell OptiPlex',
    },
    {
        URLImagen: '/images/HP Slim S01-aF2023w Pentium.png', 
        nombre: 'HP Slim',
    },
    {
        URLImagen: '/images/Dell PC SFF procesador Intel 8 GB RAM 500 GB HDD Windows 10 Wi-Fi.png', 
        nombre: 'Dell PC SFF',
    },
    {
        URLImagen: '/images/Computadora de escritorio para juegos PC i7 32 GB DDR4 256 GB SSD NVIDIA GTX 745 W11 RGB.png', 
        nombre: 'Computadora de escritorio',
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
            </div>
        </div>`;
    });
    
}
generarArticulos();