import { userModel } from "../database/models/index.js"
import { messages } from "../messages/index.js"


export const checkUserExists = async (email) => {
    const checkUser = await userModel.findOne({
        where: {
            email
        }
    })
    if (checkUser) {
        return {
            status: false,
            message: messages.user.USER_ALREADY_EXIST
        }
    }
    return {
        status: true
    }
}