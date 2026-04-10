import express from "express"
import { getAdmin } from "../controllers/admin.controller.js"
export const adminRoutes = express.Router()

adminRoutes.get("/view",getAdmin)
