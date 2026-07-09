const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { showVoter } = require ("../model/showModel") ; 
const show = (req, resp) => { 
    if (!req.session.username) return resp.send ("Login first") ; 
    connection.query ("select * from register", (err, result) => { 
        if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
        let rows = "" ; 
        for (let i=0; i<result.length; i++) { 
            rows += `
            <tr>
            <td>${result[i].name}</td>
            <td>${result[i].surname}</td>
            <td>${result[i].age}</td>
             <td><form action = "/approve" method = "POST"> 
             <input type = "hidden" name = "name" value = "${result[i].name}">
              <input type = "hidden" name = "surname" value = "${result[i].surname}">
               <input type = "hidden" name = "age" value = "${result[i].age}">
                <input type = "hidden" name = "password" value = "${result[i].password}">
                <button type = "submit">Approve</button> 
                </form> 
                  </td>
                  <td>
                <form action = "/reject" method = "POST"> 
                  <input type = "hidden" name = "name" value = "${result[i].name}">
              <input type = "hidden" name = "surname" value = "${result[i].surname}">
               <input type = "hidden" name = "age" value = "${result[i].age}">
                <input type = "hidden" name = "password" value = "${result[i].password}">
                <button type = "submit">Reject</button> 
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
            <th>Name</th>
              <th>Surname</th>
                <th>Age</th>
                <th>Approve</th>
                <th>Reject</th>
                ${rows} 
               
        </table>
        
    </body>
</html>
            `)
    })
}
module.exports = { show } ; 