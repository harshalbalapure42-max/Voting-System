const router = require ("express").Router () ; 
const { voterLogin } = require ("../controller/voterLoginController") ; 
router.post ("/voterLogin", voterLogin) ; 
module.exports = router ; 