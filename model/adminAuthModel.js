const { connection } = require ("./config/db") ; 
const db = connection.promise () ; 
const model = async (username) => { 
    const [result] = await db.query ("select * from admin where username = ?", [username]) ; 
    return result ; 
}
module.exports = { model } ; 