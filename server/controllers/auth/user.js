import User from "../../models/user.js"

// @route         GET auth/user
// @desc          get user data
// @access        private
const user = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        res.status(200).json(user.email)
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500
        next(error)
    }
}

export default user
