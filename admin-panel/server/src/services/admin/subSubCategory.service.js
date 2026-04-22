import { subCategoryModel } from "../../models/subCategory.model.js"
import { categoryModel } from "../../models/category.model.js"
import { subSubCategoryModel } from "../../models/subSubCategory.model.js"


export const subSubCategoryAddService = async (data) => {
    try {
        const { categoryId, subCategoryId, name } = data

        const checkCategory = await categoryModel.findByPk(categoryId)

        if (!checkCategory) {
            throw new Error("Please Select Valid Category....!!")
        }

        const checkSubCategory = await subCategoryModel.findByPk(subCategoryId)

        if (!checkSubCategory) {
            throw new Error("Please Select Valid Sub Category....!!")
        }


        const checkName = await subSubCategoryModel.findOne({
            where: {
                name: name,
                categoryId,
                subCategoryId
            }
        })

        if (checkName) {
            throw new Error("Sub Sub Category Name Already Exists....!!")
        }

        const res = await subSubCategoryModel.create(data)

        return res

    } catch (error) {
        throw error
    }
}

export const subSubCategoryViewService = async () => {
    try {
        const data = await subSubCategoryModel.findAll({
            include: [
                {
                    model: categoryModel,
                    as: "category",
                    attributes: ["id", "name"]
                },
                {
                    model: subCategoryModel,
                    as: "subCategory",
                    attributes: ["id", "name"]
                }
            ], order: [["createdAt", "DESC"]]
        })
        return data
    } catch (error) {
        throw error
    }
}

