const { model } = require ("../model/showIdModel") ; 
const bcrypt = require ("bcryptjs") ; 
const showId = async (req, resp) => { 
    try { 
        const { name, surname, email, password } = req.body ; 
        const result = await model (name, surname, email, password) ; 
        if (!result.exists) return resp.send ("Invalid info.") ; 
        const hashedPassword = await bcrypt.compare (password, result.result[0].password) ; 
        if (!hashedPassword) return resp.send ("Invalid info.") ; 
        resp.send (`
            <h2>Voter Id : ${result.result[0].voter_id}</h2>
            <h2>Name : ${result.result[0].name}</h2>
            <h2>Surname : ${result.result[0].surname}</h2>
            <h2>Age : ${result.result[0].age}</h2>
            <h2>Email : ${result.result[0].email}</h2>
            `)
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { showId } ; 