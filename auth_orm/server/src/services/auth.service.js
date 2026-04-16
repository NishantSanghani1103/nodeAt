// import env from "dotenv"
// env.config()
import jwt from "jsonwebtoken"
import { hashPassword } from "../../../../final_auth/server/src/utils/hash.js";
import { userRegister } from "../model/auth.model.js"
import { orignalPassword } from "../utils/authPassword.util.js";
export const authRegisterService = async (data) => {
    const { userEmail } = data
    const checkUser = await userRegister.findOne({
        where: {
            userEmail: userEmail
        }
    })
    if (checkUser) {
        throw new Error("User Already Exists....!!!")
    }
    const finalPassword = hashPassword(data.userConfirmPassword)
    if (data) {
        data['userPassword'] = finalPassword
    }
    const res = await userRegister.create(data)
    return res
}


export const authLoginService = async (data) => {
    const { userEmail, userPassword } = data
    const checkUser = await userRegister.findOne(
        {
            where: {
                userEmail: userEmail
            }
        }
    )
    if (!checkUser) {
        throw new Error("User Doesn't Exists....!!")
    }
    const { dataValues } = checkUser
    // console.log(dataValues);
    const isPasswordMatch = await orignalPassword(userPassword, dataValues.userPassword)
    // console.log(isPasswordMatch);

    if (!isPasswordMatch) {
        throw new Error("Password Doesn't Matched....!!")
    }
    const user = {
        userId: dataValues.id,
        userName: dataValues.userName,
        userEmail: dataValues.userEmail
    }
    // console.log(user);


    const token = jwt.sign(user, process.env.TOKENKEY);
    // console.log(token);

    return token
}