import { messages } from "../messages/index.js"
import { followModel } from "../model/index.js"
import { response } from "../utils/index.js"

export const followService = async (followerId, followingId) => {
    try {
        const data = await followModel.create({
            followerId,
            followingId
        })
        // console.log(data);

        return data
    } catch (error) {
        throw error
    }
}

export const unfollowService = async (followerId, followingId) => {
    try {
        const findUser = await followModel.destroy({
            where: {
                followerId,
                followingId
            }
        })

        return findUser
    } catch (error) {
        throw error
    }
}