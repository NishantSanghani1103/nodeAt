import pool from "../config/db.js"

export const userAddService = async (obj) => {
    const { userName, userEmail, categoryImage } = obj
    const data = await pool.query(
        `INSERT INTO category
         (user_name,user_email,categoryImage)
         VALUES
         ($1,$2,$3)
        `, [userName, userEmail, categoryImage]
    )
    return data

}

export const userGetService = async () => {
    const data=await pool.query(
        `SELECT * FROM category`
    )
    return data.rows
}