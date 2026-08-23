const { connection } = require ("./config/db") ; 
const db = connection.promise () ; 
const model = async (voter_id, email, password) => { 
    const [result] = await db.query ("select * from voters where voter_id = ? and email = ?", [voter_id, email]) ; 
    if (result.length===0) return { exists : false } ; 
    return { exists : true, result } ; 
}
module.exports = { model } ; 