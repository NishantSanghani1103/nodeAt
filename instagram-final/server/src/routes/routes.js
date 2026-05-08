import express from "express"
import { authRoutes, commentRoutes, followRoutes, likeRoutes, postRoutes, userRoutes } from "./index.js"
export const routes = express.Router()
routes.use("/auth", authRoutes)
routes.use("/user", userRoutes)
routes.use("/follow", followRoutes)
routes.use("/post", postRoutes)
routes.use("/comment", commentRoutes)
routes.use("/like",likeRoutes)