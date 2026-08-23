const router = require ("express").Router () ; 
const { getAdminAuth } = require ("../controller/getAdminAuthController") ; 
router.get ("/getAdminAuth", getAdminAuth) ; 
module.exports = router ; 