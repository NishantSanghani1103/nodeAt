import express from "express"
import { userViewController } from "../controller/index.js"
import { checkToken } from "../middleware/index.js"
export const userRoutes=express.Router()

userRoutes.get("/view",checkToken,userViewController)