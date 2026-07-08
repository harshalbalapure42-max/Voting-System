const router = require ("express").Router () ; 
const { registerVoter } = require ("../controller/registerVoterController") ; 
router.post ("/registerVoter", registerVoter) ; 
module.exports = router ; 