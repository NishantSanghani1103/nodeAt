
import { Op } from "sequelize"
import { userModel } from "../models/user.model.js"
import { hashedPassword, orignalPassword } from "../util/user.util.js"
import { sequelize } from "../config/db.js"
import { walletModel } from "../models/waller.model.js"
import jwt from "jsonwebtoken"

// import { walletModel } from "../models/waller.model.js"

export const userService = async (data) => {
    const t = await sequelize.transaction()
    try {
        const { userEmail, userPassword, userMobile } = data
        // console.log(userPassword);
        const chechUser = await userModel.findOne({
            where: {
                [Op.or]: [
                    { userEmail: userEmail },
                    { userMobile: userMobile }
                ]
            },
            transaction: t
        })
        if (chechUser) {
            throw new Error("User Already Exist....!!")
        }

        const hasedPasswordValue = await hashedPassword(userPassword)
        // console.log(hasedPasswordValue);

        data['userPassword'] = hasedPasswordValue
        // console.log(data);

        delete data.userConfirmPassword
        // console.log(data);

        const res = await userModel.create(data, { transaction: t })

        // console.log(res.id);


        await walletModel.create(
            {
                userId: res.id,
                balance: 1000
            },
            {
                transaction: t
            }
        )


        await t.commit()
        return res

    } catch (error) {
        await t.rollback()
        throw error
    }
}
export const userLoginService = async (data) => {

    try {
        const { userEmail, userPassword } = data
        // console.log(userEmail, userPassword);


        const checkUser = await userModel.findOne({
            where: {
                userEmail: userEmail
            }
        })
        // console.log(checkUser);

        if (!checkUser) {
            throw new Error("User Doesn't Exists....!!")
        }
        const checkPassword = await orignalPassword(userPassword, checkUser.userPassword)
        // console.log(checkPassword);

        if (!checkPassword) {
            throw new Error("Password Doesn't Matched....!!")
        }

        const obj = {
            userId: checkUser.id,
            userEmail: checkUser.userEmail
        }

        console.log(obj);

        const token = jwt.sign(obj, process.env.JWT_SECRET);
        // console.log(token);
        return token

    } catch (error) {
        throw error
    }
}