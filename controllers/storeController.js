const store = require('../models/store');

const exporters = {
    createUser(req, res){
        store.create(req.data)
        .then((dat)=>{
            res.status(201).send(dat.toJSON())
        })
    },
    findUser(req, res){
        store.find()
        .then((dat)=>{
            res.status(200).json(dat);
        })
    }
}
module.exports = exporters;