const router = require ("express").Router () ; 
const { adminLogin } = require ("../controller/adminLoginController") ; 
router.post ("/adminLogin", adminLogin) ; 
module.exports = router ; 