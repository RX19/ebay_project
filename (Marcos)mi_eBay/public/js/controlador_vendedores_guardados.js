var articulos = [
    {
        URLImagen: 'autoparts-kingdom.jfif', 
        nombre: 'autoparts-kingdom',
    },
    {
        URLImagen: 'foxtec-inc.jfif', 
        nombre: 'foxtec-inc',
    },{
        URLImagen: 'ron.t55.png', 
        nombre: 'ron.t55',
    },{
        URLImagen: 'tech.pros.png', 
        nombre: 'tech.pros',
    },
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
                <span name="nombre">${articulo.nombre}</span>
                <span name="pagina">${articulo.nombre}</span>
            </div>
        </div>`;
    });
    
}
generarArticulos();