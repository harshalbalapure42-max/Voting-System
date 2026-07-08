const { connection } = require ("./config/db") ; 
const voter = (req, resp) => { 
    connection.query ("select * from voter where voterId = ?", [voterId], callback => { 
        
    })
}
module.exports = { voter } ; 