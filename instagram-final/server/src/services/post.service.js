import { commentModel, likeModel, postModel, userModel } from "../model/index.js"

export const postAddService = async (userId, data) => {
    try {
        const { image, caption } = data
        const res = await postModel.create({
            userId,
            caption,
            image
        })

        return res
    } catch (error) {
        throw error
    }
}

export const postViewService = async (userId) => {
    try {
        const data = await postModel.findAll({
            where: {
                userId
            },
            include: [
                {
                    model: userModel,
                    as: "user",
                    attributes: ["userName", "profilePicture"]
                },
                {
                    model: commentModel,
                    as: "comments",
                    attributes: {
                        exclude: [
                            "updatedAt",
                            "createdAt",
                            "userId",
                            "postId"
                        ]
                    },
                    include: [
                        {
                            model: userModel,
                            as: "user",
                            attributes: ["userName", "profilePicture"]
                        },
                        {
                            model: postModel,
                            as: "posts",
                            attributes: ["image", "caption"]
                        }
                    ]
                },
                {
                    model: likeModel,
                    as: "likes",
                    attributes: {
                        exclude: [
                            "updatedAt",
                            "createdAt",
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
                            attributes: ["caption", "image", "id"]
                        }
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        })

        return data
    } catch (error) {
        throw error
    }
}


export const postAllViewService = async () => {
    try {
        const data = await postModel.findAll({
            include: [
                {
                    model: userModel,
                    as: "user",
                    attributes: ["userName", "profilePicture"]
                },
                {
                    model: commentModel,
                    as: "comments",
                    attributes: ["id", "text"],
                    include: [
                        {
                            model: postModel,
                            as: "posts",
                            attributes: ["id", "caption", "image"]
                        },
                        {
                            model: userModel,
                            as: "user",
                            attributes: ["userName", "profilePicture"]
                        }
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        })

        return data
    } catch (error) {
        throw error
    }
}