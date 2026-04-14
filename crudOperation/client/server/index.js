import { config } from "dotenv";
import app from "./src/app.js";
config()
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server Listen On Port : ${port}`);
})
