import { messages } from "../messages/index.js"
import { response, verify } from "../utils/index.js"

export const checkToken = (req, res, next) => {
    const token = req?.headers?.authorization?.split(" ")[1]
    if (!token) {
        return response(res, {
            status: false,
            statusCode: 400,
            message: messages.general.VALIDATION_ERROR
        })
    }
    // console.log(token);


    const decode = verify(token, process.env.TOKENKEY)
    // console.log(decode);
    req.userId = decode.id
    next()

}