const router = require ("express").Router () ; 
const { del } = require ("../controller/deleteController") ; 
router.post ("/delete", del) ; 
module.exports = router ; 