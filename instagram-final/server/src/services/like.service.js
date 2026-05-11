import { likeModel, postModel, userModel } from "../model/index.js"


export const isPostExists = async (postId, userId) => {
    const isPost = await postModel.findByPk(postId)

    const isSameUserLike = await likeModel.findOne({
        where: {
            userId, postId
        }
    })
    return { isPost, isSameUserLike }
}

// export const checkLiked = async(postId, userId)

export const likeAddService = async (userId, { postId }) => {
    try {
        const data = await likeModel.create({
            userId,
            postId
        })

        return data
    } catch (error) {
        throw error
    }
}


export const likeViewAllService = async () => {
    try {
        const data = await likeModel.findAll({
            attributes: {
                exclude: [
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
                    attributes: ["id", "image", "caption"]
                }
            ],
            order: [["createdAt", "DESC"]]
        }
        )

        return data
    } catch (error) {
        throw error
    }
}

export const likeViewByUserIdService = async (userId) => {
    try {
        const data = await likeModel.findAll({
            where: {
                userId
            },
            attributes: {
                exclude: [
                    "userId",
                    "postId"
                ]
            },
            include: [
                {
                    model: userModel,
                    as: "user",
                    attributes: ["userName", "id", "profilePicture"]
                },
                {
                    model: postModel,
                    as: "posts",
                    attributes: ["id", "image", "caption"]
                }
            ]
        })
        return data
    } catch (error) {
        throw error
    }
}


export const likeDeleteService = async (userId, data) => {
    try {
        const { postId } = data
        const res = await likeModel.destroy({
            where: {
                userId,
                postId
            }
        })

        return res
    } catch (error) {
        throw error
    }
}

export const likeViewByPostIdService = async (postId) => {
    try {
        const data = await likeModel.findAll({
            where: {
                postId
            },
            include: [
                {
                    model: userModel,
                    as:"user",
                    attributes:["userName","profilePicture"]
                }
            ]
        })

        return data
    } catch (error) {
        throw error
    }
}