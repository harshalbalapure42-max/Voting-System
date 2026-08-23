const path = require ("path") ; 
const getAdminAuth = (req, resp) => { 
    if (!req.session.username) return resp.send ("Login first.") ; 
    resp.sendFile (path.join (__dirname, "../view/adminAuth.html")) ; 
}
module.exports = { getAdminAuth } ; 