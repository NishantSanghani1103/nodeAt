import { messages } from "../../messages/index.js"
import { userModel } from "../../model/index.js"
import { checkPassword, response } from "../../utils/index.js"

export const checkUser = async (req, res, next) => {
    const { email } = req.body
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

export const checkUserPassword = async (req, res, next) => {
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

    const isSame = await checkPassword(password, checkUser.password)

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