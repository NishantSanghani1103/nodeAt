import express from "express"
import {userAdd, userUpdate } from "../controllers/user.controller.js"
const userRoutes = express.Router()

userRoutes.post("/add",userAdd)
userRoutes.put("/edit/:id",userUpdate)

export default userRoutes