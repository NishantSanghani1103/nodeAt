import XLSX from "xlsx";

export const prepareFilesForZip = (data) => {

    const cleanData = data.map(v => v.toJSON());

    // Excel
    const sheet = XLSX.utils.json_to_sheet(cleanData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, "Users");

    const excelBuffer = XLSX.write(wb, {
        type: "buffer",
        bookType: "xlsx"
    });

    // CSV
    const csvBuffer = XLSX.write(wb, {
        type: "buffer",
        bookType: "csv"
    });

    return [
        { name: "users.xlsx", data: excelBuffer },
        { name: "users.csv", data: csvBuffer }
    ];
};