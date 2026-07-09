const { connection } = require ("../model/config/db") ; 
const { voters } = require ("../model/rejectedVotersModel") ; 
const path = require ("path") ; 
const rejectedVoters = (req, resp) => {
    if (!req.session.username) return resp.send ("Login first.") ; 
    connection.query ("select * from rejectedVoters", (err, result) => { 
        if (err) { 
            return console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
        let rows = "" ; 
        for (let i=0; i<result.length; i++) { 
            rows += `
            <tr> 
            <td>${result[i].name}</td> 
             <td>${result[i].surname}</td> 
              <td>${result[i].age}</td> 
              <td><form action = "/undoRejected" method = "POST"> 
              <input type = "hidden" name = "name" value = "${result[i].name}">
              <input type = "hidden" name = "surname" value = "${result[i].surname}">
              <input type = "hidden" name = "age" value = "${result[i].age}">
              <input type = "hidden" name = "password" value = "${result[i].password}">
              <button type = "submit">Undo</button> 
              </form> 
              <form action = "/deleteRejected" method = "POST"> 
               <input type = "hidden" name = "name" value = "${result[i].name}">
              <input type = "hidden" name = "surname" value = "${result[i].surname}">
              <input type = "hidden" name = "age" value = "${result[i].age}">
              <input type = "hidden" name = "password" value = "${result[i].password}"> 
              <button type = "submit">Delete</button> 
              </form> 
              </td>
            </tr> 
            `
        }
        resp.send (`
            <html> 
            <head> 
            <link rel = "stylesheet" href = "/show.css">
            </head> 
            <body> 
            <table border = "1"> 
            <tr> 
            <th>Name</th> 
            <th>Surname</th> 
            <th>Age</th> 
            <th>Undo/Delete</th>
            </tr> 
            ${rows} 
            </table> 
            </body> 
            </html> 
            `)
    })
}
module.exports = { rejectedVoters } ; 