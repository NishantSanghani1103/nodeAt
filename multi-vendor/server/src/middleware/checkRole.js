export const checkRoles = (...roles) => {
    // console.log(roles);
    return (req, res, next) => {
        // console.log(req);
        if (!roles.includes(req.userRole)) {
            return res.status(403).json({
                status: false,
                message: "Access Denied: You are not authorized"
            });
        }

        next();
    };
};