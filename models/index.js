const config = require("../configs/db.config")
const Sequelize = require("sequelize")
const seq = new Sequelize(
config.DB,
config.USER,
config.PASSWORD,
{
    host: config.HOST,
    dialect: config.dialect
}

);
const db = {}
db.Sequelize = Sequelize,
db.sequelize = seq
db.role = require("./role.model.js")(db.sequelize,Sequelize)
db.user = require("./user.model.js")(db.sequelize,Sequelize)
db.category = require("./category.model.js")(db.sequelize,Sequelize)
db.product = require("./product.model.js")(db.sequelize,Sequelize)
db.cart = require("./cart.model.js")(db.sequelize,Sequelize)

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId"
})

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId"
})
db.product.belongsToMany(db.cart,{
    through:"cart products",
    foreign:"productID"
})
db.cart.belongsToMany(db.product,{
    through:"cart products",
    foreign:"cartID"
})

db.user.hasMany(db.cart)
db.category.hasMany(db.product)

module.exports  = db
