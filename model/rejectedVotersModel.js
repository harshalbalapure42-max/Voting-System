const { connection } = require ("./config/db") ; 
const db = connection.promise () ; 
const model = async () => { 
    const [result] = await db.query ("select * from rejectedVoters") ; 
    return result ; 
}
module.exports = { model } ; 