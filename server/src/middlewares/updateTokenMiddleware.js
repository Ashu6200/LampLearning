const config = require("../configs/config");
const { accessTokenOptions, refreshTokenOptions } = require("../helpers");
const AccountModel = require("../models/accountModel");
const ApiError = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");

const updateToken = asyncHandler(async (req, res, next) => {
    const refreshToken = res.cookies.refresh_token;
    if (!refreshToken) {
        const error = new Error("Please login to access this resource.");
        return ApiError(next, error, req, 501);
    }
    try {
        const decoded = await jwt.verfiy(refreshToken, config.REFRESHTOKEN);
        const account = await AccountModel.findById(decoded.accountId);
        if (!account || !account.userId) {
            const error = new Error("Account or user not found.");
            return ApiError(next, error, req, 404);
        }
        const accessToken = jwt.sign(
            {
                accountId: account._id,
                email: account.email,
            },
            config.ACCESSTOKEN,
            {
                expiresIn: "5m",
            }
        );
        const refreshToken = jwt.sign(
            {
                accountId: account._id,
                email: account.email,
            },
            config.REFRESHTOKEN,
            {
                expiresIn: "7d",
            }
        );
        req.user = {
            accountId: account._id,
            userId: account.userId,
            email: account.email,
            role: account.role
        };
        res.cookie("access_token", accessToken, accessTokenOptions);
        res.cookie("refresh_token", refreshToken, refreshTokenOptions);
        next()
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return ApiError(next, new Error("Access token has expired."), req, 401);
        }
        if (error.name === "JsonWebTokenError") {
            return ApiError(next, new Error("Invalid access token."), req, 401);
        }

        return ApiError(next, error, req, 500);
    }
});
module.exports = updateToken;
