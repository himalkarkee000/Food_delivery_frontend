import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"


const userRouter = express.Router()

userRouter.use("/register",registerUser)
userRouter.use("/login",loginUser)



export default userRouter