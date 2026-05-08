import { bookmarkModel, commentModel, followModel, likeModel, postModel, userModel } from "../model/index.js"

export const userViewService = async (userId) => {
    const data = await userModel.findAll({
        where: {
            id: userId
        },
        attributes: {
            exclude: [
                "password"
            ]
        },
        include: [
            {
                model: postModel,
                as: "posts",
                attributes: ["id", "image", "imageUrl", "caption"]
            },
            {
                model: userModel,

                as: "followers",
                attributes: ["id", "userName", "profilePicture"],
                through: {
                    attributes: []
                }
            },
            {
                model: userModel,
                as: "followings",
                attributes: ["id", "userName", "profilePicture"],
                through: {
                    attributes: []
                }
            },
            {
                model: bookmarkModel,
                as: "bookMarks"
            },
            {
                model: likeModel,
                as: "likes",
                attributes:{
                    exclude:[
                        "userId",
                        "postId"
                    ]
                },
                include: [
                    {
                        model: postModel,
                        as: "posts",
                        attributes: ["id", "image", "imageUrl", "caption"]
                    },
                    {
                        model: userModel,
                        as: "user",
                        attributes: ["id", "userName", "profilePicture"],
                    }
                ]
            },
            {
                model: commentModel,
                as: "comments",
                
                attributes: {
                    exclude: [
                        "userId",
                        "postId",
                        "createdAt",
                        "updatedAt"
                    ]
                },
                include: [
                    {
                        model: postModel,
                        as: "posts",
                        attributes: ["image", "caption"]
                    }
                ]
            }

        ]
    })
    // console.log(data);
    return data

}