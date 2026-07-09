const path = require ("path") ; 
const { connection } = require ("../model/config/db") ; 
const { confirmModel } = require ("../model/confirmModel") ; 
const confirm = (req, resp) => { 
    if (!req.session.voterId) return resp.send ("Login first.") ; 
    const { party, voterId } = req.body ; 
    connection.query ("update voteCount set votes = votes + 1 where party = ?", [party], (err) => { 
         connection.query ("update voter set vote = 1 where voterId = ?", [voterId], (err) => { 
              if (err) { 
            console.log (err) ; 
            return resp.send ("Database error.") ; 
        }
       resp.send (`
        <script> 
        alert ("Vote submitted successfully.") ; 
        window.location.href = "/vote" ; 
        </script>
        `)

        })
      
    })
}
module.exports = { confirm } ; 