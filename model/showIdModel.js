const { connection } = require ("./config/db") ; 
const db = connection.promise () ; 
const model = async (name, surname, email, password) => { 
    const [result] = await db.query ("select * from voters where name = ? and surname = ? and email = ?", [name, surname, email]) ; 
    if (result.length===0) return { exists : false } ; 
    return { result, exists : true } ; 
}
module.exports = { model } ; 