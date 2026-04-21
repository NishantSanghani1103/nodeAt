import express from "express"
import faqRoutes from "./faq.routes.js"
import categoryRoutes from "./category.routes.js"
import subCategoryRoutes from "./subCategory.routes.js"
const adminRoutes = express.Router()
adminRoutes.use("/faq", faqRoutes)
adminRoutes.use("/category", categoryRoutes)
adminRoutes.use("/sub-category", subCategoryRoutes)
export default adminRoutes