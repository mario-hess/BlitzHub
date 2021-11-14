import express from "express"
import jwt from "jsonwebtoken"

// @route         GET auth/check-user
// @desc          check if the user is logged in
// @access        public
const checkUser = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (refreshToken) {
            jwt.verify(refreshToken, process.env.REFRESH_SECRET)
            const error = new Error("Client already authenticated")
            error.statusCode = 401
            throw error
        }

        res.status(200).json({
            message: "Client is allowed to authenticate",
        })
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500
        next(error)
    }
}

export default checkUser
