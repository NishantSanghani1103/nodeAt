import { postService } from "../services/post.service.js";

export const postController = async (req, res) => {
    // console.log(req.body);

    try {
       const data = await postService(req.body)
        return res.status(201).json({
            status: true,
            message: "Post Uploaded Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}