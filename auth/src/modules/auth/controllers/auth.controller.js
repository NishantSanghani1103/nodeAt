
import { loginService, registerService } from "../services/auth.service.js";
export const registerController = async (req, res) => {
    try {
        const { userName, userEmail, userPassword, userMobile } = req.body

        if (!userPassword || !userEmail || !userPassword || !userMobile) {
            return res.status(401).json({
                status: false,
                message: "All The Fields Are Mandatory....!!"
            })
        }
        const data = await registerService(userName, userEmail, userPassword, userMobile)

        return res.status(201).json({
            status: true,
            message: "User Register Successfully...!!",
            action: data.command,
            rowCount: data.rowCount
        })

    } catch (error) {
        return res.status(401).json({
            status: false,
            error: error.message
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body
        if (!userEmail || !userPassword) {
            return res.status(401).json({
                status: false,
                message: "Please Fill All The Details....!!"
            })
        }
        const data = await loginService(userEmail, userPassword)
        return res.status(200).json({
            status: true,
            message: "User Logged In Successfully....!!"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message
        });
    }
}