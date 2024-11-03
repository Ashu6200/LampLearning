const config = require("../configs/config");

const accessTokenExpire = parseInt(
    config.ACCESSTOKENEXPIRE || "300",
    10
); const refreshTokenExpire = parseInt(
    config.REFRESHTOKENEXPIRE || "1200",
    10
);
const accessTokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge: accessTokenExpire * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
}; const refreshTokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
};
module.exports = { accessTokenOptions, refreshTokenOptions }