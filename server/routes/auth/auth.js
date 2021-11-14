import express from "express"
import { body } from "express-validator"
import { auth } from "../../middlewares/auth.js"

import User from "../../models/user.js"

import signup from "../../controllers/auth/signup.js"
import login from "../../controllers/auth/login.js"
import checkUser from "../../controllers/auth/check-user.js"
import refreshToken from "../../controllers/auth/refresh-token.js"
import logout from "../../controllers/auth/logout.js"
import user from "../../controllers/auth/user.js"

const router = express.Router()

router.post(
    "/signup",
    [
        body("email")
            .isEmail()
            .withMessage("Please enter a valid email")
            .custom(async (value, { req }) => {
                const userDocument = await User.findOne({ email: value })

                if (userDocument)
                    return Promise.reject("Email address already exists")
            }),
        body("password").trim().not().isEmpty(),
    ],
    signup
)

router.post("/login", login)

router.get("/check-user", checkUser)

router.get("/refresh-token", refreshToken)

router.get("/logout", auth, logout)

router.get("/user", auth, user)

export default router
