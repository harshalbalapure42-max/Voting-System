const router = require ("express").Router () ; 
const { registeredVoters } = require ("../controller/registeredVotersController") ; 
router.get ("/registeredVoters", registeredVoters) ; 
module.exports = router ; 