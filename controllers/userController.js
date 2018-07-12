const user = require('../models/User');

const exporters = {
    createUser(req, res){
        res.send(man)
        user.create(req.data)
        .then((dat)=>{
            console.log(dat)
            res.status(201).send(dat.toJSON())
        })
        .catch(err=>{
            console.log(err)
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