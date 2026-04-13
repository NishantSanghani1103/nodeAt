import env from "dotenv"
env.config()
import pool from "../../../config/db.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const registerService = async (userName, userEmail, userPassword, userMobile) => {
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const checkRegister = await pool.query(
        `SELECT * FROM register
         WHERE user_email=$1
        `, [userEmail]
    )
    if (checkRegister.rowCount != 0) {
        throw new Error("User Already Exists....!!");
    }
    const data = await pool.query(
        `INSERT INTO register
        (user_name,user_email,user_password,user_mobile)
        VALUES
         ($1,$2,$3,$4)
        `, [userName, userEmail, hashedPassword, userMobile]
    )
    console.log("row Data", data.rows[0]);
    return data
}

export const loginService = async (userEmail, userPassword) => {
    const userData = await pool.query(
        `SELECT * FROM register
         WHERE user_email=$1
        `, [userEmail]
    )
    if (userData.rowCount == 0) {
        throw new Error("Invalid Email....!!")
    }
    const checkUser = await userData.rows[0]

    const user = {
        userName: checkUser.user_email,
        userId: checkUser.user_id
    }
    console.log(user);


    const isMatch = await bcrypt.compare(userPassword, checkUser.user_password);
    // console.log(isMatch);
    if (!isMatch) {
        throw new Error("Invalid Password....!!")
    }
    const token = jwt.sign(user, "Fun@1234");

    console.log(token);
    return { userData, token }
}


export const changePasswordService = async (userId, oldPassword, newPassword, confirmPassword) => {

    console.log(userId);

    const checkUser = await pool.query(
        `SELECT user_password FROM register
         WHERE user_Id=$1
        `, [userId]
    )
    // console.log(checkUser);

    if (checkUser.rowCount == 0) {
        throw new Error("User Does Not Exists....!!")
    }
    const userPassword = checkUser.rows[0].user_password


    console.log(userPassword);

    const isMatch = await bcrypt.compare(oldPassword, userPassword);
    console.log(isMatch);

    if (!isMatch) {
        throw new Error("Old Password Doesn't Matched....!!")
    }
    const hashedPassword = await bcrypt.hash(confirmPassword, 10);
    const updatePassword = await pool.query(
        `UPDATE register SET
         user_password=$1
         WHERE user_id=$2
        `, [hashedPassword, userId]
    )

    console.log(updatePassword);

}