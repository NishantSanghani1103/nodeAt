const express = require("express")
const { adminView } = require("../controllers/admin.controller")
const controller = require("../controllers/admin.controller");
console.log(controller);
const adminRoutes = express.Router()

adminRoutes.get("/user",adminView)

module.exports = adminRoutes