const express = require('express')
const routes = express.Router()
const {get_predict} = require("./predict.controller.js")
const {predict} = require("./predict.controller.js")
const fotoUpload = require('./foto.middleware.js')

routes.post("/predict",fotoUpload, predict)
routes.get("/predict/histories",get_predict)

module.exports = routes