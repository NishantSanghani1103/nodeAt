import { exportService, readFileService } from "../service/user.service.js";
import { exportFile, readExcel } from "../utils/excel.js"
import path from "path";
import fs from "fs";
export const readFileController = async (req, res) => {
    // console.log(req.file);

    try {
        const data = readExcel(req.file.path)
        console.log("data", data);

        await readFileService(data);

        return res.json({
            status: true,
            message: "Data Imported Successfully....!!",
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const exportController = async (req, res) => {
    try {
        const { type } = req.params
        const data = await exportService()

        const cleanData = data.map((value) => value.toJSON());

        const filePath = path.join(
            process.cwd(),
            "uploads",
            `users-${Date.now()}.${type}`
        );

        exportFile(cleanData, filePath, type);
        return res.download(filePath, (err) => {
            if (!err) {
                fs.unlinkSync(filePath); // cleanup
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}