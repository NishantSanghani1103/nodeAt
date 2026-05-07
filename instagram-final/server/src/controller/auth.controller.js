import { messages } from "../messages/index.js"
import { loginService, registerService } from "../services/index.js"
import { response } from "../utils/index.js"

export const registerController = async (req, res) => {
    try {
        if (req.file) {
            if (req.file.filename) {
                req.body.profilePicture = req.file.filename
            }
        }
        const data = await registerService(req.body)
        return response(res, {
            status: true,
            statusCode: 201,
            message: messages.auth.SIGNUP_SUCCESS,
            data
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: error.message
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const { user } = req

        const data = await loginService(req.body, user)


        return response(res, {
            status: false,
            statusCode: 200,
            data,
            message: messages.auth.SIGNIN_SUCCESS
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: error.message
        })
    }
}