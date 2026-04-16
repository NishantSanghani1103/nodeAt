import { commentService, viewCommentService } from "../services/comment.service.js";

export const commentController = async (req, res) => {
    try {
        const { postId } = req.params
        await commentService(req.body, postId)
        return res.status(201).json({
            status: true,
            message: "Comment Added Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const commnetViewController = async (req, res) => {
    try {
        const data = await viewCommentService()
        return res.status(200).json({
            status: true,
            message: "Comment Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}