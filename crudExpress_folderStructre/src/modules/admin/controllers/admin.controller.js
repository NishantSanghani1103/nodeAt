import { getUserViewService, userDeleteService } from "../services/admin.service.js"
export const userView = async (req, res) => {
    const data = await getUserViewService()
    return res.status(200).json({
        status: true,
        msg: "User Data Viewd Successfully....!!",
        totalRecords: data.length,
        data
    })
}

export const userDelete = async (req, res) => {
    const { id } = req.params
    try {
        await userDeleteService(id)
        return res.status(201).json({
            status: true,
            message: "User Deleted Successfullt....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!"
        })
    }

}