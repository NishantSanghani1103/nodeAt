import { userAddService, userGetService } from "../services/user.service.js";

export const userAdd = async (req, res) => {
    try {
        const { userEmail, userName } = req.body
        const obj = {
            userName,
            userEmail
        }
        // console.log(req.file);

        if (req.file) {
            if (req.file.filename) {
                obj['categoryImage'] = req.file.filename
            }
        }
        // console.log(obj);

        await userAddService(obj)
        return res.status(201).json({
            status: true,
            message: "File Uploaded....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error: error.message
        })
    }
}

export const userView = async (req, res) => {
    try {
        const data = await userGetService()
        return res.status(201).json({
            status: true,
            message: "File Uploaded....!!",
            staticPath:process.env.CATEGORY_STATICPATH,
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error...!!",
            error: error.message
        })
    }
}