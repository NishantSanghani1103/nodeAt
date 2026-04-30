import jwt from "jsonwebtoken"
export const checkToken = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization?.split(" ")[1]
        // console.log(token);
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Please Login First....!!"
            })
        }
        const decode = await jwt.verify(token, process.env.TOKENKEY)
        // console.log(decode);
        req.userId = decode.userId
        req.userRole = decode.role
        next()

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}