const express = require('express');
const urls = express.Router();
//controllers
const controll = require('../controllers/productControllers')

urls.route('/')
    .post(controll.createProduct)
    .get(controll.findProduct)

module.exports = urls;
