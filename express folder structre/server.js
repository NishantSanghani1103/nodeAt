import env from "dotenv"
import app from "./src/app.js";
env.config()
console.log("nishant");
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Port Listen On ${port}`);
})