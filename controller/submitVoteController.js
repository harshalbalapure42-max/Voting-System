const { model } = require ("../model/submitVoteModel") ; 
const submitVote = async (req, resp) => { 
    try { 
        const { voter_id, party } = req.body ; 
        const result = await model (voter_id, party) ; 
        if (result.affectedRows===0 || result.affectedRows===1) return resp.send ("Couldn't submit vote") ; 
        resp.send (`
            <script>
            alert ("Vote submitted.") ; 
            window.location.href = "/" ; 
            </script>
            `)
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { submitVote } ; 