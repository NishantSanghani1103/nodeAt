import express from "express"
import { uploads } from "../../utils/multer.util.js"
import { categoryAddController } from "../../controllers/admin/category.controller.js"
const categoryRoutes = express.Router()
categoryRoutes.post('/add', uploads.single("image"),categoryAddController)
export default categoryRoutes