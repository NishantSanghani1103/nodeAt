import { changePasswordService, loginService, registerService } from "../services/auth.service.js";
export const registerController = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status: false,
                message: "All The Fields Are Mandatory....!!"
            })
        }
        const { userName, userEmail, userPassword, userMobile } = req.body

        if (!userPassword || !userEmail || !userPassword || !userMobile) {
            return res.status(400).json({
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
        return res.status(500).json({
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
        // console.log(data.token);

        return res.status(200).json({
            status: true,
            message: "User Logged In Successfully....!!",
            token: data.token
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message
        });
    }
}

export const changePassword = async (req, res) => {
    const { userId } = req
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body
        if (!oldPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Please Fill All Fields....!!"
            })
        }
        if (newPassword != confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Confirm Password Does Not Matched....!!"
            })
        }
        const data = await changePasswordService(userId, oldPassword, newPassword, confirmPassword)
        return res.status(200).json({
            status: true,
            message: "Password Changed Succesfully....!!"
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message
        })
    }
}