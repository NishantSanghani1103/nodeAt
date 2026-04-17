import { createZipBuffer } from "../utils/zip.util.js";
import { prepareFilesForZip } from "../services/zip.service.js";
import { exportService } from "../services/user.service.js";

export const downloadZipController = async (req, res) => {
    try {
        // get DB data
        const data = await exportService();

        // prepare files (xlsx + csv)
        const files = prepareFilesForZip(data);

        // create zip buffer
        const zipBuffer = await createZipBuffer(files);

        // send zip
        res.setHeader("Content-Type", "application/zip");
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=users.zip"
        );

        return res.send(zipBuffer);

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};