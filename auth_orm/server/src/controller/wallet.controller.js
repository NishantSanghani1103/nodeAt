export const wallerAddController = async (req, res) => {
    try {
        return res.status(201).json({
            status: true,
            message: "Wallet Successfully...!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}