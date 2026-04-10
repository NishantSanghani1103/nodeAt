import express from "express"
import { userDelete, userView } from "../controllers/admin.controller.js"
const adminRoutes = express.Router()
adminRoutes.get("/view",userView)
adminRoutes.delete("/delete/:id",userDelete)
export default adminRoutes