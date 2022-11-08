const mongoose = require("mongoose") 
const SearchSchema = mongoose.Schema({ 
 color: String, 
 size: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Search", SearchSchema) 