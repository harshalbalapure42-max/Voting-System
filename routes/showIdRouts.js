const router = require ("express").Router () ; 
const { showId } = require ("../controller/showIdController") ; 
router.post ("/showId", showId) ; 
module.exports = router ; 