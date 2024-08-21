const oracledb = require('oracledb');

// Configuración de la base de datos
const dbConfig = {
  user: 'C##EBAY',
  password: 'EBAY',
  connectString: 'localhost:1521/ORCLDB', 
};

async function openConnection() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('Conexión a la base de datos establecida');
    return connection;
  } catch (err) {
    console.error('Error al conectar a la base de datos', err);
    throw err;
  }
}

module.exports = openConnection;
