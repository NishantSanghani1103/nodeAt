import jwt from "jsonwebtoken"
export const checkToken = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1]
        // console.log(token);

        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Please Login First....!!"
            })
        }
        const userValue = jwt.verify(token, process.env.TOKENKEY)
        // console.log(userValue.userId);
        req.body.userId = userValue.userId
        next()

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}   