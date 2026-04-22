import { categoryModel } from "./category.model.js";
import { subCategoryModel } from "./subCategory.model.js";
import { subSubCategoryModel } from "./subSubCategory.model.js";

categoryModel.hasMany(subCategoryModel, {
    as: "subCategories",
    foreignKey: "categoryId"
})
subCategoryModel.belongsTo(categoryModel, {
    as: "category",
    foreignKey: "categoryId"
})


categoryModel.hasMany(subSubCategoryModel, {
    as: "subSubCategories",
    foreignKey: "categoryId"
})

subSubCategoryModel.belongsTo(categoryModel, {
    as: "category",
    foreignKey: "categoryId"
})

subCategoryModel.hasMany(subSubCategoryModel, {
    as: "subSubCategories",
    foreignKey: "subCategoryId"
})


subSubCategoryModel.belongsTo(subCategoryModel, {
    as: "subCategory",
    foreignKey: "subCategoryId"
})

export { categoryModel, subCategoryModel, subSubCategoryModel }