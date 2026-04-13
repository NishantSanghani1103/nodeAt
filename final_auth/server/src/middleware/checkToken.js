import env from "dotenv"
env.config()
import jwt from "jsonwebtoken"
export const checkToken = (req, res, next) => {
    const token = req?.headers?.authorization.split(" ")[1]

    if (!token) {
        res.status(400).json({
            status: false,
            message: "Please Login First...!!"
        })
    }

    const decord = jwt.verify(token, process.env.TOKEN)
    console.log(decord);
    req.userId = decord.userId
    next()
    



}