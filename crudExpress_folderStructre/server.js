import env from "dotenv"
env.config()
import app from "./src/app.js";
import adminRoutes from "./src/modules/admin/routes/admin.routes.js";
import { useRouter } from "@tanstack/react-router";
import userRoutes from "./src/modules/user/routes/user.routes.js";
const port = process.env.PORT
app.use("/admin", adminRoutes)
app.use("/user",userRoutes)
app.listen(port, () => {
    console.log(`App Listen On Port : ${port}`);
})

