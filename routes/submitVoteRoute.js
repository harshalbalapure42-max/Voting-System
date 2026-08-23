const router = require ("express").Router () ;
const { submitVote } = require ("../controller/submitVoteController") ; 
router.post ("/submitVote", submitVote) ; 
module.exports = router ; 