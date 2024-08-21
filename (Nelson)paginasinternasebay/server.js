//CARRITO
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Importar las rutas del carrito
const carritoRoutes = require('./routes/carritoRoutes');

// Usar las rutas
app.use('/api/carrito', carritoRoutes);

// Escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

