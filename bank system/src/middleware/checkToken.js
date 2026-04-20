import jwt from "jsonwebtoken"
export const checkToken = (req, res, next) => {
    try {
        const token = req?.headers?.authorization.split(" ")[1]
        // console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        req.userId = decoded.userId
        next()
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Please Login First...!!"
        })
    }
}