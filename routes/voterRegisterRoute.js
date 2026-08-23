const router = require ("express").Router () ; 
const { voterRegister } = require ("../controller/voterRegisterController") ; 
router.get ("/voterRegister", voterRegister) ; 
module.exports = router ; 