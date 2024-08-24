const express = require('express');
const app = express();
const path = require('path');
const port = 8888;

app.use('/', express.static(path.join(__dirname, 'public/html')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.listen(port, function(){
    console.log(`Se levanto el servidor en http://localhost:${port}`);
});