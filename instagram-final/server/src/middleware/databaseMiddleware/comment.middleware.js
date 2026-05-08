import { messages } from "../../messages/index.js"
import { postModel } from "../../model/index.js"
import { response } from "../../utils/index.js"

export const checkAddComment = async (req, res, next) => {
    const { postId } = req.body

    const checkPost = await postModel.findByPk(postId)

    if (!checkPost) {
        return response(res, {
            status: false,
            statusCode: 400,
            message: messages.post.INVALID_POST
        })
    }
    next()
}