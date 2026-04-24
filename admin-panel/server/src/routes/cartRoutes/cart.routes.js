import express from "express"
import { checkToken } from "../../middleware/checkToken.js"
import { cartAddController } from "../../controllers/cartController/cart.controller.js"
export const cartRoutes = express.Router()

cartRoutes.post("/add", checkToken, cartAddController)