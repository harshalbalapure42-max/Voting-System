const { connection } = require ("../model/config/db") ; 
const { approveVoter } = require ("../model/approveModel") ; 
const approve = (req, resp) => { 
    const {name, surname, age, password} = req.body ; 
    connection.query ("insert into voter (name, surname, age, password) values (?, ?, ?, ?)", [name, surname, age, password], (err) => { 
      connection.query ("delete from register where name = ? && surname = ? && password = ?", [name, surname, password], (err) => { 
          if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
        resp.send ("Registered voter added to the voter's list.") ; 
      })
    })
}
module.exports = { approve } ; 