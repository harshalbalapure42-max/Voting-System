const router = require ("express").Router () ; 
const { showVoters } = require ("../controller/showVotersController") ; 
router.get ("/showVoters", showVoters) ; 
module.exports = router ; 