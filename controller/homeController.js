const path = require ("path") ; 
const home = (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/home.html") ) ; 
}
module.exports = { home } ; 
