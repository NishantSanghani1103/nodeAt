import { userRegister } from "../model/auth.model.js";
import { commentModel } from "../model/commnet.model.js"
import { postModel } from "../model/post.model.js";

export const commentService = async (data, postId) => {
    const { message, userId } = data
    const post = await postModel.findByPk(postId);

    if (!post) {
        throw new Error("Post Not Found....!!");
    }
    const res = await commentModel.create({
        message: message,
        postId: postId,
        userRegisterId: userId
    })
    // console.log(res);
}

export const viewCommentService = async (userId) => {
    const data = await commentModel.findAll({
        where:{
            userRegisterId:userId
        },
        include: [
            {
                model: userRegister,
                attributes:["id","userName"]
            },
            {
                model:postModel,
                attributes:["id","title"]
            }
        ]
    })
   
    return data

}