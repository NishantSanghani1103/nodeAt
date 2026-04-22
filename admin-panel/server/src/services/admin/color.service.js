import { colorModel } from "../../models/color.model.js"


export const colorAddSerive = async (data) => {
    try {
        const { name } = data

        const checkColor = await colorModel.findOne({
            where: {
                name
            }
        })

        if (checkColor) {
            throw new Error("Color Already Exists....!!")
        }

        const res = await colorModel.create(data)

        return res
    } catch (error) {
        throw error
    }
}

export const colorViewService = async () => {
    try {
        const data = await colorModel.findAll({order:[["createdAt","DESC"]]})

        return data

    } catch (error) {
        throw error
    }
}