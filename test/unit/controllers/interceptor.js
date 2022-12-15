module.exports = {
    mockRequest: ()=>{
        const req  = {}
        req.body = jest.fn().mockReturnValue(req),
        req.params = jest.fn().mockReturnValue(req)
        return req

    },
    mockResponse:()=>{
        const res  = {}
        req.status = jest.fn().mockReturnValue(res),
        req.send = jest.fn().mockReturnValue(res)
        return res; 


    }
    }
