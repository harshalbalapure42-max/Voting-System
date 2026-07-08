const { connection } = require ("./config/db") ; 
const showVoter = (req, resp) => { 
    connection.query ("select * from register", (err, result) => { 
        if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
    })
}
module.exports = { showVoter } ; 