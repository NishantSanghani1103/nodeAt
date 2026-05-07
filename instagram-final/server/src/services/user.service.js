import { bookmarkModel, followModel, postModel, userModel } from "../model/index.js"

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
                as: "posts"
            },
            {
                model: userModel,

                as: "followers",
                attributes: ["userName", "profilePicture"],
                through: {
                    attributes: []
                }
            },
            {
                model: userModel,
                as: "followings",
                attributes: ["userName", "profilePicture"],
                through: {
                    attributes: []
                }
            },
            {
                model: bookmarkModel,
                as: "bookMarks"
            }

        ]
    })
    // console.log(data);
    return data

}