const { connection } = require ("./config/db") ; 
const voters = (req, resp) => { 
    connection.query ("select * from rejectedVoters", callback => { 

    })
}
module.exports = { voters } ; 