const path = require ("path") ; 
const voterLogin = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/voterLogin.html")) ; 
}
module.exports = { voterLogin } ; 