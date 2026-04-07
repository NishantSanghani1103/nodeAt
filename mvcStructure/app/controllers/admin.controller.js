const adminView = (req, res) => {
    return res.status(200).json({
        status: true,
        message: "User Viewd Successfully...!!"
    })
}
module.exports = { adminView }