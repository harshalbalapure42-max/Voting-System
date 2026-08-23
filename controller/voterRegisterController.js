const path = require ("path") ; 
const voterRegister = async (req, resp) => { 
    resp.sendFile (path.join (__dirname, "../view/voterRegister.html")) ;
}
module.exports = { voterRegister } ; 