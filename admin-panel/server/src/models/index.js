import { categoryModel } from "./category.model.js";
import { subCategoryModel } from "./subCategory.model.js";

categoryModel.hasMany(subCategoryModel, {
    as: "subCategories",
    foreignKey: "categoryId"
})
subCategoryModel.belongsTo(categoryModel, {
    as: "category",
    foreignKey: "categoryId"
})

export { categoryModel, subCategoryModel }