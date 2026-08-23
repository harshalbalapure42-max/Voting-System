const router = require ("express").Router () ; 
const { adminLogin } = require ("../controller/adminLoginController") ; 
router.get ("/adminLogin", adminLogin) ; 
module.exports = router ; 