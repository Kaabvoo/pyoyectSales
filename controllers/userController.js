const user = require('../models/User');

const exporters = {
    createUser(req, res){
        user.create(req.data)
        .then((dat)=>{
            res.status(201).send(dat.toJSON())
        })
    },
    findUser(req, res){
        user.find()
        .then((dat)=>{
            res.status(200).json(dat);
        })
    }
}
module.exports = exporters;