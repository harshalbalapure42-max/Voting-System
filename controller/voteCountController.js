const { model } = require ("../model/voteCountModel") ; 
const voteCount = async (req, resp) => { 
    try { 
                if (!req.session.username) return resp.send ("Login first.") ; 
        const result = await model () ; 
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
            <link rel = "stylesheet" href = "/table.css">
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
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { voteCount } ; 