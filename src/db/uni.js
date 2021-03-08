const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/uni"

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) throw err;
    
    console.log("Connection successfully established.");
});

mongoose.connection.on("disconnected", () => {
    console.log("Connection disconnected.");
})


const studentSchema = mongoose.Schema({
    student_number: {type: Number},
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    gender: {type: String},
    courses: []
});

const courseSchema = mongoose.Schema({
    id: {type: Number},
    course_name: {type: String},
    credits: {type: Number},
    study_year: {type: Number},
    teacher: {type: String}
});

const Student = mongoose.model("students", studentSchema);
const Course = mongoose.model("courses", courseSchema);

module.exports = {
    Student: Student,
    Course: Course
}
