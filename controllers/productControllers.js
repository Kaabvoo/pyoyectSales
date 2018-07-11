const Product = require('../models/Product');

const controll = {
    createProduct(req, res){
        Product.create(req.body).then(newProduct => (
        res.status(201).json(newProduct.toJSON())
        ));
    },
    findProduct(req, res){
        Product.find(req.query).then(products => (
            res.status(200).json(products)
        ));
    },
}
module.exports = controll