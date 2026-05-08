import { messages } from "../messages/index.js"
import { commentAddService, commentViewByPostService } from "../services/index.js"
import { response } from "../utils/index.js"

export const commentAddController = async (req, res) => {
    try {
        const { userId } = req
        const data = await commentAddService(userId, req.body)
        return response(res, {
            status: true,
            statusCode: 201,
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

export const commentViewPostController = async (req, res) => {
    try {
        const data = await commentViewByPostService(req.params)
        return response(res, {
            status: true,
            statusCode: 200,
            message: messages.general.OK,
            data
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: error.message
        })
    }
}