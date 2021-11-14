import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../../models/user.js"

// @route         POST auth/login
// @desc          login user
// @access        public
const login = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken

        if (refreshToken) {
            jwt.verify(refreshToken, process.env.REFRESH_SECRET)
            const error = new Error("User is already authenticated")
            error.statusCode = 401
            throw error
        }

        const { email, password } = req.body

        const loadedUser = await User.findOne({ email })

        if (!loadedUser) {
            const error = new Error("A user with this email could not be found")
            error.statusCode = 401
            throw error
        }

        const isEqual = await bcrypt.compare(
            password.toString(),
            loadedUser.password
        )

        if (!isEqual) {
            const error = new Error("Passwords do not match")
            error.statusCode = 401
            throw error
        }

        const payload = {
            user: {
                id: loadedUser._id,
                email: loadedUser.email,
            },
        }

        jwt.sign(
            payload,
            process.env.REFRESH_SECRET,
            { expiresIn: 3600 },
            (error, token) => {
                if (error) {
                    const error = new Error("Error signing authorization token")
                    error.statusCode = 401
                    throw error
                }

                res.cookie("refreshToken", token, {
                    expires: new Date(Date.now() + 3600000), // 1h
                    secure: true,
                    httpOnly: true,
                })

                res.status(201).json({ user: loadedUser })
            }
        )
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500
        next(error)
    }
}

export default login
