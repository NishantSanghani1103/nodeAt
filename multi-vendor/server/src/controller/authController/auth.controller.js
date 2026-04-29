export const registerController = async (req, res) => {
    try {
        return res.status(201).json({
            status: true,
            message: "User Registered Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error....!!"
        })
    }
}