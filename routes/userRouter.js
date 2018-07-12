const express = require('express');
const urls = express.Router();
//controllers
const controll = require('../controllers/storeController')

urls.route('/')
    .post(controll.createStore)
    .get(controll.findStore)

module.exports = urls;