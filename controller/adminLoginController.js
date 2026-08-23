const path = require ("path") ; 
const adminLogin = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/adminLogin.html")) ; 
}
module.exports = { adminLogin } ; 