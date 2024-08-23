import openConnection from '../config/dbconfig.js';

async function testConnection() {
  let connection;
  try {
    connection = await openConnection();
    console.log('Conexión exitosa');
  } catch (err) {
    console.error('Error en la conexión', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log('Conexión cerrada');
      } catch (err) {
        console.error('Error al cerrar la conexión', err);
      }
    }
  }
}

testConnection();

