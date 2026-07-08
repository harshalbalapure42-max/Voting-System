const router = require ("express").Router () ; 
const { confirm } = require ("../controller/confirmController") ; 
router.post ("/confirm", confirm) ; 
module.exports = router ; 