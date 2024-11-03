const {
    getyourself,
    getAllUser,
    updateUser,
    getSingleUser,
    deleteUser,
    getAllCourseEnrolledByUser,
    getAllCourseSavedByUser,
    getAllBlogSavedByUser,
    getAllCourseConversation,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const userRouter = require("express").Router();

userRouter.get("/me", authMiddleware, getyourself);
userRouter.get("/all-user", authMiddleware, getAllUser);
userRouter.get("/:userId", getSingleUser);
userRouter.put("/:userId", authMiddleware, updateUser);
userRouter.delete("/:userId", authMiddleware, deleteUser);
userRouter.get(
    "/course-enrolled/:userId",
    authMiddleware,
    getAllCourseEnrolledByUser
);
userRouter.get(
    "/course-saved/:userId",
    authMiddleware,
    getAllCourseSavedByUser
);
userRouter.get("/blog-released/:userId", authMiddleware, getAllBlogSavedByUser);
userRouter.get("/blog-saved/:userId", authMiddleware, getAllBlogSavedByUser);
userRouter.get("/all-conversation", authMiddleware, getAllCourseConversation);

module.exports = userRouter;
