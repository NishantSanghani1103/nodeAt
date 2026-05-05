import { loginService, registerService } from "../../services/authServices/auth.service.js"

export const registerController = async (req, res) => {
    try {
        const data = await registerService(req.body)
        if (!data.status) {
            return res.status(data.statusCode).json({
                status: false,
                message: data.message
            })
        }
        return res.status(201).json({
            status: true,
            message: "User Created Successfully....!!",
            data: data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const data = await loginService(req.body)

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: false,
                message: data.message
            })
        }

        return res.status(200).json({
            status: true,
            message: "User Logged In Successfully....!!",
            token: data.token
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}