const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { rejectVoter } = require ("../model/rejectModel") ; 
const reject = (req, resp) => { 
    const { name, surname, age, password } = req.body ; 
    connection.query ("insert into rejectedVoters (name, surname, age, password) values (?, ?, ?, ?)", [name, surname, age, password], (err) => { 
        connection.query ("delete from register where name = ? && surname = ? && password = ?", [name, surname, password], (err) => { 
            if (err) { 
                console.log (err) ; 
                return resp.send ("Database error.") ; 
            }
            resp.send ("Registered voter moved to rejeted voters list.") ; 
        })
    })
}
module.exports = { reject } ; 