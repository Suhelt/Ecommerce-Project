const db = require("../models")
const Category = db.category

const validateCategoryRequest = (req,res,next)=>{
    if(!req.body.name){
        res.status(400).send("Name of the category cant be empty")
       
    }
    next();

}
const validateProductRequest= (req,res,next)=>{
    if(!req.body.name){
        res.status(400).send("name of the product cant be empty.")
        return;
    }
    if(req.body.categoryId){
        Category.findByPk(req.body.categoryId)
        .then(category =>{
            if(!category){
                res.status(400).send("categoryId that is passed is not available")
                return;
            }
            next();
        })
        .catch(err=> {
            res.status(500).send("some internal error while fetching the product details")
        })

    }else{
        res.status(400).send("categoryId cant be null")
    }

}
module.exports = {
    validateCategoryRequest : validateCategoryRequest,
    validateProductRequest : validateProductRequest
}