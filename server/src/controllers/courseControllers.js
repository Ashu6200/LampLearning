const CourseModel = require("../models/courseModel");
const { asyncHandler } = require("../utils/asyncHandler");

const uploadCourse = asyncHandler(async (req, res, next) => {
    try {
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const updateCourse = asyncHandler(async (req, res, next) => {
    try {
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});

const deleteCourse = asyncHandler(async (req, res, next) => {
    try {
        const { courseId } = req.params;
        const { userId, role } = req.user;
        const course = await CourseModel.findById(courseId).lean();
        if (!course) {
            const error = new Error("Course not found");
            return ApiError(next, error, req, 404);
        }
        if (course.publishedBy === userId || role === "admin") {
            await CourseModel.findByIdAndDelete(courseId);
            const message = "You have succesfully deleted the Course";
            return ApiResponse(req, res, 200, message, course);
        } else {
            const error = new Error("You can't delete this course");
            return ApiError(next, error, req, 404);
        }
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const getAllCourses = async (req, res, next) => {
    try {
        const { page = 1, limit = 12 } = req.query;
        const pageNumber = Math.max(1, parseInt(page, 10) || 1);
        const limitNumber = Math.max(1, parseInt(limit, 10) || 12);

        const totalCount = await CourseModel.countDocuments({ isPublished: true });

        if (totalCount === 0) {
            return ApiResponse(req, res, 200, "No published courses found", {
                courses: [],
                totalCount: 0,
                pageNumber,
                limit: limitNumber,
            });
        }

        const courses = await CourseModel.aggregate([
            { $match: { isPublished: true } },
            { $skip: (pageNumber - 1) * limitNumber },
            { $limit: limitNumber },
            {
                $addFields: {
                    averageRating: { $avg: "$review.rating" },
                    enrolledStudent: { $sum: 1 },
                },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    description: 1,
                    thumbnail: 1,
                    price: 1,
                    estimatedPrice: 1,
                    averageRating: 1,
                    enrolledStudent: 1,
                },
            },
        ]);

        if (!courses.length) {
            return ApiResponse(req, res, 404, "No courses found on this page", {
                courses: [],
                totalCount,
                pageNumber,
                limit: limitNumber,
            });
        }

        const data = {
            courses,
            totalCount,
            pageNumber,
            limit: limitNumber,
        };

        return ApiResponse(req, res, 200, "Successfully retrieved courses", data);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
};
const getSingleCourse = asyncHandler(async (req, res, next) => {
    try {
        const { courseId } = req.params;
        const course = await CourseModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
            {
                $project: {
                    title: 1,
                    description: 1,
                    thumbnail: 1,
                    price: 1,
                    estimatedPrice: 1,
                    courseData: {
                        sectionName: 1,
                        "videoSection.title": 1,
                    },
                    tags: 1,
                    level: 1,
                    demoUrl: 1,
                    reviews: 1,
                    publishedBy: 1,
                    course_enrolledBy: 0,
                    conversationId: 0,
                },
            },
        ]);
        if (!course) {
            return ApiError(next, new Error("Course not found"), req, 404);
        }
        const message = "You have succesfully got the Course";
        return ApiResponse(req, res, 200, message, course);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});

const getViewEnrolledCourse = asyncHandler(async (req, res, next) => {
    try {
        const { courseId } = req.params;
        const { userId } = req.user;
        const user = await UserModel.findById(userId);
        if (!user) {
            const error = new Error("User not found");
            return ApiError(next, error, req, 404);
        }
        if (
            user.courses_enrolled &&
            user.courses_enrolled.length > 0 &&
            !user.courses_enrolled.include(courseId)
        ) {
            const error = new Error("You are not enrolled to this course");
            return ApiError(next, error, req, 404);
        }
        const course = await CourseModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
            {
                $project: {
                    title: 1,
                    description: 1,
                    thumbnail: 1,
                    price: 1,
                    estimatedPrice: 1,
                    courseData: 1,
                    publishedBy: 1,
                    course_enrolledBy: 0,
                    conversationId: 1,
                },
            },
        ]);

        if (!course) {
            const error = new Error("Course not found");
            return ApiError(next, error, req, 404);
        }
        const message = "You have succesfully got the Course";
        return ApiResponse(req, res, 200, message, course);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});

module.exports = {
    uploadCourse,
    updateCourse,
    deleteCourse,
    getAllCourses,
    getSingleCourse,
    getViewEnrolledCourse,
};
