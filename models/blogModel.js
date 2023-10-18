const mongoose = require('mongoose')

const BlogSchema=new mongoose.Schema({
    img:String,
    title : String,
    description : String,
    date:Date,
    likes:Number,
    dislikes:Number
})

module.exports = mongoose.model('blog', BlogSchema)