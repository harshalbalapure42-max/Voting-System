const path = require ("path") ; 
const bcrypt = require ("bcryptjs") ; 
const { model } = require ("../model/adminAuthModel") ; 
const adminAuth = async (req, resp) => { 
    try { 
        const { username, password } = req.body ; 
        req.session.username = username ; 
        if (!req.session.username) return resp.send ("Login first.") ; 
        const result = await model (username) ; 
        if (result.length===0) return resp.send ("Username doesn't exist.") ; 
        const hashedPassword = await bcrypt.compare (password, result[0].password) ; 
        if (!hashedPassword) return resp.send ("Invalid username or password.") ; 
        resp.sendFile (path.join (__dirname, "../view/adminAuth.html")) ; 
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { adminAuth } ; 