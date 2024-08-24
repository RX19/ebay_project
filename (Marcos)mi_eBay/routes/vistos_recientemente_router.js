var express = require('express');
var router = express.Router();

var articulos = [
    {
        nombre: 'Articulo 1'
    }
];

//Agregar un articulo.
router.post('/', function(req, res){
    let articulo = {
        nombre: req.body.nombre,
    }
    articulos.push(articulo);
    res.send({mensaje:'Articulo Agregado'});
});

//Mostrar 1 articulo.
router.get('/:id', function(req, res){
    if (req.params.id > (articulos.length -1)){
        res.send({Mensaje:'El articulo no existe'});
    } else {
        res.send(articulos[req.params.id]);
    }
});

//Mostrar todos los articulo.
router.get('/', function(req, res){
    res.send(articulos);
});

//Actualizar 1 articulo.
router.put('/:id', function(req, res){
    let articulo = {
        nombre: req.body.nombre,
    }
    articulos[req.params.id] = articulo;
    res.send({mensaje:'Articulo Actualizado'});
});

//Eliminar 1 articulo.
router.delete('/:id', function(req, res){
    if (req.params.id > (articulos.length -1)){
        res.send({Mensaje:'El articulo no existe'});
    } else {
        articulos.splice(req.params.id, 1);
        res.send({Mensaje:'El articulo se ha eliminado'});
    }
});

module.exports = router;