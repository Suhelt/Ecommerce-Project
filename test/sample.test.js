const MathOperations = require('./sample')

describe("Calculator tests",() => {
    test('addition',() => {
        expect(MathOperations.sum(1,2)).toBe(3);
        expect(MathOperations.sum(5,2)).toBe(7);
        expect(MathOperations.sum(5,2)).not.toBe(12);
    })
    test('subtraction',()=> {
        expect(MathOperations.diff(5,2)).toBe(3);
        expect(MathOperations.diff(9,4)).toBe(5);
        expect(MathOperations.diff(5,2)).not.toBe(9);
    
    })
    test('product',()=>{
        expect(MathOperations.product(5,3)).toBe(15);
        expect(MathOperations.product(5,5)).toBe(25);
        expect(MathOperations.product(5,2)).not.toBe(45);
    })
    test("truthy operation",()=>{
        var name = "software testing"
        var n = null
        expect(n).toBeNull()

        expect(name).toBeTruthy()
        expect(n).toBeFalsy()
        expect(0).toBeFalsy()

    })
    test("numeric operations",()=>{

        var num1 = 100;
        var num2 = -10;
        var num3 = 0

        expect(num1).toBeGreaterThan(10);
        expect(num2).toBeLessThan(0)
        expect(num1).toBeGreaterThanOrEqual(0)
    })
    test("stringMatchers",()=>{
        var string1 = "Software testing";
        var string2 = "abc"
        expect(string1).toMatch("Software testing")
        expect(string2).not.toMatch(string1)
    })
    test("arrays and literals",()=>{
        const shoppingList = ["glass","trash bags","towels"]
        expect(shoppingList).toContain('glass')
    })
    test("objects",()=>{
        const data = {
            one : 1
        };
       data.two = 2
       expect(data).toEqual({one:1,two:2})

    })
    test("testing errors",() =>{
        expect( () => compileCode()).toThrow()
        expect( () => compileCode()).toThrow(Error)
    })
})


describe("jest hooks", ()=>{
    beforeAll(() =>{
        console.log("beforeAll Called")
    })
    afterAll(() =>{
        console.log("After All Called")
    })
    beforeEach(()=>{
        console.log("BeforeEach called")
    })
    afterEach(()=>{
        console.log("AfterEach called")
    })

    test('addition',() => {
        expect(MathOperations.sum(1,2)).toBe(3);
        expect(MathOperations.sum(5,2)).toBe(7);
        expect(MathOperations.sum(5,2)).not.toBe(12);
    })
    test('subtraction',()=> {
        expect(MathOperations.diff(5,2)).toBe(3);
        expect(MathOperations.diff(9,4)).toBe(5);
        expect(MathOperations.diff(5,2)).not.toBe(9);
    })
})
