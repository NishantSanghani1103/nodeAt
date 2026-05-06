import { userViewService } from "../../services/userService/user.service.js"


export const userViewController = async (req, res) => {
    try {
        // console.log(req);
        
        const { userId } = req
  
        
        const data = await userViewService(userId)

        return res.status(200).json({
            status: true,
            message: "User Profile Viewd....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}