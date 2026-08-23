const { model } = require ("../model/approveModel") ; 
const approve = async (req, resp) => { 
    try { 
        const { name, surname, age, email, password } = req.body ; 
        if (!req.session.username) return resp.send ("Login first.") ; 
        const result = await model (name, surname, age, email, password) ; 
        if (!result.exists) return resp.send ("Error finding.") ; 
        if (result.affectedRows) return resp.send ("Error approving.") ; 
        resp.send (`
            <script>
            alert ("Approved.") ; 
            window.location.href = "getAdminAuth" ; 
            </script>
            `) ; 
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { approve } ; 