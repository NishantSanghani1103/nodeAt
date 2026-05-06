import { userModel } from "../../models/userModels/user.model.js"

export const followUserService = async (followerId, followingId) => {
    try {
        const checkuser = await userModel.findByPk(followingId)

        if (!checkuser) {
            return {
                status: false,
                statusCode: 401,
                message: "Invalid Following Details....!!"
            }
        }

    } catch (error) {
        throw error
    }
}