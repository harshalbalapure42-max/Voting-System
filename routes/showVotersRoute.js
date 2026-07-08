const router = require ("express").Router () ; 
const { showVoters } = require ("../controller/showVoterController") ; 
router.post ("/showVoters", showVoters) ; 
module.exports = router ; 
