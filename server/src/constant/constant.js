const EApplicationEnvironment = {
    PRODUCTION: "production",
    DEVELOPMENT: "development",
};
const EResponseMessage = {
    SOMETHINNG_WENT_WRONG: "SOMETHINNG_WENT_WRONG",
};

const ERoleType = {
    ADMIN: "admin",
    INSTRUCTOR: "instructor",
    USER: "user",
};
const ELoginTypes = {
    GOOGLE_LOGIN: "google_login",
    EMAIL_AND_PASSWORD_LOGIN: "email_and_password_login",
};
const EOrderType = {
    COURSEPURCHASE: "course_purchase",
    INSTRUCTORFEE: "instructor_fee",
};
const EPaymentStatus = {
    PENDING: "pending",
    PAID: "paid",
    FAILED: "failed",
};
const EChatTypes = {};
module.exports = {
    EApplicationEnvironment,
    EResponseMessage,
    ERoleType,
    ELoginTypes,
    EOrderType,
    EPaymentStatus,
};
