import { materialModel } from "../../models/material.model.js"

export const materialAddService = async (data) => {
    try {
        const { name } = data

        const checkMaterail = await materialModel.findOne({
            where: {
                name
            }
        })
        if (checkMaterail) {
            throw new Error("Material Already Exists....!!")
        }

        const res = await materialModel.create(data)

        return res
    } catch (error) {
        throw error
    }
}

export const materialViewService = async () => {
    try {
        const data = await materialModel.findAll({ order: [["createdAt", "DESC"]] })

        return data
    } catch (error) {
        throw error
    }
}