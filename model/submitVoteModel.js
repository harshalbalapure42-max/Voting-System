const { connection } = require ("./config/db") ; 
const db = connection.promise () ;  
const model = async (voter_id, party) => { 
    const [result] = await db.query ("update voteCount set votes = votes + 1 where party = ?", [party]) ; 
    return [result2] = await db.query ("update voters set vote = 1 where voter_id = ?", [voter_id]) ;
    return { result, result2 } ; 
}
module.exports = { model } ; 