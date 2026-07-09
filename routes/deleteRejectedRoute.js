const router = require ("express").Router () ; 
const { deleteRejected } = require ("../controller/deleteRejectedController") ;
router.post ("/deleteRejected", deleteRejected) ; 
module.exports = router ; 