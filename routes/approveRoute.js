const router = require ("express").Router () ; 
const { approve } = require ("../controller/approveController") ; 
router.post ("/approve", approve) ; 
module.exports = router ; 