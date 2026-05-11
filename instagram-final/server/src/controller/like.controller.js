import { messages } from "../messages/index.js"
import { likeAddService, likeDeleteService, likeViewAllService, likeViewByPostIdService, likeViewByUserIdService } from "../services/index.js"
import { response } from "../utils/index.js"

export const likeAddController = async (req, res) => {
    try {
        const { userId } = req
        const data = await likeAddService(userId, req.body)

        return response(res, {
            status: true,
            statusCode: 201,
            message: messages.post.LIKE
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: error.message
        })
    }
}

export const likeViewByUserIdController = async (req, res) => {
    try {
        const { userId } = req
        const data = await likeViewByUserIdService(userId)
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

export const likeViewAllController = async (req, res) => {
    try {
        const data = await likeViewAllService()
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

export const likeDeleteController = async (req, res) => {
    try {
        const { userId } = req
        // console.log(userId);

        const data = await likeDeleteService(userId, req.body)
        return response(res, {
            status: true,
            statusCode: 200,
            message: messages.post.UNLIKED,
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


export const likeViewByPostIdController = async (req, res) => {
    try {
        const { postId } = req.params

        const data = await likeViewByPostIdService(postId)
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