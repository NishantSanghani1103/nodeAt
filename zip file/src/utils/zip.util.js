import JSZip from "jszip";

export const createZipBuffer = async (files) => {
    const zip = new JSZip();

    // files = [{ name: "file.txt", data: buffer/string }]
    files.forEach(file => {
        zip.file(file.name, file.data);
    });

    // generate zip buffer
    return await zip.generateAsync({ type: "nodebuffer" });
};