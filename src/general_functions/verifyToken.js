const jwt = require('jsonwebtoken')
const config = require("../../config")

verifyToken = {}
const jwtKey = config.jwtKey

const defaultJwtOptions = { algorithm: "HS256", expiresIn: '30d' }; 

// Authorization: Bearer <token>
verifyToken.verifyToken = (req, res , next) =>{
    const bearerHeader = req.headers["authorization"]
    
    if (typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
    
}

verifyToken.tokenGenerator = (user, res) =>{
    jwt.sign({user}, jwtKey, defaultJwtOptions, (err, token) => {
        if (err){
            res.json({err})
        }
        res.json({token})
    });
}

verifyToken.authData = (req,res)=>{
    let verify = ""
    jwt.verify(req.token, jwtKey, (error, authData)=>{
        if(error){
            res.sendStatus(403)
        }else{
            verify = authData
        } 
    })   
    return verify
}


module.exports = verifyToken