const {
    registerAccount,
    loginAccount,
    activateAccount,
    logoutAccount,
    changeAccountPassword,
    forgetAccountPassword,
} = require("../controllers/accountControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const updateToken = require("../middlewares/updateTokenMiddleware");

const accountRouter = require("express").Router();

accountRouter.post("/register", registerAccount);
accountRouter.post("/activate_account", activateAccount);
accountRouter.post("/login", loginAccount);
accountRouter.get("logout", logoutAccount);
accountRouter.post(
    "/change-password",
    authMiddleware,
    updateToken,
    changeAccountPassword
);
accountRouter.post(
    "/forget-password",
    forgetAccountPassword
);

module.exports = accountRouter;
