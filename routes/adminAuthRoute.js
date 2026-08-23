const router = require ("express").Router () ; 
const { adminAuth } = require ("../controller/adminAuthController") ; 
router.post ("/adminAuth", adminAuth) ; 
module.exports = router ; 