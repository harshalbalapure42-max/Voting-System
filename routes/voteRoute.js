const router = require ("express").Router () ; 
const { vote } = require ("../controller/voteController") ; 
router.get ("/vote", vote) ; 
module.exports = router ; 