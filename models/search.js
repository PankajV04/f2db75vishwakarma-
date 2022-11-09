const mongoose = require("mongoose") 
const searchSchema = mongoose.Schema({ 
 color: String, 
 size: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Search", searchSchema) 