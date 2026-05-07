import { followModel } from "../model/index.js"

export const followService = async (followerId, followingId) => {
    try {
        const data = await followModel.create({
            followerId,
            followingId
        })
        console.log(data);
        
        return data
    } catch (error) {
        throw error
    }
}