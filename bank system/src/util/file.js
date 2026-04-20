import JSZip from "jszip";
import XLSX from "xlsx";

export const exportFile = (data, filePath, type) => {
    const sheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, sheet, "Transactions");

    if (type === "csv") {
        XLSX.writeFile(workbook, filePath, { bookType: "csv" });
    } else {
        XLSX.writeFile(workbook, filePath);
    }
};

export const zipFileDownload = async (data) => {
    const zip = new JSZip();

    const sheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "Transactions");

    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "buffer"
    });

    zip.file("transactions.xlsx", excelBuffer);

    const csv = XLSX.utils.sheet_to_csv(sheet);
    zip.file("transactions.csv", csv);

    return await zip.generateAsync({ type: "nodebuffer" });
};



// for achieve

export const appendTransactionFiles = (archive, data) => {
    const sheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "Transactions");

    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "buffer"
    });

    archive.append(excelBuffer, { name: "transactions.xlsx" });

    const csv = XLSX.utils.sheet_to_csv(sheet);
    archive.append(csv, { name: "transactions.csv" });
};