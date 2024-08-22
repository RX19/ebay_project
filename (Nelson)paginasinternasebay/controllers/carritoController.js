const oracledb = require('oracledb');
const openConnection = require('../config/dbconfig');

// agregar o actualizar productos en el carrito
exports.agregarProducto = async (req, res) => {
    const { productoId, cantidad, carritoId } = req.body;
    
    let connection;
    try {
        connection = await openConnection();

        //ver si el producto ya está en el carrito
        const result = await connection.execute(
            `SELECT CANTIDAD FROM C##EBAY.TBL_CARRITOS WHERE ID_CARRITO = :carritoId AND ID_VENTA = :productoId`,
            [carritoId, productoId]
        );

        if (result.rows.length > 0) {
            // si el producto ya está en el carrito, actualizamos la cantidad
            await connection.execute(
                `UPDATE C##EBAY.TBL_CARRITOS SET CANTIDAD = :cantidad WHERE ID_CARRITO = :carritoId AND ID_VENTA = :productoId`,
                [cantidad, carritoId, productoId],
                { autoCommit: true }
            );
            res.status(200).json({ mensaje: `Cantidad del producto ${productoId} actualizada en el carrito.` });
        } else {
            // si el producto no está en el carrito, lo agregamos
            await connection.execute(
                `INSERT INTO C##EBAY.TBL_CARRITOS (ID_CARRITO, ID_VENTA, CANTIDAD) VALUES (:carritoId, :productoId, :cantidad)`,
                [carritoId, productoId, cantidad],
                { autoCommit: true }
            );
            res.status(200).json({ mensaje: `Producto ${productoId} agregado al carrito.` });
        }
    } catch (err) {
        console.error('Error al agregar/actualizar producto en el carrito:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error al cerrar la conexión:', err);
            }
        }
    }
};

//eliminar productos del carrito
exports.eliminarProducto = async (req, res) => {
    const { productoId, carritoId } = req.body;

    let connection;
    try {
        connection = await openConnection();

        await connection.execute(
            `DELETE FROM C##EBAY.TBL_CARRITOS WHERE ID_CARRITO = :carritoId AND ID_VENTA = :productoId`,
            [carritoId, productoId],
            { autoCommit: true }
        );

        res.status(200).json({ mensaje: `Producto ${productoId} eliminado del carrito.` });
    } catch (err) {
        console.error('Error al eliminar producto del carrito:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error al cerrar la conexión:', err);
            }
        }
    }
};

// función para proceder con el pago
exports.iniciarPago = async (req, res) => {
    const { carritoId, usuarioId, metodoPagoId, direccionEnvioId } = req.body;

    let connection;
    try {
        connection = await openConnection();
        
        // iniciar una transacción
        await connection.execute('BEGIN', [], { autoCommit: false });

        // obtener los productos en el carrito
        const carrito = await connection.execute(
            `SELECT ID_VENTA, CANTIDAD FROM C##EBAY.TBL_CARRITOS WHERE ID_CARRITO = :carritoId`,
            [carritoId]
        );

        if (carrito.rows.length === 0) {
            throw new Error('El carrito está vacío.');
        }

        // procesar cada producto en el carrito
        for (let item of carrito.rows) {
            const [ventaId, cantidad] = item;

            // obtenemos detalles del artículo y el precio
            const venta = await connection.execute(
                `SELECT ID_ARTICULO, PRECIO FROM C##EBAY.TBL_VENTAS WHERE ID_VENTA = :ventaId`,
                [ventaId]
            );

            if (venta.rows.length === 0) {
                throw new Error(`El artículo para la venta ${ventaId} no existe.`);
            }

            const [articuloId, precio] = venta.rows[0];

            // Insertar en TBL_VENTAS
            await connection.execute(
                `INSERT INTO C##EBAY.TBL_VENTAS (ID_VENTA, ID_ARTICULO, PRECIO, FECHA_PUBLICACION) VALUES (:ventaId, :articuloId, :precio, SYSDATE)`,
                [ventaId, articuloId, precio]
            );
        }

        // asignamosla dirección de envío
        await connection.execute(
            `UPDATE C##EBAY.TBL_DIRECCIONES_ENVIO SET ID_DIRECCION = :direccionEnvioId WHERE ID_USUARIO = :usuarioId AND PRIORIDAD = '1'`,
            [direccionEnvioId, usuarioId]
        );

        // registramos el método de pago
        await connection.execute(
            `INSERT INTO C##EBAY.TBL_METODOS_PAGO_X_USUARIO (ID_USUARIO, ID_METODO_PAGO) VALUES (:usuarioId, :metodoPagoId)`,
            [usuarioId, metodoPagoId]
        );

        // vaciamos el carrito
        await connection.execute(
            `DELETE FROM C##EBAY.TBL_CARRITOS WHERE ID_CARRITO = :carritoId`,
            [carritoId]
        );

        // confirmamos la transacción
        await connection.execute('COMMIT');

        res.status(200).json({ mensaje: 'Proceso de pago completado con éxito.' });

    } catch (err) {
        // revertimos la transacción en caso de error
        if (connection) {
            await connection.execute('ROLLBACK');
        }
        console.error('Error al procesar el pago:', err);
        res.status(500).json({ error: 'Error al procesar el pago. Transacción revertida.' });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error al cerrar la conexión:', err);
            }
        }
    }
};
