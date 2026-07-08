const path = require ("path") ; 
const voter = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/voter.html")) ; 
}
module.exports = { voter } ; 