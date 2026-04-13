import env from "dotenv"
env.config()
import pool from "../../../config/db.js"
import { comparePassword, hashPassword } from "../../../utils/hash.js"
import jwt from "jsonwebtoken"
export const registerService = async (userName, userEmail, userPassword) => {
    const checkUser = await pool.query(
        `SELECT * FROM register
         WHERE user_email=$1
        `, [userEmail]
    )

    if (checkUser.rowCount != 0) {
        throw new Error("User Email Already Exists....!!")
    }
    const hashedPassword = hashPassword(userPassword)
    const addUser = pool.query(
        `INSERT INTO register(user_name,user_email,user_password)
         VALUES($1,$2,$3)
        `, [userName, userEmail, hashedPassword]
    )
    // console.log(addUser);

}
export const loginService = async (userEmail, userPassword) => {
    const checkUser = await pool.query(
        `SELECT * FROM register
         WHERE user_email=$1
        `, [userEmail]
    )

    if (checkUser.rowCount == 0) {
        throw new Error("User Doesn't Exists....!!")
    }

    const userDetails = checkUser.rows[0]

    const password = comparePassword(userPassword, userDetails.user_password)

    if (!password) {
        throw new Error("Incorrect Password....!!")
    }
    const user = {
        userName: userDetails.user_name,
        userId: userDetails.user_id
    }
    const token = jwt.sign(user, process.env.TOKEN)
    return { userDetails, token, user }
}

export const changePasswordService = async (oldPassword, newPassword, confirmPassword, userId) => {
    const checkUser = await pool.query(
        `SELECT user_password FROM register
         WHERE user_id=$1
        `, [userId]
    )
    // console.log(checkUser);
    const userPassword = checkUser.rows[0].user_password

    const password = comparePassword(oldPassword, userPassword)

    if (!password) {
        throw new Error("Currunt Password Doesn't Matched....!!")
    }

    const has = hashPassword(confirmPassword)

    const updatePassword = pool.query(
        `UPDATE register 
        SET user_password=$1
        WHERE user_id=$2
        `, [has, userId]
    )

    
    return updatePassword

}