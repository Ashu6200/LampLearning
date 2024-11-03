const {
    getCourseConversation,
    getCourseConversationsParticipants,
    sendMessage,
} = require("../controllers/conversationController");
const authMiddleware = require("../middlewares/authMiddleware");

const conversationRouter = require("express").Router();

conversationRouter.get(
    "/:courseId/:conversationId",
    authMiddleware,
    getCourseConversation
);
conversationRouter.get(
    "/participants/:courseId/:conversationId",
    authMiddleware,
    getCourseConversationsParticipants
);
conversationRouter.post(
    "/send-message/:courseId/:conversationId",
    authMiddleware,
    sendMessage
);
module.exports = conversationRouter;