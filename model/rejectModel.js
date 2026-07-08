const { connection } = require ("../model/config/db") ; 
const rejectVoter = (req, resp) => { 
    connection.query ("insert into rejectedVoters (name, surname, age, password values (?, ?, ?, ?)", [name, surname, age, password], (err) => { 
        connection.query ("delete from register where name = ?, surname = ?, password = ?", [name, surname, password], callback => { 

        })
    })
}
module.exports = { rejectVoter } ; 