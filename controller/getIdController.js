const path = require ("path") ; 
const getId = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/getId.html")) ; 
}
module.exports = { getId } ; 