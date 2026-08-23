const { connection } = require ("./config/db") ; 
const db = connection.promise () ; 
const model = async (name, surname, age, email, password) => { 
    const [result] = await db.query ("delete from rejectedVoters where name = ?  and surname = ? and email = ?", [name, surname, email]) ; 
    return result ; 
}
module.exports = { model } ; 