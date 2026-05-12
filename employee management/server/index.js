import env from "dotenv"
import { connectDB } from "./src/config/index.js"
import "./src/models/index.js"
env.config()

const port = process.env.PORT


connectDB()