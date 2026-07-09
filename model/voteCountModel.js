const { connection } = require ("./config/db") ; 
const vote = (req, resp) => { 
    connection.query ("select * from voteCount order by votes desc", callback => { 

    })
}
module.exports = { vote } ; 