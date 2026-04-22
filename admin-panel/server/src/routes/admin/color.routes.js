import express from "express"
import { colorAddContriller, colorViewController } from "../../controllers/admin/color.controller.js"
import { colorValidator } from "../../validators/admin/color.validator.js"
const colorRoutes = express.Router()
colorRoutes.post("/add",colorValidator, colorAddContriller)
colorRoutes.get("/view",colorViewController)
export default colorRoutes