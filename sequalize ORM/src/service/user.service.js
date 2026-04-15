import { customer } from "../models/user.model.js"

export const userAddService = async (data) => {
    return await customer.create(data)
}

export const userViewService = async () => {
    return await customer.findAll()
}

export const userDeleteService = async (id) => {
    return await customer.destroy({ where: { id } })
}

export const userUpdateService = async (data, id) => {
    return await customer.update(data, { where: { id } })
}