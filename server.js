require ("dotenv").config () ; 
const ex = require ("express") ; 
const x = ex () ; 
const cookieParser = require ("cookie-parser") ; 
const session = require ("express-session") ; 
x.use (ex.urlencoded ({ extended : true } )) ; 
x.use (ex.json()) ; 
x.use (ex.static ("public")) ; 
x.use (cookieParser()) ; 
x.use (session ( { 
    secret : "123", 
    resave : false,  
    saveUninitialized : false 
}))
x.use (ex.urlencoded ( { extended : true } ) ) ; 
x.use (ex.json()) ; 
const home = require ("./routes/homeRoute") ; 
const admin = require ("./routes/adminRoute") ; 
const adminLogin = require ("./routes/adminLoginRoute") ; 
const adminAuth = require ("./routes/adminAuthRoute") ; 
const adminLogout = require ("./routes/adminLogoutRoute") ; 
const register = require ("./routes/registerRoute") ; 
const registerVoter = require ("./routes/registerVoterRoute") ; 
const show = require ("./routes/showRoute") ; 
const approve = require ("./routes/approveRoute") ; 
const reject = require ("./routes/rejectRoute") ; 
const showVoters = require ("./routes/showVotersRoute") ; 
const rejectedVoters = require ("./routes/rejectedVotersRoute") ; 
const undoRejected = require ("./routes/undoRejectedRoute") ; 
const voter = require ("./routes/voterRoute") ; 
const voterLogin = require ("./routes/voterLoginRoute") ; 
const vote = require ("./routes/voteRoute") ; 
const party = require ("./routes/partyRoute") ; 
const confirm = require ("./routes/confirmRoute") ; 
x.get ("/", home) ; 
x.get ("/admin", admin) ; 
x.post ("/adminLogin", adminLogin) ; 
x.get ("/adminAuth", adminAuth) ; 
x.get ("/adminLogout", adminLogout) ; 
x.get ("/register", register) ; 
x.post ("/registerVoter", registerVoter) ; 
x.post ("/show", show) ; 
x.post ("/approve", approve) ; 
x.post ("/reject", reject) ; 
x.post ("/showVoters", showVoters) ; 
x.post ("/rejectedVoters", rejectedVoters) ; 
x.post ("/undoRejected", undoRejected) ; 
x.get ("/voter", voter) ; 
x.post ("/voterLogin", voterLogin) ; 
x.get ("/vote", vote) ; 
x.post ("/party", party) ; 
x.post ("/confirm", confirm) ; 
x.listen (5000) ; 