const { connection } = require ("./config/db") ; 
const db = connection.promise () ; 
const model = async (name, surname, age, email, password) => { 
    const [result] = await db.query ("select * from registeredVoters where email = ?", [email]) ; 
    if (result.length>0) return { exists : true } ; 
    const [result2] = await db.query ("select * from voters where email = ?", [email]) ; 
    if (result2.length>0) return { exists : true } ; 
    const [result3] = await db.query ("select * from rejectedVoters where email = ?", [email]) ; 
    if (result3.length>0) return { exists : true } ; 
    const [result4] = await db.query ("insert into registeredVoters (name, surname, age, email, password) values (?, ?, ?, ?, ?)", [name, surname, age, email, password]) ; 
    return { exists : false, result4 } ; 
}
module.exports = { model } ; 