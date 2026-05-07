import { messages } from "../messages/index.js"
import { followService } from "../services/index.js"
import { response } from "../utils/index.js"

export const followController = async (req, res) => {
    try {
        const followersId = req.userId
        const followingId = req.params.id
        // console.log(followersId);
        // console.log(followingId);
        const data=await followService(followersId,followingId)
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