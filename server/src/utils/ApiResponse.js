const { config } = require("dotenv")
const { EApplicationEnvironment } = require("../constant/constant")

const ApiResponse = (req, res, responseStatusCode, responseMessage, data = null) => {

    const responseObj = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl

        },
        message: responseMessage,
        data: data
    }
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete responseObj.request.ip
    }
    return res.status(responseStatusCode).json(responseObj)
}
module.exports = ApiResponse