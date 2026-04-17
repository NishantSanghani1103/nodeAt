import { userModel } from "../model/user.model.js"

export const readFileService = async (data) => {
    const res = await userModel.bulkCreate(data)
    // console.log(res);
}

export const exportService = async (data) => {
    const res=await userModel.findAll()

    return res
}