import { materialAddService, materialViewService } from "../../services/admin/material.service.js"

export const materialAddController = async (req, res) => {
    try {
        const data = await materialAddService(req.body)
        return res.status(201).json({
            status: true,
            message: "Material Added Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const materialViewController = async (req, res) => {
    try {
        const data = await materialViewService()
        return res.status(201).json({
            status: true,
            message: "Material Added Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}