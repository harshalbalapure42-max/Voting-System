const router = require ("express").Router () ; 
const { rejectedVoters } = require ("../controller/rejectedVotersController") ; 
router.post ("/rejectedVoters", rejectedVoters) ; 
module.exports = router ; 