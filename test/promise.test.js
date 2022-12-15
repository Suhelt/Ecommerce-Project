function PromiseFunc(){
    return new Promise((resolve,reject)=>{
        resolve("vishwa")
    })
}
test("testing promises",()=>{
    return PromiseFunc()
    .then((msg)=>{
        expect(msg).toBe("vishwa")
    })

})