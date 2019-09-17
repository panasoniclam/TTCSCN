const express = require('express')
const app = express.Router() ;
const user_controller = require('./../controllers/controller.user')

 app.route('/user')
 .get(user_controller.getAll)
 .post(user_controller.createUSer)
module.exports = app;