const path = require ("path") ; 
const { adminLogin } = require ("../controller/adminLoginController") ; 
const adminAuth = (req, resp) => { 
    if (req.session.username) { 
   return resp.sendFile (path.join (__dirname, "../view/adminAuth.html")) ; 
 
    }
    resp.send ("Login first") ; 
}
module.exports = { adminAuth } ; 