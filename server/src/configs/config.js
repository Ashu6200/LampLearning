
require("dotenv").config();


const config = {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    REDISURL: process.env.REDIS_URL,
    ACTIVATIONSECRET: process.env.ACTIVATION_SECRET,
    DATABASEURL: process.env.MONGODB_URL,
    ACCESSTOKEN: process.env.ACCESS_TOKEN,
    ACCESSTOKENEXPIRE: process.env.ACCESS_TOKEN_EXPIRE,
    REFRESHTOKEN: process.env.REFRESH_TOKEN,
    REFRESHTOKENEXPIRE: process.env.REFRESH_TOKEN_EXPIRE,
    SMTPHOST: process.env.SMTP_HOST,
    SMTPPORT: process.env.SMTP_PORT,
    SMTPSERVICE: process.env.SMTP_SERVICE,
    SMTPMAIL: process.env.SMTP_MAIL,
    SMTPPASS: process.env.SMTP_HOST,
    CLOUDINARYCLOUDNAME: process.env.CLOUD_NAME,
    CLOUDINARYAPIKEY: process.env.API_KEY,
    CLOUDINARYAPISECERT: process.env.API_SECRET

}
module.exports = config