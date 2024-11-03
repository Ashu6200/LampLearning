const { config } = require("dotenv")
const { EApplicationEnvironment, EResponseMessage } = require("../constant/constant")

const ApiError = (nextFun, err, req, errorStatusCode = 500) => {
    const errorObj = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message : EResponseMessage.SOMETHINNG_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    }

    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return nextFun(errorObj)
}
module.exports = ApiError