const { connection } = require ("./config/db") ; 
const voter = (req, resp) => { 
    connection.query ("select * from voter where name = ? && surname = ? && age = ?", [name, surname, age], callback => { 

    })
}
module.exports = { voter } ; 
