import express from "express"
import faqRoutes from "./faq.routes.js"
import categoryRoutes from "./category.routes.js"
import subCategoryRoutes from "./subCategory.routes.js"
import subSubCategoryRoutes from "./subSubCategory.routes.js"
import colorRoutes from "./color.routes.js"
import materialRoutes from "./material.routes.js"

const adminRoutes = express.Router()
adminRoutes.use("/faq", faqRoutes)
adminRoutes.use("/category", categoryRoutes)
adminRoutes.use("/sub-category", subCategoryRoutes)
adminRoutes.use("/sub-sub-category", subSubCategoryRoutes)
adminRoutes.use("/color", colorRoutes)
adminRoutes.use("/material",materialRoutes)
export default adminRoutes