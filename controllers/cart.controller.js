const db = require("../models");
const Product = db.product;
const Cart = db.cart;
const Op  = db.Sequelize.Op;

exports.create = (req,res,)=>{

    const cart = {
        userId : req.userId
    }
    Cart.create(cart)
    .then(cart =>{
        res.status(200).send(cart)
    })
    .catch(err => {
        res.status(500).send({
            message:"Some internal server issue happened"
        })
    })
}
exports.update = (req,res)=>{
    let cartId = req.params.id;
    let oldCost = 0;

    Cart.findByPk(cartId)
    .then(cart =>{
        oldCost = cart.cost;

        Product.findAll({
            where:{
                id: req.body.productIds
            }
        })
        .then(items =>{
            cart.setProducts(items)
            .then(() =>{
                var NewCost = 0;
                cart.getProducts()
                .then(products =>{
                    for(i=0; i<products.length; i++){
                        NewCost = NewCost + products[i].cost
                    }
                    Cart.update({cost: oldCost + NewCost},{where: {id: cartId}})
                    res.status(200).send({
                        message: "Successfully added items to the cart"
                    })
                })
            })
        })
        .catch(err=>{
            res.status(500).send("Some internal error happened when fetching product details")
        })
    })
    .catch(err =>{
        res.status(500).send("Some internal sever error happened while fetching cart details")
    })

}