import { userModel } from "../../database/models/index.js"
import { messages } from "../../messages/index.js"
import { orignalPassword, response } from "../../utils/index.js"

export const checkUserExists = async (req, res, next) => {
    const { email } = req.body
    // console.log(email);

    const isExists = await userModel.findOne({
        where: {
            email
        }
    })

    if (isExists) {
        return response(res, {
            status: false,
            statusCode: 400,
            message: messages.user.USER_ALREADY_EXIST
        })
    }
    next()
}

export const checkUserNamePassword = async (req, res, next) => {
    const { email, password } = req.body

    const checkUser = await userModel.findOne({
        where: {
            email
        }
    })

    if (!checkUser) {
        return response(res, {
            status: false,
            statusCode: 400,
            message: messages.user.USER_NOT_FOUND
        })
    }
    const isSame = await orignalPassword(password, checkUser.password)

    if (!isSame) {
        return response(res, {
            status: false,
            statusCode: 400,
            message: messages.auth.INVALID_CREDENTIAL
        })
    }
    req.user = checkUser
    next()
}