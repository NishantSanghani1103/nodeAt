import { colorAddSerive, colorViewService } from "../../services/admin/color.service.js"

export const colorAddContriller = async (req, res) => {
    try {
        const data = await colorAddSerive(req.body)
        return res.status(201).json({
            status: true,
            message: "Color Added Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const colorViewController = async (req, res) => {
    try {
        const data = await colorViewService()
        return res.status(200).json({
            status: true,
            message: "Color Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}