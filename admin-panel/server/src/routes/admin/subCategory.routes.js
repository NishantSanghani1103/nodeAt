import express from "express"
import { uploads } from "../../utils/multer.util.js"
import { subCategoryAddController, subCategoryViewController } from "../../controllers/admin/subCategory.controller.js"
const subCategoryRoutes = express.Router()
subCategoryRoutes.post('/add', uploads.single("image"), subCategoryAddController)
subCategoryRoutes.get("/view",subCategoryViewController)
export default subCategoryRoutes