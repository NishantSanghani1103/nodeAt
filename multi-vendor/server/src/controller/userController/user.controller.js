import { userViewSerivce } from "../../services/userService/user.service.js"

export const userViewController = async (req, res) => {
    try {
        const { userId } = req
        const data = await userViewSerivce(userId)

        return res.status(201).json({
            status: true,
            message: "User Registered Successfully....!!",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}