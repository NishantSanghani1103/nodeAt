const pool = require("../app/config/db")

const getUser = async (req, res) => {
    const data = await pool.query(
        "SELECT * FROM demo_crud"
    )
    return data.rows
}
module.exports = { getUser }