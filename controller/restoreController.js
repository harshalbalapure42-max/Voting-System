const { model } = require ("../model/restoreModel") ; 
const restore = async (req, resp) => { 
    try { 
                if (!req.session.username) return resp.send ("Login first.") ; 
        const { name, surname, age, email, password } = req.body ; 
        const result = await model (name, surname, age, email, password) ; 
        if (!result.exists) return resp.send ("Error finding.") ; 
        if (result.affectedRows===0) return resp.send ("Error restoring.") ; 
        resp.send (`
            <script> 
            alert ("Restored successfully.") ; 
            window.location.href = "/getAdminAuth" ; 
            </script>
            `) ; 
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { restore } ;