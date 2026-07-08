const router = require ("express").Router () ; 
const { admin } = require ("../controller/adminController") ; 
router.get ("/admin", admin) ; 
module.exports = router ; 