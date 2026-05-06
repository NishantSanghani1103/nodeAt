import { userModel } from "../database/models/index.js"
import { messages } from "../messages/index.js"
import { checkUserExists } from "../services/auth.validation.js"
import { response } from "../utils/response.utils.js"

export const registerController = async (req, res) => {
    try {
        const { email, name, password } = req.body
        
        const isExists = await checkUserExists(email)
            console.log(isExists);
            
        if (!isExists.status) {
          
            
            return response(res, {
                status: false,
                statusCode: 400,
                message: isExists.message
            })
        }

        const data = await userModel.create({
            email,
            name,
            password
        })

        return response(res, {
            status: true,
            statusCode: 201,
            data,
            message: messages.user.USER_CREATED
        })
    } catch (error) {
        return response(res, {
            status: false,
            statusCode: 500,
            message: messages.general.INTERNAL_SERVER_ERROR
        })
    }
}