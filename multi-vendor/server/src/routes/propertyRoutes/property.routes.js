import express from "express"
import { checkToken } from "../../middleware/checkToken.js"
import { checkRoles } from "../../middleware/checkRole.js"
import { propertyAddController } from "../../controller/propertyController/property.controller.js"
export const propertyRoutes = express.Router()

propertyRoutes.post("/add", checkToken, checkRoles("seller"), propertyAddController)