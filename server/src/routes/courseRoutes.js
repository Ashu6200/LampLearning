const { ERoleType } = require("../constant/constant");
const {
    uploadCourse,
    updateCourse,
    deleteCourse,
    getAllCourses,
    getSingleCourse,
    getViewEnrolledCourse,
} = require("../controllers/courseControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const courseRouter = require("express").Router();

courseRouter.post(
    "/create-course",
    authMiddleware,
    roleMiddleware([ERoleType.ADMIN, ERoleType.INSTRUCTOR]),
    uploadCourse
);
courseRouter.put("/update-course/:id", authMiddleware, updateCourse);
courseRouter.delete("/delete-course", authMiddleware, deleteCourse);
courseRouter.get("/all", getAllCourses);
courseRouter.get("/:id", getSingleCourse);
courseRouter.get("/view-course/:id", authMiddleware, getViewEnrolledCourse);

module.exports = courseRouter;