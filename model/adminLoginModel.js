const { connection } = require ("./config/db") ; 
const login = (req, resp) => { 
    connection.query ("select * from admin where username = ?", [username], (err) => { 
        if (err) return console.log (err) ; 
    })
}
module.exports = { login } ; 