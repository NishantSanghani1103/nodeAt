import { loginService, registerService } from "../../services/auth.service.js"

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
            message: "User Registered Successfully....!!",
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

        return res.status(201).json({
            status: true,
            message: "User Logged In Successfully....!!",
            name:data.name,
            role:data.role,
            token: data.token
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}