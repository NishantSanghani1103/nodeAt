import express from "express"
import { adminView } from "../controllers/admin.controller.js"
import { checkToken } from "../middleware/auth.middleware.js"
const adminRoutes = express.Router()

adminRoutes.get("/view",checkToken ,adminView)

export default adminRoutes