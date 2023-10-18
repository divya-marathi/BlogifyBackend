const blogModel = require("../models/blogModel");

const getAllBlogs = async (req, res) => {
  const AllBlogs = await blogModel.find({})
  if(!AllBlogs){
    return res.send("not blog found")
  }
  return res.send(AllBlogs) 
}

const createBlog = async (req, res) => {
  
const {img, title, description, date, likes, dislikes } = req.body;
  const Blog =new  blogModel({
    img, title, description, date, likes, dislikes
  })
  
  await Blog.save()
  
  return res.send(Blog)
}


const updateBlog = async (req, res) => {
  const {img, title, description, id} = req.body;
   
    await blogModel.findByIdAndUpdate( id,{img, title, description}  )
     
  };

  const deleteBlog = async (req, res) => {
    const {id} = req.body;
      console.log(id)
      await blogModel.findByIdAndDelete(id)
       
    }

module.exports = { getAllBlogs, createBlog,  updateBlog,deleteBlog }
