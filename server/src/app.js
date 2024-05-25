const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require("cors");
const { asyncHandler } = require('./utils/asyncHandler');
const { errorHandler } = require('./utils/errorHandler');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const authRouter = require('./routes/authRoutes');
require("dotenv").config();

const app = express();
const httpServer = createServer(app)

const io = new Server(httpServer, {
    pingTimeout: 60000,
    cors: {
        origin: "https://localhost:3000",
        credentials: true,
    },
});

app.set("io", io);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "https://localhost:3000",
    credentials: true,
}))

app.get('/', asyncHandler(async (_req, res, _next) => {
    return res.status(200).json({
        statusCode: 200,
        success: true,
        data: null,
        message: "Lamp Learning server is live",
    });
}))
app.use(errorHandler)

app.use('/auth', authRouter)


module.exports = { httpServer };