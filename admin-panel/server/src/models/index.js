import { categoryModel } from "./category.model.js";
import { colorModel } from "./color.model.js";
import { materialModel } from "./material.model.js";
import { productModel } from "./product.model.js";
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


// for the products...

categoryModel.hasMany(productModel, {
    as: "products",
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(categoryModel, {
    as: "category",
    foreignKey: "categoryId"
})


subCategoryModel.hasMany(productModel, {
    as: "products",
    foreignKey: "subCategoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(subCategoryModel, {
    as: "subCategory",
    foreignKey: "subCategoryId"
})

subSubCategoryModel.hasMany(productModel, {
    as: "products",
    foreignKey: "subSubCategoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(subSubCategoryModel, {
    as: "subSubCategory",
    foreignKey: "subSubCategoryId"
})


materialModel.hasMany(productModel, {
    as: "products",
    foreignKey: "materialId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(materialModel, {
    as: "material",
    foreignKey: "materialId"
})


colorModel.hasMany(productModel, {
    as: "products",
    foreignKey: "colorId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(colorModel, {
    as: "color",
    foreignKey: "colorId"
})
export { categoryModel, subCategoryModel, subSubCategoryModel, productModel }