const bcrypt = require ("bcryptjs") ; 
const path = require ("path") ; 
const { model } = require ("../model/voteModel") ; 
const vote = async (req, resp) => { 
    try { 
        const { voter_id, email, password } = req.body ; 
        const result = await model (voter_id, email) ; 
        if (!result.exists) return resp.send ("Invalid info.") ; 
        if (result.result[0].vote===1) return resp.send (`
            <script> 
            alert ("You have already votted.") ; 
            window.location.href = "/" ; 
            </script>
            `)
        const hashedPassword = await bcrypt.compare (password, result.result[0].password) ; 
        if (!hashedPassword) return resp.send ("Invalid info.") ; 
        resp.send (`
            <html> 
    <head>
        <link rel = "stylesheet" href = "/submitVote.css">
    </head>
    <body> 
        <form action = "/submitVote" method = "POST">
            <input type = "hidden" name = "voter_id" value = "${result.result[0].voter_id}">
            <input type = "radio" name = "party" value = "BJP" required>
            <label>BJP</label>
            <br><br>
            <input type = "radio" name = "party" value = "Congress" required>
            <label>Congress</label>
            <br><br>
            <input type = "radio" name = "party" value = "Shinde" required>
            <label>Shinde</label>
            <br><br>
            <input type = "radio" name = "party" value = "UBT" required>
            <label>Shinde</label>
            <br><br>
            <input type = "radio" name = "party" value = "MNS" required>
            <label>MNS</label>
            <br><br><br>
            <div>
                <button type = "submit">Submit</button>
            </div>
        </form>
    </body>
</html>
            `)
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { vote } ; 