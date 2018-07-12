const express = require('express');
const urls = express.Router();
//controllers
const controll = require('../controllers/productControllers')

urls.route('/user')
    // .post(controll.createProduct)
    .post((req, res)=>{
        console.log("MAN")
        res.send("ALGO?").status(200)
    })
    .get(controll.findProduct)

module.exports = urls;
