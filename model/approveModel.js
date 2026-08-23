const { connection } = require ("./config/db") ; 
const db = connection.promise () ; 
const model = async (name, surname, age, email, password) => { 
    const [result] = await db.query ("select * from registeredVoters where email = ?", [email]) ; 
    if (result.length===0) return { exists : false } ; 
    const [result2] = await db.query ("insert into voters (name, surname, age, email, password, vote) values (?, ?, ?, ?, ?, ?)", [name, surname, age, email, password, 0]) ; 
    const [result3] = await db.query ("delete from registeredVoters where name = ? and surname = ? and email = ?", [name, surname, email]) ; 
    return { exists : true, result2, result3 } ; 
}
module.exports = { model } ; 