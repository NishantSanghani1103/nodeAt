import express from "express"
import { uploads } from "../../utils/multer.util.js"
import { subSubCategoryAddController, subSubCategoryViewController } from "../../controllers/subSubCategoryController/subSubCategory.controller.js"
import { subSubCategoryValidator } from "../../validators/admin/subSubCategory.validator.js"

const subSubCategoryRoutes = express.Router()
subSubCategoryRoutes.post('/add', uploads("subSubCategory").single("image"),subSubCategoryValidator, subSubCategoryAddController)
subSubCategoryRoutes.get("/view",subSubCategoryViewController)
export default subSubCategoryRoutes