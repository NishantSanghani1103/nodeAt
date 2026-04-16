import { authLoginService, authRegisterService } from "../services/auth.service.js"

export const authRegisterController = async (req, res) => {
    try {
        await authRegisterService(req.body)
        return res.status(201).json({
            status: true,
            message: "User Registered Successfully...!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message
        })
    }
}
export const authLoginController = async (req, res) => {
    try {
        const data = await authLoginService(req.body)
        // console.log(data);
        
        return res.status(200).json({
            status: true,
            message: "User Logged In Successfully....!!",
            token:data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message
        })
    }
}   