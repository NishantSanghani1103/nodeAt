import express from "express"
import { userAddController } from "../controllers/user.controller.js"
const userRoutes = express.Router()
userRoutes.post("/add", userAddController)
export default userRoutes