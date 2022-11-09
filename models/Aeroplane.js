const mongoose = require("mongoose") 
const AeroplaneSchema = mongoose.Schema({ 
flight_capacity: Number, 
flight_number: Number, 
flight_captain: String, 
is_operational: Boolean
}) 
 
module.exports = mongoose.model("CostuAeroplaneme", 
AeroplaneSchema) 