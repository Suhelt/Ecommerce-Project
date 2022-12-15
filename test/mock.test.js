function  forEach(items,callback){
    for(let i=0;i< items.length;i++){
        callback(items[i])
    }
}

const mockCallback = jest.fn(x => x + 7)

forEach([0,1],mockCallback)

test("testing the mock function",()=>{

    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.results[0].value).toBe(7)
    expect(mockCallback.mock.results[1].value).toBe(8)
})