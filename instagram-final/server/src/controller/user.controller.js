import { messages } from "../messages/index.js"
import { userViewService } from "../services/index.js"
import { response } from "../utils/index.js"

export const userViewController = async (req, res) => {
    try {
        const { userId } = req
        const data=await userViewService(userId)
        
        return response(res, {
            status: true,
            statusCode: 200,
            data,
            message: messages.general.OK
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: error.message
        })
    }
}