const express = require('express')
const post = express.Router()
const controller = require("../controller/post.controller")


post.post("/post",controller.hola)

module.exports = post