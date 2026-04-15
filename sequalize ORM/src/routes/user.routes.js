import express from "express"
import { userAddController, userDeleteController, userUpdateController, userViewController } from "../controllers/user.controller.js"
const userRoutes=express.Router()
userRoutes.post("/add",userAddController)
userRoutes.get("/view",userViewController)
userRoutes.delete("/delete/:id",userDeleteController)
userRoutes.put("/edit/:id",userUpdateController)
export default userRoutes