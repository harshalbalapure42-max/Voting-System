const router = require ("express").Router () ; 
const { adminAuth } = require ("../controller/adminAuthController") ; 
router.get ("/adminAuth", adminAuth) ; 
module.exports = router ; 