import jwt from "jsonwebtoken"

export const checkToken = async (req, res, next) => {
    try {
        const key = process.env.TOKENKEY

        
        const token = req?.headers?.authorization?.split(" ")[1]
        // console.log(token);

        // console.log(token);
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Please Login First....!!"
            })
        }
        const decode = jwt.verify(token, process.env.TOKENKEY)
        console.log(decode);
        
        console.log("DECODE", decode.userId);
        req.userId = decode.userId

        next()

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}