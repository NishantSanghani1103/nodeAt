export const propertyAddController = async (req, res) => {
    try {
        const { userId, userRole } = req
        // console.log(userId,userRole);
        return res.status(201).json({
            status: true,
            message: "Property Added Successfully...!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}