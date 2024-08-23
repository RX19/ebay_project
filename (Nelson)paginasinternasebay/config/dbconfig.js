import oracledb from 'oracledb';

// Configuración de la base de datos
const dbConfig = {
  user: 'C##EBAY',
  password: 'ebay',
  connectString: 'localhost:1521/ORCLCDB', 
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

export default openConnection;
