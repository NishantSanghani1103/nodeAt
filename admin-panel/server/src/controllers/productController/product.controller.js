import { productAddService, productViewService } from "../../services/productServices/product.service.js";

export const productAddController = async (req, res) => {
    try {
        const obj = req.body
        const { image, backImage, galleryImages } = req.files
        if (req.files) {
            if (req.files.image) {
                obj['image'] = req.files.image[0].filename
            }
        }
        if (req.files.backImage) {
            obj['backImage'] = req.files.backImage[0].filename;
        }
        if (req.files.galleryImages) {
            obj['galleryImages'] = req.files.galleryImages.map((value) => value.filename)
        }
        // console.log(obj);

        const data = await productAddService(obj)

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: data.status,
                message:data.message
            })
        }

        return res.status(201).json({
            status: true,
            message: "Product Created Successfully....!!",
            data: data.dataRes
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const productViewController = async (req, res) => {
    try {
        const data = await productViewService()
        return res.status(200).json({
            status: true,
            message: "Product Viewd Successfully....!!",
            data
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}