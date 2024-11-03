const { uploadBlog, updateBlog, deleteBlog, getAllBlogs, getSingleBlog } = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

const blogRouter = require('express').Router();

blogRouter.post("/create-blog", authMiddleware, uploadBlog)
blogRouter.put("/update-blog", authMiddleware, updateBlog)
blogRouter.delete("/delete-blog", authMiddleware, deleteBlog)
blogRouter.get("/all-blog", getAllBlogs)
blogRouter.get("/blog/:id", getSingleBlog)

module.exports = blogRouter;