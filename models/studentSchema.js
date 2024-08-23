const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: String,
  gender: String,
  country: String,
  phoneNamber: String,
},
{ timestamps: true },);
 
 
const Student = mongoose.model("Student", studentsSchema);
 
 

module.exports = Student;