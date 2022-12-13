
const controller = require("../controllers/auth.controllers");
const{verifySignUp} = require("../middlewares")
module.exports = function(app){
    app.post("/ecomm/api/v1/auth/signup",[verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted], controller.signup);

    app.post("/ecomm/api/v1/auth/signin",controller.signin)
}