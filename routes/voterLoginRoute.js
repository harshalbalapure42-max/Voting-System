const router = require ("express").Router () ; 
const { voterLogin } = require ("../controller/voterLoginController") ; 
router.get ("/voterLogin", voterLogin) ;
module.exports = router ; 