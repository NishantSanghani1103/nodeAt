import { followUserService } from "../../services/followService/follow.service.js"

export const followController = async (req, res) => {
    try {
        const followerId = req.userId
        const followingId = req.params.id
        const data = await followUserService(followerId, followingId)

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: false,
                message: data.message
            })
        }
        return res.status(201).json({
            status: true,
            message: "Followed...!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}