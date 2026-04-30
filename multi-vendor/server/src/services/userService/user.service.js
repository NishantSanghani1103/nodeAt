import { userModel } from "../../models/authModels/auth.model.js"

export const userViewSerivce = async (userId) => {
    try {
        const data = await userModel.findByPk(userId,{
            attributes:{
                exclude:[
                    "password"
                ]
            }
        })
        return data

    } catch (error) {
        throw error
    }
}