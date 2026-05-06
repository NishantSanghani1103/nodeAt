import fs from 'fs';
import path from 'path';
import { loginService, registerService } from '../../services/authServices/auth.service.js';


export const registerController = async (req, res) => {
    // console.log(req.body);
    let uploadedFilePath = null;
    try {
        if (req.file) {
            if (req.file.filename) {
                req.body['profilePicture'] = req.file.filename
                uploadedFilePath = path.join('uploads', 'user', req.file.filename);
            }
        }
        console.log(req.body);

        const data = await registerService(req.body)
        if (!data.status) {
            if (uploadedFilePath && fs.existsSync(uploadedFilePath)) {
                fs.unlink(uploadedFilePath, (err) => {
                    if (err) console.error("File delete failed:", err);
                });
            }
            return res.status(data.statusCode).json({
                status: false,
                message: data.message
            })
        }
        return res.status(201).json({
            status: true,
            message: "User Created Successfully....!!",
            data: data.dataRes
        })
    } catch (error) {
        if (uploadedFilePath && fs.existsSync(uploadedFilePath)) {
            fs.unlink(uploadedFilePath, (err) => {
                if (err) console.error("File delete failed:", err);
            });
        }
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const data = await loginService(req.body)

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: false,
                message: data.message
            })
        }

        return res.status(200).json({
            status: true,
            message: "User Logged In Successfully....!!",
            token: data.token
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}