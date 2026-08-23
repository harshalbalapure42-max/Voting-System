const router = require ("express").Router () ;
const { vote } = require ("../controller/voteController") ; 
router.post ("/vote", vote) ; 
module.exports = router ; 