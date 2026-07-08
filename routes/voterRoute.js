const router = require ("express").Router () ; 
const { voter } = require ("../controller/voterController") ; 
router.get ("/voter", voter) ; 
module.exports = router ; 