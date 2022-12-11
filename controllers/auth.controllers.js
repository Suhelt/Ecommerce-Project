const db = require("../models");
const config = require("../configs/auth.config")
const User = db.user;
const Role = db.role

const Op = db.sequelize.Op;
var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")

exports.signup = (req,res) =>{
    User.create({
        username : req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8)

    })
    .then(user =>{
        if(req.body.roles){
            Role.findAll({
                where:{
                    name:{
                        [Op.or] :req.body.roles

                    }
                }
            })
            .then(roles =>{
                user.setRoles(roles)
                .then(()  =>{
                    res.status(200).send({message: "user registered successfully"})
                })
            })
        }
    })
    .catch(err =>{
        res.status(500).send("unable to add user"+err.message)

    })
}
