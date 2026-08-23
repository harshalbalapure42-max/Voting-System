const { model } = require ("../model/showVotersModel") ; 
const showVoters = async (req, resp) => { 
    try { 
                if (!req.session.username) return resp.send ("Login first.") ; 
        const result = await model () ; 
        let rows = "" ; 
        for (let i=0; i<result.length; i++) { 
            rows += `
            <tr>
            <td>${result[i].voter_id}</td>
            <td>${result[i].name}</td>
            <td>${result[i].surname}</td>
            <td>${result[i].age}</td>
            <td>${result[i].email}</td>
            <td>${result[i].vote}</td>
            </tr>
            `
        }
        resp.send (`
            <html> 
            <head>
            <link rel = "stylesheet" href = "/table.css">
            </head>
            <body> 
            <table border = "1">
            <th>Voter Id</th>
            <th>Name</th> 
            <th>Surname</th>
            <th>Age</th> 
            <th>Email</th> 
            <th>Vote</th>
            ${rows} 
            </table>
            </body>
            </html>
            `)
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { showVoters } ; 