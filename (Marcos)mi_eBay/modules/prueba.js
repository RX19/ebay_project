const oracle = require('./database');

module.exports.showTables = async function(){
    let con;
    try{
        con = await oracle.conectar();
        const result = await con.execute('SELECT table_name FROM user_tables');
        console.log('Tablas en la base de datos:');
        result.rows.forEach(row => {
            console.log(row[0]);
        });
    }catch(error){
        console.log('Error al mostrar las tablas:', error);
    } finally {
        if (con) {
            try {
                await con.close();
                console.log('Conexión cerrada');
            } catch (e) {
                console.log('No se pudo cerrar la conexión', e);
            }
        }
    }
}