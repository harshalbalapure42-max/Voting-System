const path = require ("path") ; 
const register = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/register.html")) ; 
}
module.exports = { register } ; 