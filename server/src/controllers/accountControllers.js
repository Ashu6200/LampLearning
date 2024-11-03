const config = require("../configs/config");
const { EApplicationEnvironment } = require("../constant/constant");
const { accessTokenOptions, refreshTokenOptions } = require("../helpers");
const passwordGenerator = require("../helpers/passwordGenerator");
const sendMail = require("../helpers/sendMail");
const AccountModel = require("../models/accountModel");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");

const createActivationToken = user => {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign(
        {
            user,
            activationCode,
        },
        config.ACTIVATIONSECRET,
        {
            expiresIn: "5m",
        }
    );
    return { token, activationCode };
};

const registerAccount = asyncHandler(async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isAccountExist = await AccountModel.findOne({ email: email });
        if (!isAccountExist) {
            const error = new Error("User already have an account");
            return ApiError(next, error, req, 500);
        }
        const account = {
            name: name,
            email: email,
            password: password,
        };
        const { token, activationCode } = createActivationToken(account);
        const mailData = {
            user: { name: account.name },
            activationCode,
        };
        try {
            await sendMail({
                email: account.email,
                subject: `Activate your LampLearning account ${account.name}`,
                template: "activationMail",
                data: mailData,
            });
        } catch (error) {
            return ApiError(next, error, req, 500);
        }
        const message = `Please check your email: ${account.email} to activate your account!`;
        return ApiResponse(req, res, 201, message, token);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const activateAccount = asyncHandler(async (req, res, next) => {
    try {
        const { activationToken, activationCode } = req.body;
        const account = jwt.verify(activationToken, config.ACTIVATIONSECRET);
        if (account.activationCode !== activationCode) {
            const error = new Error("Activation Code is not correct");
            return ApiError(next, error, req, 400);
        }
        const { name, email, password } = account.user;
        const isAccountExist = await AccountModel.findOne({ email: email });
        if (isAccountExist) {
            const error = new Error("User already have an account");
            return ApiError(next, error, req, 409);
        }
        const newAccount = new AccountModel({ email, password });
        newAccount.tempName = name;
        await newAccount.save();

        const message = `${newAccount.name} your account has been activated!`;
        return ApiResponse(req, res, 200, message);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});

const loginAccount = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const isAccountExist = await AccountModel.findOne({ email: email });
        if (!isAccountExist && !isAccountExist.userId) {
            const error = new Error("User does not have an account.");
            return ApiError(next, error, req, 404);
        }
        const isPasswordMatch = await isAccountExist.comparePassword(password);
        if (!isPasswordMatch) {
            const error = new Error("Invalid email and password");
            return ApiError(next, error, req, 401);
        }
        const accessToken = isAccountExist.SignAccessToken();
        const refreshToken = isAccountExist.SignRefreshToken();

        if (config.ENV === EApplicationEnvironment.PRODUCTION) {
            accessTokenOptions.secure = true;
        }
        res.cookie("access_token", accessToken, accessTokenOptions);
        res.cookie("refresh_token", refreshToken, refreshTokenOptions);
        const data = {
            accountId: isAccountExist._id,
            userId: isAccountExist.userId,
            email: isAccountExist.email,
            role: isAccountExist.role,
            accessToken: accessToken,
        };
        const message = "User is successfully logged in";
        return ApiResponse(req, res, 201, message, data);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const logoutAccount = asyncHandler(async (req, res, next) => {
    try {
        res.cookie("access_token", " ", { maxAge: 1 });
        res.cookie("refresh_token", " ", { maxAge: 1 });
        const message = "User is successfully logged out";
        return ApiResponse(req, res, 201, message);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const changeAccountPassword = asyncHandler(async (req, res, next) => {
    try {
        const { accountId } = req.user;
        const { oldPassword, newPassword, confirmPassword } = req.body;
        const isAccountExist = await AccountModel.findOne({ _id: accountId });
        if (!isAccountExist && !isAccountExist.userId) {
            const error = new Error("User does not have an account.");
            return ApiError(next, error, req, 404);
        }
        const isPasswordMatch = await isAccountExist.comparePassword(oldPassword);
        if (!isPasswordMatch) {
            const error = new Error("You have entered invalid password");
            return ApiError(next, error, req, 400);
        }
        if (confirmPassword !== newPassword) {
            const error = new Error("You have entered new password correctly");
            return ApiError(next, error, req, 400);
        }
        isAccountExist.password = newPassword;
        await isAccountExist.save();
        const message = "You have successfully changed your password";
        return ApiResponse(req, res, message, 201);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const forgetAccountPassword = asyncHandler(async (req, res, next) => {
    try {
        const { email } = req.body;
        const isAccountExist = await AccountModel.findOne({ email }).populate({
            path: "userId",
            select: "name",
        });
        if (!isAccountExist) {
            const error = new Error("No account found with that email.");
            return ApiError(next, error, req, 404);
        }
        const { generatedPassword } = passwordGenerator();
        try {
            const mailData = {
                user: { name: isAccountExist.userId.name },
                forgetPassword: generatedPassword,
            };
            await sendMail({
                email: account.email,
                subject: `Reset Password of LampLearning account`,
                template: "forgetPasswordMail",
                data: mailData,
            });
        } catch (error) {
            return ApiError(next, error, req, 500);
        }
        const user = isAccountExist;
        user.password = generatedPassword;
        await user.save();
        const message = "You have successfully changed your password";
        return ApiResponse(req, res, message, 201);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});

module.exports = {
    registerAccount,
    activateAccount,
    loginAccount,
    logoutAccount,
    changeAccountPassword,
    forgetAccountPassword,
};
