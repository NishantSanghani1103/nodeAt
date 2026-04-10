export const checkToken = (req, res, next) => {
    try {
        const TOKEVNVALUE = process.env.TOKEVNVALUE
        const { token } = req.headers
        
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Token Is Required....!!"
            })
        }
        if (token != TOKEVNVALUE) {
            return res.status(401).json({
                status: false,
                message: "Invalid Token Value...!!"
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            status: false,
            error:error.message
        })
    }

}