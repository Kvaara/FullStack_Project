const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const { uniDb } = require("./db/uni.js");

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/students", (req, res) => {
  uniDb.all("SELECT * FROM students", (e, rows) => {
    if (e) return console.log(e);
    return res.json(rows);
  });
});

// *** Start of student routing by express ***
app.delete("/students/:student_number", (req, res) => {
  const studentNumber = req.params;

  uniDb.run(
    "DELETE FROM students WHERE student_number = ?",
    studentNumber.student_number,
    (e) => {
      if (e) return console.log(e);
      console.log("student deleted");
      return res.send(this);
    }
  );
});

app.put("/students/:student_number", (req, res) => {
  const studentNumber = req.params;
  const newBody = req.body;

  uniDb.run(
    "UPDATE students SET student_number = ?, first_name = ?, last_name = ?, email = ?, gender = ? WHERE student_number = ?",
    [
      newBody.student_number,
      newBody.first_name,
      newBody.last_name,
      newBody.email,
      newBody.gender,
      studentNumber.student_number,
    ],
    (e) => {
      if (e) return console.log(e);
      return res.send(this);
    }
  );
});

app.post("/students", (req, res) => {
  const newBody = req.body;

  uniDb.run(
    "INSERT INTO students VALUES (?, ?, ?, ?, ?, ?)",
    [
      newBody.student_number,
      newBody.first_name,
      newBody.last_name,
      newBody.email,
      newBody.gender,
      "",
    ],
    (e) => {
      if (e) return console.log(e);
      return res.send(this);
    }
  );
});
// *** End of student routing ***

// *** Start of course routing by express ***
app.get("/courses", (req, res) => {
  uniDb.all("SELECT * FROM courses", (e, rows) => {
    if (e) return console.log(e);
    return res.send(rows);
  });
});

app.delete("/courses/:id", (req, res) => {
  const courseId = req.params;

  uniDb.run("DELETE FROM courses WHERE id = ?", courseId.id, (e) => {
    if (e) return console.log(e);
    return res.send(this);
  });
});

app.put("/courses/:id", (req, res) => {
  const courseId = req.params;
  const newBody = req.body;

  uniDb.run(
    "UPDATE courses SET id = ?, course_name = ?, credits = ?, study_year = ?, teacher = ? WHERE id = ?",
    [
      newBody.id,
      newBody.course_name,
      newBody.credits,
      newBody.study_year,
      newBody.teacher,
      courseId.id,
    ],
    (e) => {
      if (e) return console.log(e);
      return res.send(this);
    }
  );
});

app.post("/courses", (req, res) => {
  const newBody = req.body;

  uniDb.run(
    "INSERT INTO courses VALUES (?, ?, ?, ?, ?)",
    [
      newBody.id,
      newBody.course_name,
      newBody.credits,
      newBody.study_year,
      newBody.teacher,
    ],
    (e) => {
      if (e) return console.log(e);
      return res.send(this);
    }
  );
});
// *** End of course routing ***

// *** Course register routing by express***
app.post("/register/:student_number", (req, res) => {
  const studentNumber = req.params;
  const newBody = req.body;

  uniDb.run(
    "UPDATE students SET courses = ? WHERE student_number = ?",
    [newBody.courses, studentNumber.student_number],
    (e) => {
      if (e) return console.log(e);
      return res.send(this);
    }
  );
});
// *** End of course register routing ***

// App listens to requests after app.js is run
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
