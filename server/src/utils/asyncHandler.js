const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(err);
        }
    }
}
module.exports = { asyncHandler };