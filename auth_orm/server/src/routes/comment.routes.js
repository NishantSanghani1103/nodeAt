import express from "express"
import {commnetViewController } from "../controller/comment.controller.js"
import { checkToken } from "../middleware/checkToken.js"
const commentRoutes = express.Router()
commentRoutes.get("/view",checkToken, commnetViewController)


export default commentRoutes