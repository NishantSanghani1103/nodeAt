import express from "express"

import { colorValidator } from "../../validators/admin/color.validator.js"
import { colorAddContriller, colorViewController } from "../../controllers/colorController/color.controller.js"
const colorRoutes = express.Router()
colorRoutes.post("/add",colorValidator, colorAddContriller)
colorRoutes.get("/view",colorViewController)
export default colorRoutes