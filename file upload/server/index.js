import env from "dotenv"
import app from "./src/app.js";

env.config()

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server Listen On Port : ${port}`);

})