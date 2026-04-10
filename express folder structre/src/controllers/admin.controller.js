import { getUser } from "../services/admin.service.js"

export const adminView = (req, res) => {
    const data = getUser()
    res.status(200).json({
        status: true,
        message: "User Viewd Successfully...!!",
        data
    })
}