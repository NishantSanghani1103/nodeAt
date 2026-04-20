import { transactionExportService, transactionViewService } from "../services/transaction.service.js"
import { appendTransactionFiles, exportFile, zipFileDownload } from "../util/file.js"
import path from "path";
import fs from "fs";
import archiver from "archiver";
export const transactionViewController = async (req, res) => {
    try {
        const { userId } = req
        const data = await transactionViewService(userId)
        return res.status(200).json({
            status: true,
            mesaage: "transaction Viewd...!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}
export const transactionExportController = async (req, res) => {
    try {
        const { type } = req.params;
        const { userId } = req;

        if (!["csv", "xlsx"].includes(type)) {
            return res.status(400).json({
                status: false,
                message: "Invalid file type"
            });
        }

        const data = await transactionExportService(userId);

        const formattedData = data.map(item => ({
            Amount: item.amount,
            Type: item.type,
            Description: item.message
        }));

        const filePath = path.join(
            process.cwd(),
            "uploads",
            `transactions-${Date.now()}.${type}`
        );

        exportFile(formattedData, filePath, type);

        return res.download(filePath, (err) => {
            if (!err) {
                fs.unlinkSync(filePath);
            }
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

export const transactionZipController = async (req,res) => {
    try {
        const { userId } = req;

        // get data from DB
        const data = await transactionExportService(userId);

        // generate zip buffer
        const zipBuffer = await zipFileDownload(data);

        // set headers
        res.setHeader("Content-Type", "application/zip");
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=transactions.zip"
        );

        // send file
        res.send(zipBuffer);

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}


// for archiever

export const transactionZipArchieveController = async (req, res) => {
    try {
        const { userId } = req;

        const data = await transactionExportService(userId);

        const archive = archiver("zip", {
            zlib: { level: 9 } // compression level
        });

        //  headers
        res.setHeader("Content-Type", "application/zip");
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=transactions.zip"
        );

        //  pipe stream
        archive.pipe(res);

        //  add files using util
        appendTransactionFiles(archive, data);

        //  error handling (important)
        archive.on("error", (err) => {
            throw err;
        });

        // finalize zip
        await archive.finalize();

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};