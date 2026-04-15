import express from "express"
import { userAddController, userDeleteController, userSingleViewController, userUpdateController, userViewController } from "../controllers/user.controller.js"
import { userValidator } from "../validators/user.validator.js"
const userRoutes = express.Router()
userRoutes.post("/add", userValidator, userAddController)
userRoutes.get("/view",userViewController)
userRoutes.delete("/delete/:id",userDeleteController)
userRoutes.get("/view/:id",userSingleViewController)
userRoutes.put("/edit/:id",userValidator,userUpdateController)
export default userRoutes