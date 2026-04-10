import pool from "../../../config/db.js"

export const getUserViewService = async () => {
    const data = await pool.query(
        "SELECT * FROM users ORDER BY user_id"
    )
    return data.rows
}

export const userDeleteService = async (id) => {
    const data = await pool.query(
        `DELETE FROM users
         WHERE user_id=${id}
        `
    )
    return data
}