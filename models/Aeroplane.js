const mongoose = require("mongoose") 
const AeroplaneSchema = mongoose.Schema({ 
flight_capacity: { type: Number, required: true, min: 40 }, 
flight_number: { type: Number, required: true, min: 1000 , max: 9999},
flight_captain: { type: String, required: true }, 
is_operational: { type: Boolean, required: true }
}) 
 
module.exports = mongoose.model("Aeroplane", AeroplaneSchema) 