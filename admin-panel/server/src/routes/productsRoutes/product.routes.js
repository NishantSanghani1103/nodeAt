import express from "express"
import { productAddController, productViewController } from "../../controllers/productController/product.controller.js"
import { uploads } from "../../utils/multer.util.js"
import { productValidator } from "../../validators/admin/product.validator.js"
const productRoutes = express.Router()
productRoutes.post("/add", uploads("product").fields([
    { name: "image", maxCount: 1 },
    { name: "backImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 10 }

]), productValidator,productAddController)
productRoutes.get("/view",productViewController)
export default productRoutes