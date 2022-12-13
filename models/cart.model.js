module.exports = (sequelize,Sequelize)=>{
    const Cart = sequelize.define("Cart",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cost:{
            type:Sequelize.INTEGER
        }
    })
    return Cart;
}