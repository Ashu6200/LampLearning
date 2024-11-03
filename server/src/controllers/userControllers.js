const AccountModel = require("../models/accountModel");
const BlogModel = require("../models/blogModel");
const ConversationModel = require("../models/conversationModel");
const CourseModel = require("../models/courseModel");
const UserModel = require("../models/userModel");
const { asyncHandler } = require("../utils/asyncHandler");

const getyourself = asyncHandler(async (req, res, next) => {
  try {
    const isUserExist = await UserModel.findOne({
      _id: req.user.userId,
    })
      .populate({ path: "accountId", select: "id email" })
      .lean();
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    const message = `You have successfully got user`;
    return ApiResponse(req, res, 200, message, isUserExist);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
const getAllUser = asyncHandler(async (req, res, next) => {
  try {
    const allUser = await UserModel.find().lean();
    const message = `You have successfully got all the users`;
    return ApiResponse(req, res, 200, message, allUser);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
const getSingleUser = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const isUserExist = await UserModel.findOne({ _id: userId })
      .populate({
        path: "accountId",
        select: "username email role -password",
      })
      .lean();
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    const message = `You have successfully got user`;
    return ApiResponse(req, res, 201, message, isUserExist);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});

const updateUser = asyncHandler(async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const { userId } = req.params;
    if (userId !== req.user.userId) {
      const error = new Error("User not Authorized to update this user");
      return ApiError(next, error, req, 404);
    }
    const isUserExist = await UserModel.findOne({ _id: userId }).populate({
      path: "accountId",
      select: "email role -password",
    });
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    isUserExist.name = name || isUserExist.name;
    isUserExist.description = description || isUserExist.description;
    await isUserExist.save();
    const message = "You have updated the user successfully";
    return ApiResponse(req, res, 201, message, isUserExist);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});

const deleteUser = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (userId !== req.user.userId) {
      const error = new Error("User not Authorized to update this user");
      return ApiError(next, error, req, 404);
    }
    const [account, user] = await Promise.all([
      AccountModel.findById({ id: req.user.accountId }),
      UserModel.findById({ id: req.user.userId }),
    ]);

    if (!account || !user) {
      const error = new Error("No account found.");
      return ApiError(next, error, req, 404);
    }
    await Promise.all([
      AccountModel.findByIdAndDelete(req.user.accountId),
      UserModel.findOneAndDelete({ accountId: req.user.accountId }),
    ]);

    const message = "You have successfully deleted the user.";
    return ApiResponse(req, res, 200, message);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
// const getAllCourseEnrolledByUser = asyncHandler(async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const isUserExist = await UserModel.findById(userId).lean();
//     if (!isUserExist) {
//       const error = new Error("User not found");
//       return ApiError(next, error, req, 404);
//     }
//     if (
//       !isUserExist.courses_enrolled ||
//       isUserExist.courses_enrolled.length === 0
//     ) {
//       return ApiResponse(req, res, 200, "No courses enrolled", []);
//     }
//     const courseEnrolled = isUserExist.courses_enrolled;
//     const enrolledCourses = await CourseModel.find({
//       _id: { $in: courseEnrolled },
//     })
//       .select("title description thumbnail conversationId")
//       .lean();

//     const message = "You have succesfully got Course Enrolled";
//     return ApiResponse(req, res, 200, message, enrolledCourses);
//   } catch (error) {
//     return ApiError(next, error, req, 500);
//   }
// });
const getAllCourseEnrolledByUser = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 12 } = req.query;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const userQuery = await UserModel.aggregate([
      {
        $match: { _id: mongoose.Schema.Types.ObjectId(userId) },
      },
      {
        $lookup: {
          from: "course",
          localField: "courses_enrolled",
          foreignField: "_id",
          as: "enrolledCourse",
        },
      },
      {
        $unwind: "enrolledCourse",
      },
      {
        $facet: {
          data: [
            { $skip: (pageNumber - 1) * limitNumber },
            { $limit: limitNumber },
            {
              $project: {
                "enrolledCourses.title": 1,
                "enrolledCourses.description": 1,
                "enrolledCourses.thumbnail": 1,
                "enrolledCourses.conversationId": 1,
              },
            },
          ],
          totalCount: [{ $count: "count" }],
        },
      },
    ]);
    const userWithCourses = await userQuery.exec();
    if (!userWithCourses || userWithCourses.length === 0 || !userWithCourses[0].data) {
      const error = new Error("User not found or no courses enrolled");
      return ApiError(next, error, req, 404);
    }
    const enrolledCourses = userWithCourses[0].data;
    const totalCount = userWithCourses[0].totalCount[0] ? userWithCourses[0].totalCount[0].count : 0;
    const totalPages = Math.ceil(totalCount / limitNumber);
    const message = "You have successfully got paginated Course Enrolled";
    const data = {
      enrolledCourses,
      pagination: {
        totalItems: totalCount,
        totalPages,
        currentPage: pageNumber,
        pageSize: limitNumber
      }
    }
    return ApiResponse(req, res, 200, message, data);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
const getAllCourseSavedByUser = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const isUserExist = await UserModel.findById(userId).lean();
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    if (!isUserExist.courses_saved || isUserExist.courses_saved.length === 0) {
      return ApiResponse(req, res, 200, "No saved enrolled", []);
    }
    const coursesSaved = isUserExist.courses_saved;
    const savedCourses = await CourseModel.find({
      _id: { $in: coursesSaved },
    })
      .select("title description thumbnail conversationId")
      .lean();

    const message = "You have succesfully got saved Course ";
    return ApiResponse(req, res, 200, message, savedCourses);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
const getAllCourseReleasedByUser = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const isUserExist = await UserModel.findById(userId).lean();
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    if (
      !isUserExist.courses_released ||
      isUserExist.courses_released.length === 0
    ) {
      return ApiResponse(req, res, 200, "No saved enrolled", []);
    }
    const coursesReleased = isUserExist.courses_saved;
    const releasedCourses = await CourseModel.find({
      _id: { $in: coursesReleased },
    })
      .select("title description thumbnail conversationId")
      .lean();

    const message = "You have succesfully got saved Course ";
    return ApiResponse(req, res, 200, message, releasedCourses);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
const getAllBlogReleasedByUser = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const isUserExist = await UserModel.findById(userId).lean();
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    if (!isUserExist.blogs_saved || isUserExist.blogs_saved.length === 0) {
      return ApiResponse(req, res, 200, "No saved enrolled", []);
    }
    const blogReleaseds = isUserExist.blogs_released;
    const releasedCourses = await BlogModel.find({
      _id: { $in: blogReleaseds },
    })
      .select("title description coverImage")
      .lean();

    const message = "You have succesfully got released Blog";
    return ApiResponse(req, res, 200, message, releasedCourses);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
const getAllBlogSavedByUser = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const isUserExist = await UserModel.findById(userId).lean();
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    if (
      !isUserExist.blogs_released ||
      isUserExist.blogs_released.length === 0
    ) {
      return ApiResponse(req, res, 200, "No saved enrolled", []);
    }
    const blogSaved = isUserExist.blogs_released;
    const savedBlog = await BlogModel.find({
      _id: { $in: blogSaved },
    })
      .select("title description coverImage")
      .lean();

    const message = "You have succesfully got saved Blog";
    return ApiResponse(req, res, 200, message, savedBlog);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});
const getAllCourseConversation = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.user;
    const isUserExist = await UserModel.findById(userId)
      .select("_id courses_conversation")
      .lean();
    if (!isUserExist) {
      const error = new Error("User not found");
      return ApiError(next, error, req, 404);
    }
    if (
      !isUserExist.blogs_released ||
      isUserExist.blogs_released.length === 0
    ) {
      return ApiResponse(req, res, 200, "No saved enrolled", []);
    }
    const conversations = isUserExist.courses_conversation;
    const conversationlist = await ConversationModel.find({
      _id: { $in: conversations },
    })
      .populate({
        path: "course_id",
        select: "title thumbnail",
      })
      .lean();

    const message = "You have succesfully got saved Blog";
    return ApiResponse(req, res, 200, message, conversationlist);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});

module.exports = {
  getyourself,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getAllCourseEnrolledByUser,
  getAllCourseSavedByUser,
  getAllCourseReleasedByUser,
  getAllBlogReleasedByUser,
  getAllBlogSavedByUser,
  getAllCourseConversation,
};
