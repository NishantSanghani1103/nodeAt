const express = require("express")
const env = require("dotenv")
const pool = require("./app/config/db")

env.config()
const app = express()
app.use(express.json())
const port = process.env.PORT
const tokenCheck = process.env.TOKEN





const checkToken = (req, res, next) => {
    const { token } = req.query
    if (!token) {
        return res.status(401).json({
            status: false,
            message: "Please Fill The Token...!!"
        })
    }
    if (token != tokenCheck) {
        return res.status(401).json({
            status: false,
            msg: "Please Fill The Valid Token...!!"
        })
    }
    next()
}
// app.use(checkToken)

app.get("/news", checkToken, (req, res) => {
    res.status(200).json({
        status: true,
        msg: "News Api Called",

    })
})


app.post("/login", (req, res) => {
    const { userName, password } = req.body
    if (!userName || !password) {
        return res.status(401).json({
            status: false,
            message: "Please Enter UserName And Passeord...!!"
        })
    }

    return res.status(200).json({
        status: true,
        msg: "Login Successfully....!!",
        details: [
            {
                userName,
                password
            }
        ]
    })
})

app.get("/user", async (req, res) => {
    try {
        let result
        const { name } = req.query
        console.log(name);
        if (name) {
            result = await pool.query(`SELECT * FROM employes WHERE first_name='${name}'`)
        }
        else {
            result = await pool.query(`SELECT * FROM employes`)
        }
        // console.log(result.rows);
        return res.status(200).json({
            status: true,
            msg: "User Data....!!",
            total:result.rows.length,
            data: result.rows
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error
        })
    }
})

app.listen(port, () => {
    try {
        console.log(`Server Listen On Port : ${port}`);
    } catch (error) {
        console.log(error.message);

    }
})