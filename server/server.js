import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import chalk from 'chalk'

import authRoutes from './routes/auth/auth.js'

dotenv.config({ path: '../.env' })
const server = express()
server.use(express.json())
server.use(cookieParser())
server.use(cors({ origin: 'http://localhost:3000', credentials: true }))

const PORT = process.env.PORT || 5000

server.use('/auth', authRoutes)

server.use((error, req, res, next) => {
    console.log(chalk.red.bold(error))

    res.status(error.statusCode ?? 500).json({
        message: error.message,
        data: error.data,
    })
})

const connect = async () => {
    try {
        // Connect to database
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(
            chalk.green.bold('Server successfully connected to database')
        )

        // Start server
        server.listen(PORT, () => {
            console.log(
                chalk.green.bold(
                    `Server is running at https://localhost:${PORT}`
                )
            )
        })
    } catch (error) {
        console.log(chalk.green.bold(`Connection failed with error: ${error}`))
    }
}

connect()
