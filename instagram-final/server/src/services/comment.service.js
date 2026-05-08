import { commentModel, postModel, userModel } from "../model/index.js"


export const checkPostForComment = async (postId) => {
    const data = await commentModel.findAll({
        where: {
            postId
        }
    })
    return data
}

export const commentAddService = async (userId, { text, postId }) => {
    try {
        const data = await commentModel.create({
            userId,
            postId,
            text
        })

        return data
    } catch (error) {
        throw error
    }
}

export const commentViewByPostService = async (data) => {
    try {
        const { postId } = data
        const res = await commentModel.findAll({
            where: {
                postId
            },
            attributes:{
                exclude:[
                    "userId",
                    "postId"
                ]
            },
            include: [
                {
                    model: userModel,
                    as: "user",
                    attributes: ["id", "userName", "profilePicture"]
                },
                {
                    model: postModel,
                    as: "posts",
                    attributes: ["id", "image", "caption","userId"],
                    include:[
                        {
                            model:userModel,
                            as:"user",
                            attributes:["userName","profilePicture"]
                        }
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        })
        return res
    } catch (error) {
        throw error
    }
}