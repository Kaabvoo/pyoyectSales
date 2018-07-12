const store = require('../models/Store');

const exporters = {
    createStore(req, res){
        store.create(req.data)
        .then((dat)=>{
            res.status(201).send(dat)
        })
    },
    findStore(req, res){
        store.find()
        .then((dat)=>{
            res.status(200).json(dat);
        })
    }
}
module.exports = exporters;