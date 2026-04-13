import jwt from "jsonwebtoken"
export const checkToken = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1]
        console.log(token);
        if (!token) {
            return res.status(400).json({
                status: false,
                message: "Please Fill The Token First....!!"
            })
        }
        const decoded = jwt.verify(token, "Fun@1234");

        console.log(decoded.userId);

        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error:error.message
        })
    }

}