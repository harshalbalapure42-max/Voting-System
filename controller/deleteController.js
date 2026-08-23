const { model } = require ("../model/deleteModel") ; 
const del = async (req, resp) => { 
    try { 
        const { name, surname, age, email, password } = req.body ; 
                if (!req.session.username) return resp.send ("Login first.") ; 
        const result = await model (name, surname, age, email, password) ; 
        if (result.affectedRows===0) return resp.send ("Error deleting.") ; 
        resp.send (`
            <script>
            alert ("Deleted successfully.") ;
            window.location.href = "/getAdminAuth" ;
            </script>
            `) ; 
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { del } ; 