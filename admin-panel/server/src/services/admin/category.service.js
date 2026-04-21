import { categoryModel } from "../../models/category.model.js"

export const categoryAddService = async (data) => {
    try {
        const res = await categoryModel.create(data)

        return res
    } catch (error) {
        throw error
    }
}