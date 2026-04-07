require("dotenv").config()
const express = require("express")
const pool = require("./app/config/db")
const { getUser } = require("./services/userServices")
const app = express()
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App Listen On Port : ${PORT}`);
})
app.use(express.json())


app.post("/add", async (req, res) => {
    try {
        const { firstName, lastName, department, salary } = req.body
        console.log(firstName, lastName);

        const result = await pool.query(
            "INSERT INTO demo_crud (first_name,last_name) VALUES($1,$2)",
            [firstName, lastName]
        )
        return res.status(201).json({
            status: true,
            message: "User Created...!!"
        })


    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Erorr...!!",
            error: error.message
        })
    }
})

app.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params
        const data = await pool.query(
            `DELETE FROM demo_crud WHERE emp_id=${id} `
        )
        return res.status(200).json({
            status: true,
            message: "User Deleted Successfullt....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error: error.message
        })
    }
})

app.get("/users", async (req, res) => {
    try {
        const data = await getUser()
        return res.status(200).json({
            status: true,
            message: "User Data...!!",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error: error.message
        })
    }
})

app.put("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);

        const { firstName, lastName, department, salary } = req.body
        console.log(firstName, lastName, department, salary);

        const data = await pool.query(
            `UPDATE demo_crud SET first_name = $1,last_name = $2,department = COALESCE($3, 'Production'),salary = COALESCE($4, 30000.00)
            WHERE emp_id = $5`,
            [firstName, lastName, department, salary, id]
        );
        return res.status(201).json({
            status: true,
            message: "User Updated Successfully....!!",
            data: data.rows[0]
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error: error.message
        })
    }
})