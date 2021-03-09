const mongoose = require("mongoose");

// Url to the database called 'uni' (mongoDB)
const url = "mongodb://127.0.0.1:27017/uni";

// Connecting to the database by using mongoose (a much simpler way of connecting to a mongodb database)
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("Connection successfully established.");
  }
);

// If disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Connection disconnected.");
});

const studentSchema = mongoose.Schema({
  student_number: { type: Number },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  gender: { type: String },
  courses: [],
});

const courseSchema = mongoose.Schema({
  id: { type: Number },
  course_name: { type: String },
  credits: { type: Number },
  study_year: { type: Number },
  teacher: { type: String },
});

const Student = mongoose.model("students", studentSchema);
const Course = mongoose.model("courses", courseSchema);

// Exporting Student and Course to be used in app.js
module.exports = {
  Student,
  Course,
};
