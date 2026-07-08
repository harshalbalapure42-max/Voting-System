const router = require ("express").Router () ; 
const { party } = require ("../controller/partyController") ; 
router.post ("/party", party) ; 
module.exports = router ; 