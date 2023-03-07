const post = {}

const verifyToken = require("../general_functions/verifyToken")
require("../general_functions/verifyToken")

post.hola = async (req, res)=>{
    let data = verifyToken.authData(req, res)
    if(data != ""){
        res.json({data})
    }
}

module.exports = post