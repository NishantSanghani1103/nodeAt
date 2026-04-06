const http = require("http")
const app = http.createServer((req, res) => {
    const obj = {
        status: 1,
        msg: "Welcome To Backend....!!"
    }
    res.end(JSON.stringify(obj))
})

app.listen(8000)
