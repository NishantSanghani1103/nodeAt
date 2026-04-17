import XLSX from "xlsx";

// READ EXCEL 

export const readExcel = (filePath) => {
    const workBook = XLSX.readFile(filePath)
    // console.log("workBook",workBook);

    const sheet = workBook.Sheets[workBook.SheetNames[0]]
    // console.log("sheet",sheet);

    return XLSX.utils.sheet_to_json(sheet)
}

export const exportFile = (data, filePath, type) => {
    const sheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workbook, sheet, "Users")
    if (type == "csv") {
        XLSX.writeFile(workbook, filePath, { bookType: "csv" });
    }
    else {
        XLSX.writeFile(workbook, filePath)
    }


}