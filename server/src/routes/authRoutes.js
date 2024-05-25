const { loginUser, registerUser } = require("../controllers/authControllers");
const authRouter = require("express").Router();

authRouter.post("/register", registerUser)
authRouter.post("/login", loginUser)


module.exports = authRouter