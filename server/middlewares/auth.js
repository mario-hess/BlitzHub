import jwt from "jsonwebtoken"

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            const error = new Error("No token sent, authorization denied")
            error.statusCode = 401
            throw error
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user

        next()
    } catch (error) {
        if (!error.statusCode) error.statusCode = 401
        next(error)
    }
}
