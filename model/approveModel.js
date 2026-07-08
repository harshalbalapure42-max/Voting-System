const { connection } = require ("./config/db") ; 
const approveVoter = (req, resp) => { 
    connection.query ("insert into voter (name, surname, age, passowrd) values (?, ?, ? ?)",[name, surname, age , password], (err) => { 
   connection.query ("delete from register where name = ? && surname = ? && password = ?", [name, surname, password], (err) => { 
         if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
   })
    })
}
module.exports = { approveVoter } ; 