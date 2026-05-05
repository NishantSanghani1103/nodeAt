import { where } from "sequelize"
import { userModel } from "../../models/user.model.js"
import { hashedPassword, orignalPassword } from "../../utils/hasPassword.js"
import jwt from "jsonwebtoken"
export const userRegisterService = async (data) => {
    try {
        const { name, password, email } = data

        const hashPassword = await hashedPassword(password)

        data.password = hashPassword

        // console.log(data);
        const res = await userModel.create(data)

        return res

    } catch (error) {
        throw error
    }
}

export const userLoginService = async (data) => {
    try {
        const { email, password } = data
        const checkUser = await userModel.findOne({
            where: {
                email
            }
        })
        if (!checkUser) {
            return {
                status: false,
                statusCode: 401,
                message: "User Doesn't Exists....!!"
            }
        }

        const isSame = await orignalPassword(password, checkUser.password)

        if (!isSame) {
            return {
                status: false,
                statusCode: 401,
                message: "Password Doesn't Matched....!!"
            }
        }

        const user = {
            id: checkUser.id,
            email
        }

        const token = jwt.sign(user, process.env.TOKENKEY)

        return {
            status: true,
            name: checkUser.name,
            token
        }

    } catch (error) {
        throw error
    }
}

export const forgotPasswordService = async (data) => {
    try {
        const { email, password, confirmPassword } = data
        const checkEmail = await userModel.findOne({
            where: {
                email
            }
        })
        console.log(checkEmail);

        if (!checkEmail) {
            return {
                status: false,
                statusCode: 401,
                message: "User Doesn't Exists....!!"
            }
        }

        const newHashedPassword = await hashedPassword(password)

        const changedPassword = await userModel.update(
            {
                password: newHashedPassword
            },
            {
                where: {
                    email
                }
            }
        )

        return {
            status: true
        }
    } catch (error) {
        throw error
    }
}


export const changePasswordService = async (data, userId) => {
    try {
        const { oldPassword, password } = data
        const checkUser = await userModel.findByPk(userId)
        const isSame = await orignalPassword(oldPassword, checkUser.password)
        if (!isSame) {
            return {
                status: false,
                statusCode: 409,
                message: "Current Password Doesn't Matched....!!"
            }
        }
        const hasPassword = await hashedPassword(password)
        const changePassword = await userModel.update(
            {
                password: hasPassword
            },
            {
                where: {
                    id:userId
                }
            }
        )


        return {
            status: true
        }

    } catch (error) {
        throw error
    }
}