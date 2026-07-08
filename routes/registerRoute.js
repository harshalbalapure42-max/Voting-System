const router = require ("express").Router () ; 
const { register } = require ("../controller/registerController") ; 
router.get ("/register", register) ; 
module.exports = router ; 