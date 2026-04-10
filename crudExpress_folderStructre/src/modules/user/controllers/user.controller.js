import { userAddService, userUpdateService } from "../services/user.service.js"

export const userAdd = async (req, res) => {
    try {
        const { userName, userEmail, userMobile } = req.body
        if (!userName || !userEmail || !userMobile) {
            return res.status(401).json({
                status: false,
                message: "All The Fields Are Mandatory....!!"
            })
        }
        await userAddService(userName, userEmail, userMobile)

        return res.status(200).json({
            status: true,
            message: "User Is Created....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error: error.message
        })
    }
}

export const userUpdate = async (req, res) => {
    try {
        const { id } = req.params
        const { userName, userEmail, userMobile } = req.body

        const data = await userUpdateService(userName, userEmail, userMobile, id)
        console.log("data is :", data);

        if (data.type == "NOT_FOUND") {
            return res.status(404).json({
                status: false,
                message:"User Not Found....!!"
            })
        }
        if (data.type == "NO_CHANGES") {
            return res.status(200).json({
                status: false,
                message: "Data Already Up To Date....!!"
            })
        }
        return res.status(201).json({
            status: true,
            mesasge: "User Updated Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error: error.message
        })
    }
}