import { userAddServices, userDeleteServices, userSingleViewService, userUpdateService, userViewServices } from "../services/user.service.js"

export const userAddController = async (req, res) => {
    const { userName, userEmail, userPassword, userConfirmPassword, userMobile } = req.body
    try {
        await userAddServices(userName, userEmail, userPassword, userConfirmPassword, userMobile)
        return res.status(201).json({
            status: true,
            message: "User Created Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error....!!",
            error: error.message
        })
    }

}

export const userViewController = async (req, res) => {
    try {
        const data = await userViewServices()
        return res.status(200).json({
            status: true,
            message: "User Viewd Successfully....!!",
            data
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error....!!",
            error: error.message
        })
    }
}

export const userDeleteController = async (req, res) => {
    try {
        const { id } = req.params

        await userDeleteServices(id)

        return res.status(201).json({
            status: true,
            message: "User Deleted Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error....!!",
            error: error.message
        })
    }
}

export const userSingleViewController = async (req, res) => {
    try {
        const { id } = req.params
        const data = await userSingleViewService(id)
        return res.status(200).json({
            status: true,
            message: "User Single Data Viewd....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error....!!",
            error: error.message
        })
    }
}

export const userUpdateController = async (req, res) => {
    try {
        const { id } = req.params
        const { userName, userEmail, userPassword, userConfirmPassword, userMobile } = req.body
        const data = await userUpdateService(userName, userEmail, userPassword, userConfirmPassword, userMobile,id)
        return res.status(200).json({
            status: true,
            message: "User Data Updated Succefully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error....!!",
            error: error.message
        })
    }
}