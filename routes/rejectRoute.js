const router = require ("express").Router () ; 
const { reject } = require ("../controller/rejectController") ; 
router.post ("/reject", reject) ; 
module.exports = router ; 