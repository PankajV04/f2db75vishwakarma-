const mongoose = require("mongoose") 
const searchSchema = mongoose.Schema({ 
 color: String, 
 size: String, 
 price:{
    type:Number,
    min: 1000,
    max: 8000 } 
}) 
 
module.exports = mongoose.model("Search", searchSchema) 