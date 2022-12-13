const express = require("express")
const serverConfig = require('./configs/server.config')
const bodyparser = require("body-parser")

const app = express()

app.use(bodyparser.json())
const db = require("./models")
const Role = db.role;


db.sequelize.sync()
.then(()=>{
    console.log('database synced')
    init()
})

function init(){
    Role.create({
        id:1,
        name: "user"
    });
    Role.create({
        id:2,
        name:"admin"
    });
    
}
require('./routes/category.routes')(app)
require('./routes/product.routes')(app)
require('./routes/auth.routes')(app)
require('./routes/cart.routes')(app)

app.listen(serverConfig.PORT , ()=>{
    console.log(`Application started : ${serverConfig.PORT}`)
})