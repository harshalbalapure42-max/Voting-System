const { connection } = require ("./config/db") ; 
const db = connection.promise () ;
const model = async (name, surname, age, email) => { 
    const [result] = await db.query ("select * from registeredVoters") ; 
    return result ; 
}
module.exports = { model } ; 