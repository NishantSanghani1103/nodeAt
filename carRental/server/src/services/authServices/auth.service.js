import jwt from "jsonwebtoken"
import { userModel } from "../../models/userModels/user.model.js"
import { checkPassword, hashedPassword } from "../../utils/hashedPassword.js"

export const registerService = async (data) => {
    try {
        const { name, email, password, role } = data

        const checkUser = await userModel.findOne({
            where: {
                email
            }
        })

        if (checkUser) {
            return {
                status: false,
                statusCode: 409,
                message: "User Already Exists....!!"
            }
        }

        const hashPassword = await hashedPassword(password)

        const res = await userModel.create({
            name,
            email,
            role: role ? role : "user",
            password: hashPassword
        })

        return {
            status: true,
            dataRes: res
        }
    } catch (error) {
        throw error
    }
}

export const loginService = async (data) => {
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
        const isSame = await checkPassword(password, checkUser.password)

        if (!isSame) {
            return {
                status: false,
                statusCode: 401,
                message: "Password Doesn't Matched....!!"
            }
        }

        const obj = {
            name: checkUser.name,
            email: checkUser.email,
            role: checkUser.role
        }

        const token = jwt.sign(obj, process.env.TOKENKEY)

        return {
            status: true,
            token
        }
    } catch (error) {
        throw error
    }
}