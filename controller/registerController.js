const bcrypt = require ("bcryptjs") ; 
const { model } = require ("../model/registerModel") ; 
const register = async (req, resp) => { 
    try { 
        const { name, surname, age, email, password, password2 } = req.body ; 
        if (age<18) return resp.send ("Age should be 18 or above for registration.") ; 
        if (password!==password2) return resp.send ("Password 1 and password 2 don't match.") ; 
        const hashPassword = await bcrypt.hash (password, 10) ; 
        const result = await model (name, surname, age, email, hashPassword) ; 
        if (result.exists) return resp.send ("Email already exists. Try to register with different email.") ; 
        resp.send (`
            <script>
            alert ("Name reistered successfully.") ; 
            window.location.href = "/" ;
            </script>
            `)
    }
    catch (err) { 
        console.log (err) ; 
        return resp.send ("Database error.") ; 
    }
}
module.exports = { register } ; 