const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { reject } = require ("../model/deleteRejectedModel") ; 
const bcrypt = require ("bcryptjs") ; 
const deleteRejected = (req, resp) => { 
    const { name, surname, age, password } = req.body ; 
    connection.query ("delete from rejectedVoters where name = ? && surname = ? && password = ?", [name ,surname, password], (err) => { 
        if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
        resp.send ("Deleted successfully.") ; 
    })
}
module.exports = { deleteRejected } ; 