import { messages } from "../messages/index.js"
import { response } from "../utils/index.js"

export const registerCotnroller = async (req, res) => {
    try {
        return response(res, {
            status: true,
            statusCode: 201,
            message: messages.auth.SIGNUP_SUCCESS
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: error.message
        })
    }
}