const { connection } = require ("./config/db") ; 
const reject = (req, resp) => { 
    connection.query ("select *  from rejectedVoters where name = ? && surname = ? && age = ?", [name, surname, age], callback => { 
        connection.query ("delete from rejectedVoters where password = ?", [password], callback => { 

            
        })
    })
}
module.exports = { reject } ; 