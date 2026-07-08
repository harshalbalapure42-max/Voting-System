const path = require ("path") ; 
const bcrypt = require ("bcryptjs") ; 
const { connection } = require ("../model/config/db") ; 
const { login } = require ("../model/adminLoginModel") ; 
const adminLogin = (req, resp) => { 
    const { username, password } = req.body ; 
    connection.query ("select * from admin where username = ?", [username], (err, result) => { 
        const user = result [0] ; 
        bcrypt.compare (password, user.password, (err, result) => { 
            if (err) { 
                console.log (err) ; 
                return resp.send ("Database error.") ; 
            }
            else if (!result) return resp.send ("Wrong username or password.") ; 
            else { 
                req.session.username = user.username ; 
                 resp.redirect ("/adminAuth") ; 
            }
        })
    })
}
module.exports = { adminLogin } ; 