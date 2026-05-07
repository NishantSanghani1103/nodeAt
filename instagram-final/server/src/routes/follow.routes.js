import express from "express"
import { followController } from "../controller/index.js"
import { checkFollow, checkToken } from "../middleware/index.js"
export const followRoutes=express.Router()
followRoutes.post("/add/:id",checkToken,checkFollow,followController)