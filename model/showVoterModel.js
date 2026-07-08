const { connection } = require ("./config/db") ; 
const show = (req, resp) => { 
    connection.query ("select * from voter", callback => { 
    })
} 
module.exports = { show } ; 