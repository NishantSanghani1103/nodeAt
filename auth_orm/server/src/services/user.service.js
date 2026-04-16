import { hashPassword } from "../../../../final_auth/server/src/utils/hash.js"
import { userRegister } from "../model/auth.model.js"
import { orignalPassword } from "../utils/authPassword.util.js"

export const userChangePasswordService = async (data) => {
    const { userId, oldPassword, confirmPassword } = data
    const { dataValues } = await userRegister.findByPk(userId)
    const checkPassword = await orignalPassword(oldPassword, dataValues.userPassword)
    if (!checkPassword) {
        throw new Error("Old Password Doesn't Matched....!!")
    }

    const hashedPassword = await hashPassword(confirmPassword)
    await userRegister.update(
        {
            userPassword: hashedPassword
        },
        {
            where: {
                id: userId
            }
        }
    )


}