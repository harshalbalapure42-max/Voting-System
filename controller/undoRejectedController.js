const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { undo } = require ("../model/undoRejectedModel") ; 
const undoRejected = (req, resp) => { 
    const { name, surname, age, password } = req.body ; 
    connection.query ("insert into register (name, surname, age, password) values (?, ?, ?, ?)", [name, surname, age, password], (err) => { 
        connection.query ("delete from rejectedVoters where name = ? && surname = ? && password = ?", [name, surname, password], (err) => { 
            if (err) { 
                console.log (err) ; 
                return resp.send ("Database error.") ; 
            }
            resp.send ("Rejected voter added to registered voter's list again.") ; 
        })
    })
}
module.exports = { undoRejected } ; 
