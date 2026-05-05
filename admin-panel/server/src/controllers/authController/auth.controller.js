import { changePasswordService, forgotPasswordService, userLoginService, userRegisterService } from "../../services/authServices/auth.service.js"

export const userRegisterController = async (req, res) => {
    try {
        const data = await userRegisterService(req.body)
        return res.status(201).json({
            status: false,
            message: "User Registered Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const userLoginController = async (req, res) => {
    try {
        const data = await userLoginService(req.body)
        // console.log(data);

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: data.status,
                message: data.message
            })
        }

        return res.status(201).json({
            status: false,
            message: "User LoggedIn Successfully....!!",
            name: data.name,
            token: data.token
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const forgotPasswrodController = async (req, res) => {
    try {

        const data = await forgotPasswordService(req.body)
        // console.log(data);

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: true,
                message: data.message
            })
        }

        return res.status(201).json({
            status: true,
            message: "Password Changed Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const changePasswordController = async (req, res) => {
    try {
        const { userId } = req
        const data = await changePasswordService(req.body,userId)
        // console.log(data);

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: true,
                message: data.message
            })
        }

        return res.status(201).json({
            status: true,
            message: "Password Changed Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}