const router = require ("express").Router () ; 
const { restore } = require ("../controller/restoreController") ; 
router.post ("/restore", restore) ; 
module.exports = router ; 