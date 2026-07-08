const router = require ("express").Router () ; 
const { show } = require ("../controller/showController") ; 
router.post ("/show", show) ; 
module.exports = router ; 