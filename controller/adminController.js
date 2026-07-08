const path = require ("path") ; 
const admin = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/admin.html")) ; 
}
module.exports = { admin } ; 