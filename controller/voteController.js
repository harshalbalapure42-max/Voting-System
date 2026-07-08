const path = require ("path") ; 
const vote = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/vote.html")) ; 
}
module.exports = { vote } ; 