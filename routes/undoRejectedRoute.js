const router = require ("express").Router () ; 
const { undoRejected } = require ("../controller/undoRejectedController") ; 
router.post ("/undoRejected", undoRejected) ; 
module.exports = router ; 