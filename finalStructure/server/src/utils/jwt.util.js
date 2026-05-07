import jwt from "jsonwebtoken"

export const token = (obj, tokenkey) => {
    return jwt.sign(obj, tokenkey)
}