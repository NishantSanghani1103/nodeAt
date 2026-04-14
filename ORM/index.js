const sequelize = require("./congif/db");

sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully 🚀');
    })
    .catch((err) => {
        console.error('Unable to connect database ❌:', err);
    });


sequelize.sync()
    .then(() => console.log("Tables created 🚀"))
    .catch(err => console.log(err));