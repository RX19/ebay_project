
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

//middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// importar las rutas del carrito
const carritoRoutes = require('./routes/carritoRoutes');

// usar las rutas del carrito
app.use('/api/carrito', carritoRoutes);

// escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
