const jwt = require("jsonwebtoken")
const login_controller = {}

const user = require("../models/user.model")
const  verifyToken = require("../general_functions/verifyToken")
//para generar hash y comparar
const hash_pass = require("../general_functions/bcryp")

// COMPROBAR USUARIO BD
login_controller. get_token_login =  async (req,res)=>{

    let email = req.body.email
    let password = req.body.password

    if(email !== "undefined" && password !== "undefined"){
        let dataUser = await user.findOne({email:email})
        let passwordDB = dataUser.password
        let validate = await hash_pass.compare(password, passwordDB)
        
        if (validate){
            userTokenObj = {
                email: dataUser.email,
                name: dataUser.name,
                admin: dataUser.admin
            }
            verifyToken.tokenGenerator(userTokenObj, res)
        }else{
            res.send("unauthorized") 
        }
        
    }else{
        res.send("unauthorized")
    }
}

login_controller.access_guest =  async (req,res)=>{
    const user = {
        id: 1,
        nombre: "anon",
        email: "byron@asda.com",
        phone: "123123123",
        modules: "2,1,2,3,"
    }
    verifyToken.tokenGenerator(user, res)

}

module.exports = login_controller