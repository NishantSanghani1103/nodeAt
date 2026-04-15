import app from "./src/app.js";
import {sequelize} from "./src/config/db.js"; // ✅ just add this


sequelize.sync({ alter: true })
  .then(() => {
    console.log("Tables synced");

    app.listen("8000", () => {
      console.log("server listen On Port :8000 ");
    });
  })
  .catch(err => console.log(err));