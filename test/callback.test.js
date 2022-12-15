//asynchrounus code
function fetchData(callback){
    setTimeout( ()=>{
        callback("vishwa")
    },2000)
}
//to test whether callback function was actually called or not
//when writing in javascrip code most the time we write code asynchronously


test("callback code",done =>{
    function callback(data){
        expect(data).toBe("vishwa")
        done();
    }
    fetchData(callback)
});

function addAsync(a,b,callback){
    setTimeout(()=>{
        const result = a + b;
        callback(result);

        },4000)
}
test("add numbers async", done =>{
    function callback(result){
        expect(result).toBe(15)
        done();
    }
    addAsync(10,5,callback);
})