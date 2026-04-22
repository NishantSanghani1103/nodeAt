import express from "express"
import cors from "cors"
import adminRoutes from "./routes/admin/admin.routes.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use("/uploads/category", express.static("uploads/category"))
app.use("/uploads/subCategory", express.static("uploads/subCategory"))
app.use("/uploads/subSubCategory", express.static("uploads/subSubCategory"))
app.use("/admin", adminRoutes)
export default app