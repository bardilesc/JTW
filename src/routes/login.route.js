const express = require('express')
const login = express.Router()
const controller = require("../controller/login.controller")

login.post("/access_api",controller.get_token_login)
login.post("/access_guest", controller.access_guest )

module.exports = login;