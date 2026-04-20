import express from "express"
import userRoutes from "./routes/user.routes.js"
import walletRoutes from "./routes/wallet.routes.js"
import transactionRoutes from "./routes/transaction.routes.js"
const app = express()
app.use(express.json())
app.use("/user", userRoutes)
app.use("/wallet", walletRoutes)
app.use("/transaction",transactionRoutes)
export default app