const { connection } = require ("./config/db") ; 
const register = (req, resp) => { 
    connection.query ("insert into register (name, surname, age, password) values (?, ?, ?, ?)", [name, surname, age, password], (err) => { 
        if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
    })
}
module.exports = { register } ; 