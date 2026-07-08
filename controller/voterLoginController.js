const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { voter } = require ("../model/voterLoginModel") ; 
const bcrypt = require ("bcryptjs") ; 
const voterLogin = (req, resp) => { 
    const { name, surname, password } = req.body ; 
    connection.query ("select * from voter where name = ? && surname = ?", [name, surname], (err, result) => { 
        if (result.length===0) return resp.send ("Incorrect info") ; 
        const user = result[0] ; 
        bcrypt.compare (password, user.password, (err, result) => { 
            if (err) { 
                console.log (err) ; 
                return resp.send ("Database error.") ; 
            }
            else if (!result) return resp.send ("Incorrect") ; 
            
            resp.send (`
                <h3>Voter ID : ${user.voterId}</h3>
                  <h3>Name : ${user.name} ${user.surname}</h3>
                  <h3>Age : ${user.age}</h3>
                `)
        })
    })
}
module.exports = { voterLogin } ; 