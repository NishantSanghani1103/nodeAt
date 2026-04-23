import express from "express"
import { materailValidator } from "../../validators/admin/materail.validator.js"
import { materialAddController, materialViewController } from "../../controllers/materialController/material.controller.js"
const materialRoutes = express.Router()
materialRoutes.post("/add", materailValidator, materialAddController)
materialRoutes.get("/view", materialViewController)
export default materialRoutes