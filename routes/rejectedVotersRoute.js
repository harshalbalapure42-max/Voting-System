const router = require ("express").Router () ;
const { rejectedVoters } = require ("../controller/rejectedVotersController") ; 
router.get ("/rejectedVoters", rejectedVoters) ; 
module.exports = router ; 