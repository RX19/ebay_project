
const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// Ruta para agregar o actualizar productos en el carrito
router.post('/agregar', carritoController.agregarProducto);

// Ruta para eliminar un producto del carrito
router.delete('/eliminar', carritoController.eliminarProducto);

// Ruta para iniciar el proceso de pago
router.post('/pagar', carritoController.iniciarPago);

module.exports = router;
