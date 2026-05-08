import { messages } from "../messages/index.js"
import { postAddService, postAllViewService, postViewService } from "../services/index.js"
import { response } from "../utils/index.js"

export const postAddController = async (req, res) => {
    try {
        const { userId } = req
        // console.log(req.files);

        if (req.files) {
            if (req.files.image) {
                req.body.image = req.files.image.map((value) => value.filename)
            }
        }
        const data = await postAddService(userId, req.body)

        return response(res, {
            status: true,
            statusCode: 201,
            message: messages.general.SUCCESS,
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

export const postViewController = async (req, res) => {
    try {
        const { userId } = req
        const data = await postViewService(userId)

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

export const postAllViewController = async (req, res) => {
    try {
        
        const data = await postAllViewService()
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