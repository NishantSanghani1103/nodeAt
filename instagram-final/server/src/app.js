import express from "express"
import { routes } from "./routes/index.js"

export const app = express()
app.use(express.json())
app.use("/api", routes)
app.use(
    "/uploads/post",
    express.static("uploads/post"))