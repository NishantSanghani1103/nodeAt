import pool from "../../../config/db.js"

export const userAddService = async (userName, userEmail, userMobile) => {
    await pool.query(
        `INSERT INTO users
        (userName,userEmail,userMobile)
        VALUES
        ($1,$2,$3)
        `, [userName, userEmail, userMobile]
    )
}

export const userUpdateService = async (userName, userEmail, userMobile, id) => {
    const checkUserDetails = await pool.query(
        `SELECT * FROM users
        WHERE user_id=$1
        `, [id]
    )
    if (checkUserDetails.rowCount == 0) {
        return {
            type: "NOT_FOUND"
        }
    }
    const userDetails = checkUserDetails.rows[0]
    // console.log(userDetails);
        
    if (userDetails.username == userName && userDetails.usermobile == userMobile && userDetails.useremail == userEmail) {        
        return {
            type: "NO_CHANGES"
        }
    }
    const data = await pool.query(
        `UPDATE users SET
        userName=$1,
        userEmail=$2,
        userMobile=$3
        WHERE user_id=$4
        `, [userName, userEmail, userMobile, id]
    )
    return data
}


