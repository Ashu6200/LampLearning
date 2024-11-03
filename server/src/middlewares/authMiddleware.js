const AccountModel = require("../models/accountModel");
const UserModel = require("../models/userModel");
const ApiError = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");


const authMiddleware = asyncHandler(async (req, _res, next) => {
    const accessToken = req.cookies.access_token
    if (!accessToken) {
        const error = new Error("Please login to access this resource.")
        return ApiError(next, error, req, 501);
    }
    try {
        const decoded = jwt.verify(accessToken, config.ACCESS_SECRET);
        const account = await AccountModel.findOne({ _id: decoded.accountId, email: decoded.email })
        if (!account && account.userId !== null) {
            const error = new Error("User does not have an account.");
            return ApiError(next, error, req, 404);
        }
        req.user = {
            accountId: account._id,
            userId: account.userId,
            email: account.email,
            role: account.role
        };
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return ApiError(next, new Error("Access token has expired."), req, 401);
        }
        if (error.name === 'JsonWebTokenError') {
            return ApiError(next, new Error("Invalid access token."), req, 401);
        }

        return ApiError(next, error, req, 500);
    }
})
module.exports = authMiddleware