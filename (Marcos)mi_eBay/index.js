const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 8888;
const app = express();

/*conexion a la base de datos*/
var database = require('./modules/database');
database.conectar();

/*modulos*/
const prueba = require('./modules/prueba');

/*rutas*/
var articulosRouter = require('./routes/vistos_recientemente_router');

/*Identifica que tipo de archivo es y le asigna una ruta a seguir*/
app.use('/', express.static(path.join(__dirname, 'public/html')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', function(req,res){
    res.send(prueba.showTables());
});

/*Permite peticiones de otros origenes y pobla el body*/
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/vistos_recientemente', articulosRouter);

/*Establece la conexion con el servidor*/
app.listen(port, function(){
    console.log(`Se levanto el servidor en http://localhost:${port}`);
});