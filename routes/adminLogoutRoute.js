const router = require ("express").Router () ; 
const { logout } = require ("../controller/adminLogoutController") ; 
router.get ("/", logout) ; 
module.exports = router ; 