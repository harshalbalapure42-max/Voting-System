const { connection } = require ("../model/config/db") ; 
const { vote } = require ("../model/voteCountModel") ; 
const voteCount = (req, resp) => { 
    connection.query ("select * from voteCount order by votes desc" , (err, result) => { 
        if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
        let rows = "" ; 
        for (let i=0; i<result.length; i++) { 
            rows += `
            <tr> 
            <td>${result[i].party}</td> 
            <td>${result[i].votes}</td>
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
            <th>Party</th> 
            <th>Votes</th> 
            ${rows} 
            </table> 
            </body> 
            </html> 
            `)
    })
}
module.exports = { voteCount } ; 