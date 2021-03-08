const { json } = require("body-parser");
const express = require("express"), mongoose = require("mongoose"), bodyparser = require("body-parser"), path = require("path");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}))

const { Student } = require("./db/uni.js");
const { Course } = require("./db/uni.js");

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/students", (req, res) => {
    Student.find().exec( (err, students) => {
        if (err) return console.log(err);
        res.json(students);
    });
});

app.delete("/students/:student_number", (req, res) => {
    const studentNumber = req.params;
    Student.deleteOne(studentNumber).then( (result) => {
        console.log("Student with the number " + studentNumber.student_number + " has been deleted.");
        res.send(result);
    }, (error) => {
        throw error;
    });
});

app.put("/students/:student_number", (req, res) => {
    const studentNumber = req.params;
    const newBody = req.body

    Student.updateOne(studentNumber, newBody).then( (result) => {
        console.log("Student with the number " + studentNumber.student_number + " data has been changed");
        res.send(result);
    }, (error) => {
        throw error;
    })
})

app.post("/students", (req, res) => {
    const newBody = req.body;
    const newStudent = new Student(newBody);

    newStudent.save( (err, newStudent) => {
        if (err) throw err;
        console.log("New student added");
        res.send(newStudent);
    })
})

app.get("/courses", (req, res) => {
    Course.find().exec( (err, courses) => {
        if (err) return console.log(err);
        res.json(courses);
    })
})

app.delete("/courses/:id", (req, res) => {
    const courseId = req.params;

    Course.deleteOne(courseId).then( (result) => {
        console.log("Course with the id " + courseId.id + " has been deleted");
        res.send(result);
    }, (error) => {
        throw error;
    });
});


app.put("/courses/:id", (req, res) => {
    const courseId = req.params;
    const newBody = req.body;
    
    Course.updateOne(courseId, newBody).then( (result) => {
        console.log("Course with the id " + courseId + " data has been changed");
        res.send(result);
    }, (error) => {
        throw error;
    });
});


app.post("/courses", (req, res) => {
    const newBody = req.body;
    const newCourse = new Course(newBody);

    newCourse.save( (err, newCourse) => {
        if (err) throw err;
        console.log("New course added");
        res.send(newCourse);
    })
})

app.post("/register/:student_number", (req, res) => {
    const studentNumber = req.params;
    const newBody = req.body

    Student.updateOne(studentNumber, newBody).then( (result) => {
        console.log("Student with the number " + studentNumber.student_number + " has been registered to a course");
        res.send(result);
    }, (error) => {
        throw error;
    })
})


app.listen(3000, () => {
    console.log("Server is up on port 3000");
})