import pool from "../../../config/db.js"
import bcrypt from "bcrypt";
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
    const isMatch = await bcrypt.compare(userPassword, checkUser.user_password);
    console.log(isMatch);
    if (!isMatch) {
        throw new Error("Invalid Password....!!")
    }
    return userData
}