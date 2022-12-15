const CategaryController = require("../../../controllers/category.controller");
const Model = require("../../../models");
const CategoryModel = Model.category;
const newCategory = require("../../mock-data/new-category.json");
const {mockRequest, mockResponse} = require('../interceptor.js');
let req,res;

beforeEach(()=>{
    req = mockRequest();
    res = mockResponse();

})
describe('CategoryController.create',()=>{
    beforeEach( ()=>{
         req.body = newCategory
    })

    test("should call Category.Create and creates a new category",async ()=>{
        const spy = jest.spyOn(CategoryModel,'create')
        .mockImplementation((newCategory) => Promise.resolve(newCategory))
        await CategoryController.create(req,res)
        
        expect(res.status).toHaveBeenCalledWith(200)
        expect(CategoryModel.create).toHaveBeenCallesWith(newCategory)
        expect(res.send).toHaveBeenCallesWith(newCategory)
       

    });
    test("should call Category.Create and ends with an error",async ()=>{

        const spy = jest.spyOn(CategoryModel,'create')
        .mockImplementation(() =>Promise.reject(Error("This is an error")))
        await CategoryController.create(req,res)

        expect(res.status).toHaveBeenCalledWith(500);
        expect(CategoryModel.create).toHaveBeenCalledWith(newCategory)
        expect(res.send).toHaveBeenCalledWith("Issue in creating the category")

    })
})
describe('CategoryController.findOne', ()=>{
    test('should Call CategoryController.findOne',async ()=>{
        req.params.id = 1
        const spy = jest.spyOne(CategoryModel,'findByPk')
        .mockImplementation(() => Promise.resolve(newCategory))

        await CategoryModel.findByPk(req.params.id);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(newCategory);
        expect(CategoryModel.findByPk).toHaveBeenCalledWith(req.params.id);

    })
})