import { messages } from "../../messages/index.js"
import { followModel, userModel } from "../../model/index.js"
import { response } from "../../utils/index.js"

export const checkFollow = async (req, res, next) => {
    const followerId = req.userId
    const followingId = req.params.id

    const checkUser = await userModel.findOne({
        where: {
            id: followingId
        }
    })

    if (!checkUser) {
        return response(res, {
            status: false,
            statusCode: 400,
            message: messages.follow.INVALID_FOLLOWING
        })
    }

    if (followerId === followingId) {
        return response(res, {
            status: false,
            statusCode: 400,
            message: messages.follow.SAME_FOLLOWING
        })
    }

    const isAlreadyFollow = await followModel.findOne({
        where: {
            followingId, followerId
        }
    })
    // console.log(isAlreadyFollow);
    
    if (isAlreadyFollow) {
        return response(res, {
            status: false,
            statusCode:400,
            message:messages.follow.ALREADY_FOLLOW
        })
    }

    
    next()
}