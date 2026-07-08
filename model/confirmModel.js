const { connection } = require ("./config/db") ; 
const confirmModel = (req, resp) => { 
    connection.query ("update voteCount set votes = votes + 1 where party = ?", [party], (err) => { 
        connection.query ("update voter set vote = 1 where voterId = ?", [voterId], (err) => { 
            
        })
    })
}
module.exports = { confirmModel } ; 