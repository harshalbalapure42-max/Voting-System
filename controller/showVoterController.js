const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { show } = require ("../model/showVoterModel") ; 
const showVoters = (req, resp) => { 
    if (!req.session.username) return resp.send ("Login first.") ; 
    connection.query ("select * from voter", (err, result) => { 
        if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
        let rows = "" ; 
        for (let i=0; i<result.length; i++) { 
            rows += `
            <tr>
            <td>${result[i].voterId}</td>
            <td>${result[i].name}</td>
            <td>${result[i].surname}</td>
            <td>${result[i].age}</td>
            <td>${result[i].vote}</td>
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
            <th>Voter Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Vote</th>
            ${rows} ; 
        </table>
    </body>
</html>
            `)
    })
}
module.exports = { showVoters } ; 