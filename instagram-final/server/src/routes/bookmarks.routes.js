import express from "express"
import { bookMarksAddController, bookMarksViewByUserController } from "../controller/index.js"
import { checkToken } from "../middleware/index.js"
import { bookMarksValidation, validateRequest } from "../validation/index.js"
export const bookMarksRoutes = express.Router()
bookMarksRoutes.post("/add", checkToken, bookMarksValidation, validateRequest, bookMarksAddController)
bookMarksRoutes.get("/viewByUser", checkToken, bookMarksViewByUserController)