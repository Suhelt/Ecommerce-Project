const db = require("../models")
const Op = db.Sequelize.Op;

const Product = db.product;

exports.create = (req,res)=>{
    let product = {
        name:req.body.name,
        description: req.body.description,
        cost:req.body.cost
    }
    Product.create(product)
    .then(product => {
        console.log("product has been inserted into the db")
        res.status(200).send(product)
    })
    .catch(err=>{
        res.status(500).send("error while adding the product to the database")
    })
}
exports.findAll = (req,res)=>{
let productName = req.query.name;
let minCost = req.query.minCost;
let maxCost = req.query.maxCost;

let promise;
if(productName){
    promise = Product.findAll({
        where: {
            name:productName
        }
    })
}else if(minCost && maxCost){
    promise = Product.findAll({
        where: {
            cost : {
                [Op.gte] : minCost,
                [Op.lte] : maxCost
            }
        }
    })

}else if(minCost){
    promise = Product.findAll({
        where: {
            cost : {
                [Op.gte] : minCost
            }
        }
    })
}else if(maxCost){
    promise = Product.findAll({
        where: {
            cost : {
                [Op.lte] : maxCost
            }
        }
    })
}else{
    promise = Product.findAll()
}

    promise
    .then(data =>{
        console.log("Product successfully fetched from the database")
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send("some error occured while retrieving the Product")
    })
}
exports.findOne = (req,res) =>{
    let productId = req.params.id
    Product,findByPk(productId)
.then(product =>{
    if(!product){
        return res.status(400).send("please enter valid Product Id")

    }
    console.log("Product successfully fetched from the database based on Id")
    res.status(200).send(product)

})
.catch(err =>{
    res.status(500).send("some error occured while retrieving the Product based on id")
})
}
exports.update = (req,res)=>{
    let productId = req.params.id;
    Product.update(req.body, {
        where:{
            id: productId
        }
    })
    .then(num =>{
        if(num==1){
            res.send("updation successfull")
        }else{
            res.send("could not update")
        }
    })
    .catch(err => {
        res.status(500).send("some error occured while updating the product")
    })
}
exports.delete = (req,res)=>{
    let productId = req.params.id;
    Product.destroy({
        where:{
            id:productId}
    })
    .then(result =>{
        res.status(200).send("Successfully deleted the product")
    })
    .catch(err =>{
        res.status(500).send("some error occured while deleting the product based on id")
    })
}
exports.getProductsUnderCategory = (req,res) =>{
    const categoryId = req.params.categoryId;

    Product.findAll({
        where: {
            categoryId : categoryId
        }
    })
    .then(products => {
        res.status(200).send(products)
    })
    .catch(err =>{
        res.status(500).send("some internal error while fetching the products based on id")

    })
}