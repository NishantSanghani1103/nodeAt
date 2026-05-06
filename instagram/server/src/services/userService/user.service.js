
import { userModel, postModel, followModel } from "../../models/index.js";




export const userViewService = async (userId) => {
    try {
        console.log(userId);

        const res = await userModel.findByPk(userId, {
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
                    as: "followers"
                },
                {
                    model: userModel,
                    as:"followings"
                }
            ]
        })

        return res
    } catch (error) {
        throw error
    }
}