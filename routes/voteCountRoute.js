const router = require ("express").Router () ; 
const { voteCount } = require ("../controller/voteCountController") ; 
router.get ("/voteCount", voteCount) ; 
module.exports = router ; 