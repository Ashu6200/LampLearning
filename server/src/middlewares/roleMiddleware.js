const { asyncHandler } = require("../utils/asyncHandler");

const roleMiddleware = (roles) => {
    return asyncHandler(async (req, _res, next) => {
        try {
            const { role } = req.user
            if (!roles.includes(role)) {
                const error = new ErrorHandler(
                    `Role ${role} is not allowed to access this resource`,)
                return ApiError(next, error, req, 404);
            }
            next()
        } catch (error) {
            return ApiError(next, error, req, 404);
        }
    })
}
module.exports = roleMiddleware