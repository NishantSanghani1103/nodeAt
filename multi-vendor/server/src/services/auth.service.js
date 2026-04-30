import { userModel } from "../models/authModels/auth.model.js"
import { checkPassword, hashedPassword } from "../utils/hashedPasswod.js"
import jwt from "jsonwebtoken"
export const registerService = async (data) => {
    try {
        const { email, name, password, role } = data

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


        const user = await userModel.create({
            name,
            email,
            password: hashPassword,
            role,
            isApproved: role === "seller" ? false : true
        })

        return {
            status: true,
            dataRes: user
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
                message: "Invalid User Or Password....!!"
            }
        }

        const user = {
            userId: checkUser.id,
            role: checkUser.role,
            name: checkUser.name,
            email: checkUser.email
        }

        const token = jwt.sign(user, process.env.TOKENKEY)

        return {
            status: true,
            token,
            name: checkUser.name,
            role: checkUser.role
        }
    } catch (error) {
        throw error
    }
}