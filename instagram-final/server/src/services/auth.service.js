import { userModel } from "../model/index.js"
import { hashedPassword, token } from "../utils/index.js"

export const registerService = async (data) => {
    try {
        const { email, password } = data
        const hashPassword = await hashedPassword(password)
        const res = await userModel.create({
            ...data,
            password: hashPassword
        })
        return {
            name: res.userName,
            email: res.email
        }

    } catch (error) {
        throw error
    }

}

export const loginService = async (data, user) => {
    try {
        const { id, name, email } = user
        const obj = {
            id,
            name,
            email
        }
        const tokenValue = token(obj,process.env.TOKENKEY)

        return tokenValue
    } catch (error) {
        throw error
    }
}