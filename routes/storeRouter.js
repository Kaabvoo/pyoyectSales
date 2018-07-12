const express = require('express');
const urls = express.Router();
//controllers
const controll = require('../controllers/userController')

urls.route('/')
    .post(controll.createUser)
    .get(controll.findUser)

module.exports = urls;
