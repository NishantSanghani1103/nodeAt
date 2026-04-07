const express = require("express")
const adminRoutes = require("./app/routes/admin.routes")
const app = express()
const port=8000
app.use(express.json())
app.use("/admin", adminRoutes)
app.listen(port, () => {
    console.log("App Listen");
})