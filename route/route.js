const express = require('express')
const { getAllBlogs, createBlog, deleteBlog,updateBlog } = require('../Controllers/blogController')

const BlogRouter = express.Router()

BlogRouter.get('/',getAllBlogs) 
BlogRouter.post('/create',createBlog)
BlogRouter.post('/update',updateBlog)
BlogRouter.post('/delete',deleteBlog)


module.exports = BlogRouter