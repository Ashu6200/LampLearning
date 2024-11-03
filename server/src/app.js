const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require("cors");
const { asyncHandler } = require('./utils/asyncHandler');
const { errorHandler } = require('./utils/errorHandler');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const ApiResponse = require('./utils/ApiResponse')
const accountRouter = require('./routes/accountRoutes');
const ApiError = require('./utils/ApiError');
const userRouter = require('./routes/userRoutes');
const { intializSocket } = require('./socket/socket');
const courseRouter = require('./routes/courseRoutes');
const blogRouter = require('./routes/blogRoutes');
const conversationRouter = require('./routes/conversationRoutes');
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
intializSocket(io)

app.get('/', asyncHandler(async (req, res, _next) => {
    return ApiResponse(req, res, 200, "Lamp Learning server is live")
}))

app.use('/api/auth', accountRouter)
app.use('/api/user', userRouter)
app.use('/api/course', courseRouter)
app.use('/api/blog', blogRouter)
app.use('/api/conversation', conversationRouter)


app.use("*", asyncHandler(async (req, _res, next) => {
    const err = new Error(`Routes ${req.originalUrl} not found`);
    return ApiError(next, err, req, 500)
}))

app.use(errorHandler)

module.exports = { httpServer };