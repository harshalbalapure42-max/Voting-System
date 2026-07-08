const { connection } = require ("./config/db") ; 
const undo = (req, resp) => { 
    connection.query ("insert into register (name, surname, age, password) values (?, ?, ?, ?)", callback => { 
        connection.query ("delete from rejectedVoters where name = ? && surname = ? && password = ?", callback => { 

        })
    })
} 
module.exports = { undo } ; 