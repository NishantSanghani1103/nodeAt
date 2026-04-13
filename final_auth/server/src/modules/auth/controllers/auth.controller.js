import { changePasswordService, loginService, registerService } from "../services/auth.service.js";

export const registerController = async (req, res) => {
    try {
        const { userName, userEmail, userPassword } = req.body
        // // console.log(userName, userEmail, userPassword);
        // if (!userName || !userEmail || !userPassword) {
        //     return res.status(400).json({
        //         status: false,
        //         message: "Please Fill All The Required Fields....!!"
        //     })
        // }
        await registerService(userName, userEmail, userPassword)
        return res.status(200).json({
            status: true,
            message: "Registration Successfully....!!"
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
        const { userEmail, userPassword } = req.body
        if (!userEmail || !userPassword) {
            return res.status(400).json({
                status: false,
                message: "Please Fill All The Required Fields....!!"
            })
        }

        const data = await loginService(userEmail, userPassword)
        // console.log(data);


        return res.status(200).json({
            status: true,
            message: "User Logged In....!!",
            token: data.token,
            user: data.user.userName
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body
        const { userId } = req

        if (!oldPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Please Fill All The Required Fields...!!"
            })
        }
        if (newPassword != confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Confirm Password Doesn't Matched...!!"
            })
        }

        const data = await changePasswordService(oldPassword, newPassword, confirmPassword,userId)
        // console.log(data);
        
        // console.log(userId);


        return res.status(201).json({
            status: true,
            message: "Password Changed Successfully...!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}