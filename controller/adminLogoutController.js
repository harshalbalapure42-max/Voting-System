const path = require ("path") ; 
const logout = (req, resp) => { 
    req.session.destroy () ; 
    resp.redirect ("/") ; 
}
module.exports = { logout }