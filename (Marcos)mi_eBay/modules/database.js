const oracledb = require('oracledb');

module.exports.conectar = async function(){
    let con;
    try{
        con = await oracledb.getConnection({
            user: 'c##FACEBOOK',
            password: 'oracle',
            connectionString: "localhost/xe"
        });
        console.log('Conexion Exitosa');
        return con;
    }catch(error){
        console.log('Error: No se pudo conectar', error);
    }
}