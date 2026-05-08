import { messages } from "../messages/index.js"
import { followService, unfollowService } from "../services/index.js"
import { response } from "../utils/index.js"

export const followController = async (req, res) => {
    try {
        const followersId = req.userId
        const followingId = req.params.id
        // console.log(followersId);
        // console.log(followingId);
        const data = await followService(followersId, followingId)
        return response(res, {
            status: true,
            statusCode: 201,
            message: messages.follow.OK
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: error
        })
    }
}

export const unfollowController = async (req, res) => {
    try {
        const followerId = req.userId
        const followingId = req.params.id
        const data = await unfollowService(followerId, followingId)

        return response(res, {
            status: true,
            statusCode: 200,
            message: messages.follow.UNFOLLOW,
            data
        })
    } catch (error) {
        return response(res, {
            status: false,
            statucCode: 500,
            message: error.message
        })
    }
}