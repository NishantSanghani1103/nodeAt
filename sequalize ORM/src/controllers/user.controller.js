import { userAddService, userDeleteService, userUpdateService, userViewService } from "../service/user.service.js"

export const userAddController = async (req, res) => {
    try {
        const data = await userAddService(req.body)
        return res.status(201).json({
            status: true,
            message: "User Created....!!",
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


export const userViewController = async (req, res) => {
    try {
        const data = await userViewService()
        return res.status(201).json({
            status: true,
            message: "User Viewd....!!",
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
        const data = await userDeleteService(id)
        return res.status(201).json({
            status: true,
            message: "User Viewd....!!",
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
        const data = await userUpdateService(req.body,id)
        return res.status(201).json({
            status: true,
            message: "User Viewd....!!",
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