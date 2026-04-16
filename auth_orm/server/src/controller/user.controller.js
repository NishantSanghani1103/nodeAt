import { userChangePasswordService } from "../services/user.service.js";

export const userChangePasswordController = async (req,res) => {
    // console.log(req.body);
    try {
        await userChangePasswordService(req.body)
        return res.status(201).json({
            status: true,
            message: "User Password Changed Successfully...!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message
        })
    }
}