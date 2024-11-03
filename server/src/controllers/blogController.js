const BlogModel = require("../models/blogModel");
const { asyncHandler } = require("../utils/asyncHandler");

const uploadBlog = asyncHandler(async (req, res, next) => {
    try {
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const updateBlog = asyncHandler(async (req, res, next) => {
    try {
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const deleteBlog = asyncHandler(async (req, res, next) => {
    try {
        const { blogId } = req.params;
        const { userId } = req.user;
        const blog = await BlogModel.findById(blogId).select("publishedBy").lean();
        if (!blog) {
            const error = new Error(`Couldn not find Blog with id ${blogId}`);
            return ApiError(next, error, req, 500);
        }
        if (blog.publishedBy !== userId) {
            const error = new Error("You can't delete this Blog");
            return ApiError(next, error, req, 404);
        }
        await BlogModel.findByIdAndDelete(blogId);
        const message = "You have succesfully deleted the Blog";
        return ApiResponse(req, res, 200, message, course);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});

const getAllBlogs = asyncHandler(async (req, res, next) => {
    try {
        const { page = 1, limit = 12 } = req.query;
        const pageNumber = Math.max(1, parseInt(page, 10));
        const limitNumber = Math.max(1, parseInt(limit, 10));
        const totalCount = await BlogModel.countDocuments()
        if (totalCount === 0) {
            return ApiResponse(req, res, 200, "No Blog found", {
                blogs: [],
                totalCount: 0,
                pageNumber: pageNumber,
                limit: limitNumber,
            });
        }
        const blogs = await BlogModel.aggregate([
            { $match: { isPublished: true } },
            { $skip: (pageNumber - 1) * limitNumber },
            { $limit: limitNumber },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    description: 1,
                    publishedBy: 1,
                    coverImage: 1
                }
            }
        ])
        const data = {
            blogs: blogs,
            totalCount: totalCount,
            pageNumber: pageNumber,
            limit: limit
        }
        const message = "You have succesfully got all the Blogs";
        return ApiResponse(req, res, 200, message, data);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});
const getSingleBlog = asyncHandler(async (req, res, next) => {
    try {
        const { blogId } = req.params;
        const blog = await BlogModel.findById(blogId).lean();
        if (!blog) {
            const error = new Error(`Couldn not find Blog with id ${blogId}`);
            return ApiError(next, error, req, 500);
        }
        const message = "You have successfully found the blog";
        return ApiResponse(req, res, 200, message, blog);
    } catch (error) {
        return ApiError(next, error, req, 500);
    }
});

module.exports = {
    uploadBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    getSingleBlog,
};
