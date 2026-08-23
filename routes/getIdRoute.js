const router = require ("express").Router () ; 
const { getId } = require ("../controller/getIdController") ; 
router.get ("/getId", getId) ; 
module.exports = router ; 