const path = require ("path") ; 
const bcrypt = require ("bcryptjs") ; 
const { connection } = require ("../model/config/db") ; 
const { voter } = require ("../model/partyModel") ; 
const party = (req, resp) => { 
    const { voterId, password } = req.body ; 
    connection.query ("select * from voter where voterId = ?", [voterId], (err, result) => { 
        if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
        else if (result[0].vote===1) return resp.send ("You have already votted.") ; 
           connection.query ("select * from voter where voterId = ?", [voterId], (err, result) => { 
        const user = result[0] ; 
        bcrypt.compare (password, user.password, (err, result) => { 
            if (err)  { 
                console.log (err) ; 
                return resp.send ("Database error.") ; 
            }
            else if (!result) return resp.send ("Incorrect Info.") ; 
            else resp.send (`
                <html> 
    <head>
        <link rel = "stylesheet" href = "/party.css"> 
    </head>
    <body> 
        <form action = "/confirm" method = "POST"> 
        <input type = "hidden" name = "voterId" value = "${voterId}">
              <input type = "radio" name = "party" value = "BJP" required> <label>BJP</label>
           
            <br><br> 
             <input type = "radio" name = "party" value = "Congress" required>
            <label>Congress</label>
            <br><br> 
              <input type = "radio" name = "party" value = "UBT" required>
             <label>UBT</label>
            <br><br> 
             <input type = "radio" name = "party" value = "MNS" required>
             <label>MNS</label>
            <br><br> 
               <input type = "radio" name = "party" value = "Shinde" required>
             <label>Shinde</label>
            <br><br> 
            <div>
            <button type = "submit">Submit Vote</button>
            </div>
        </form>
    </body>
</html>
                `) ;  
        })
    })
    })
 
}
module.exports = { party } ; 