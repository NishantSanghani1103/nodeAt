import { categoryModel } from "../../models/category.model.js"
import { colorModel } from "../../models/color.model.js"
import { materialModel } from "../../models/material.model.js"
import { productModel } from "../../models/product.model.js"
import { subCategoryModel } from "../../models/subCategory.model.js"
import { subSubCategoryModel } from "../../models/subSubCategory.model.js"

export const productAddService = async (data) => {
    try {
        const { categoryId, subCategoryId, subSubCategoryId, materialId, colorId, name } = data

        const checkSubCategory = await subCategoryModel.findOne({
            where: {
                id: subCategoryId,
                categoryId: categoryId
            }
        })


        if (!checkSubCategory) {
            return {
                status: false,
                statusCode: 401,
                message: "Invalid SubCategory for selected Category....!!"
            }

        }

        const subSubCategoryCheck = await subSubCategoryModel.findOne({
            where: {
                id: subSubCategoryId,
                subCategoryId: subCategoryId
            }
        })

        // console.log(subSubCategoryCheck);

        if (!subSubCategoryCheck) {
            return {
                status: false,
                statusCode: 401,
                message: "Invalid SubSubCategory for selected SubCategory....!!"
            }

        }
        const checkItems = await productModel.findOne({
            where: {
                categoryId,
                subCategoryId,
                subSubCategoryId,
                name,
                colorId,
                materialId
            }
        })
        if (checkItems) {
            return {
                status: false,
                statusCode: 409,
                message: "Product Already Exists....!!"
            }

        }
        const res = await productModel.create(data)
        return {
            status: true,
            dataRes: res
        }
    } catch (error) {
        throw error
    }
}
export const productViewService = async () => {
    try {


        const data = await productModel.findAll(
            {
                attributes: {
                    exclude: [
                        "categoryId",
                        "subCategoryId",
                        "subSubCategoryId",
                        "materialId",
                        "colorId"
                    ]
                },
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
                    },
                    {
                        model: subSubCategoryModel,
                        as: "subSubCategory",
                        attributes: ["id", "name"]
                    },
                    {
                        model: materialModel,
                        as: "material",
                        attributes: ["id", "name"]
                    },
                    {
                        model: colorModel,
                        as: "color",
                        attributes: ["id", "name"]
                    }
                ],
                order: [["createdAt", "DESC"]]
            }
        )

        return data
    } catch (error) {
        throw error
    }
}

export const productSingleViewService = async (id) => {
    try {
        const data = await productModel.findOne({
            where: {
                id
            },
            attributes: {
                exclude: [
                    "categoryId",
                    "subCategoryId",
                    "subSubCategoryId",
                    "materialId",
                    "colorId"
                ]
            },
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
                },
                {
                    model: subSubCategoryModel,
                    as: "subSubCategory",
                    attributes: ["id", "name"]
                },
                {
                    model: materialModel,
                    as: "material",
                    attributes: ["id", "name"]
                },
                {
                    model: colorModel,
                    as: "color",
                    attributes: ["id", "name"]
                }
            ]
        })
        return data
    } catch (error) {
        throw error
    }
}