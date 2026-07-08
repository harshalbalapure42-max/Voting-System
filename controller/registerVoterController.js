const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { register } = require ("../model/registerVoterModel") ; 
const bcrypt = require ("bcryptjs") ; 
const registerVoter = (req, resp) => { 
    const {name, surname, age, password, password2} = req.body ; 
    const a = Number (age) ; 
    if (password===password2) { 
    bcrypt.hash (password, 10, (err, hashedPassword) => { 
        connection.query ("insert into register (name, surname, age, password) values (?, ?, ?, ?)", [name, surname, a, hashedPassword], (err) => { 
            if (err) { 
                console.log (err) ; 
                return resp.send ("Database error.") ; 
            }
            else if (a<18) { 
                connection.query ("delete from register where name =? && surname = ? && password = ?", [name, surname, hashedPassword], (err) => { 
                    if (err) { 
                        console.log (err) ; 
                        return resp.send ("Database error.") ; 
                    }
                })
                return resp.send ("Age should be 18+ for registration.") ; 
            }
            resp.send ("Voter name registered successfully.") ; 
        })
    }) }
   else resp.send ("Password 1 and password 2 don't match") ; 
}
 module.exports = { registerVoter } ; 