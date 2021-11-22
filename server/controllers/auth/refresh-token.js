import jwt from 'jsonwebtoken'
import User from '../../models/user.js'

// @route         GET auth/refresh-token
// @desc          refresh JWT
// @access        public
const refreshToken = async (req, res, next) => {
    try {
        const token = req.cookies.refreshToken

        if (!token) {
            const error = new Error('No token sent, authorization denied')
            error.statusCode = 401
            throw error
        }

        const decoded = jwt.verify(token, process.env.REFRESH_SECRET)

        const payload = {
            user: {
                id: decoded.user._id,
                email: decoded.user.email,
            },
        }

        const loadedUser = await User.findOne({
            email: decoded.user.email,
        }).select('-password')

        if (!loadedUser) {
            const error = new Error('A user with this email could not be found')
            error.statusCode = 401
            throw error
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 60 }, //1m
            (error, token) => {
                if (error) {
                    const error = new Error('Error signing authorization token')
                    error.statusCode = 401
                    throw error
                }
                const expiresIn = 60 //1m

                res.status(201).json({
                    token,
                    expiresIn,
                    user: loadedUser,
                })
            }
        )
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500
        next(error)
    }
}

export default refreshToken
