import { messages } from "../messages/index.js"
import { bookMarksAddService, bookMarkViewByUserService } from "../services/index.js"
import { response } from "../utils/index.js"

export const bookMarksAddController = async(req, res) => {
    try {
        const { userId } = req
        const data = await bookMarksAddService(userId, req.body)
        return response(res, {
            status: true,
            statusCode: 201,
            message: messages.general.SUCCESS,
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

export const bookMarksViewByUserController = async(req, res) => {
    try {
        const { userId } = req

        const data = await bookMarkViewByUserService(userId)
            // console.log(data);

        return response(res, {
            status: true,
            statusCode: 200,
            message: messages.general.OK,
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