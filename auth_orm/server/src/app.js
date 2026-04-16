import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import walletRoutes from "./routes/wallet.routes.js";
const app = express()
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/comment", commentRoutes)
app.use("/wallet", walletRoutes)
export default app