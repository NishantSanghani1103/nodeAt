import pool from "../config/db.js";
import { hashedPassword } from "../utils/checkUserPassword.js"

export const userAddServices = async (userName, userEmail, userPassword, userConfirmPassword, userMobile) => {
    const hashed = await hashedPassword(userConfirmPassword)
    // console.log(hashed);
    const addData = pool.query(
        `INSERT INTO user_details
         (user_name,user_email,user_password,user_mobile)
         VALUES($1,$2,$3,$4)
        `, [userName, userEmail, hashed, userMobile]
    )
    return addData
}

export const userViewServices = async () => {
    const data = await pool.query(
        `SELECT * FROM user_details`
    )
    return data.rows
}

export const userDeleteServices = async (id) => {
    const data = await pool.query(
        `DELETE  FROM user_details
         WHERE user_id=$1
        `, [id]
    )
    return data
}

export const userSingleViewService = async (id) => {
    const data = await pool.query(
        `SELECT * FROM user_details
         WHERE user_id=$1
        `, [id]
    )
    return data.rows[0]
}

export const userUpdateService = async (userName, userEmail, userPassword, userConfirmPassword, userMobile, id) => {
    const hashed = await hashedPassword(userConfirmPassword)
    const data = await pool.query(
        `UPDATE user_details
        SET 
        user_name=$1,
        user_email=$2,
        user_password=$3,
        user_mobile=$4
        WHERE
        user_id=$5
        `, [userName, userEmail,hashed, userMobile, id]
    )
    return data
}