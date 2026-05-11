import { bookmarkModel, postModel, userModel } from "../model/index.js"

export const checkBookMarksValidation = async(postId, userId) => {
    const checkPost = await postModel.findByPk(postId)
    const isBookMark = await bookmarkModel.findOne({
        where: {
            userId,
            postId
        }
    })
    return { checkPost, isBookMark }
}
export const bookMarksAddService = async(userId, data) => {
    try {
        const { postId } = data
        const res = await bookmarkModel.create({
            userId,
            postId
        })
        return res
    } catch (error) {
        throw error
    }
}

export const bookMarkViewByUserService = async(userId) => {
    try {
        const res = await bookmarkModel.findAll({
            where: {
                userId
            },
            attributes: {
                exclude: [
                    "postId",
                    "userId"
                ]
            },
            include: [{
                    model: userModel,
                    as: "user",
                    attributes: ["userName", "email"]
                },
                {
                    model: postModel,
                    as: "posts",
                    attributes: ["image", "caption", "id"]
                }
            ]
        })


        return res
    } catch (error) {
        throw error
    }
}