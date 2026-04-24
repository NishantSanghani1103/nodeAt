export const cartAddController = async (req, res) => {
    try {
        const { userId } = req
        console.log(userId);
        
        return res.status(201).json({
            status: true,
            message: "Item Added In Cart....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}