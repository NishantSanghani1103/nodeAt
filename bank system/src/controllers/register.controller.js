import { userLoginService, userService } from "../services/user.service.js"

export const userRegisterController = async (req, res) => {
    try {
        const data = await userService(req.body)
        console.log(data);

        return res.status(201).json({
            status: true,
            message: "User Registered Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const userLoginController = async (req, res) => {
    // console.log(req.body);
    
    try {
        const data = await userLoginService(req.body)
        return res.status(200).json({
            status: true,
            message: "User Logged In Successfully....!!",
            token:data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}