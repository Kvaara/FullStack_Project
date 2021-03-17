const sqlite3 = require("sqlite3").verbose();

// Url to the database called 'uni' (mongoDB)
const uniDb = new sqlite3.Database("uni");

uniDb.run(
  "CREATE TABLE IF NOT EXISTS students (student_number INTEGER, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, courses TEXT)"
);
uniDb.run(
  "CREATE TABLE IF NOT EXISTS courses (id INTEGER, course_name TEXT, credits INTEGER, study_year INTEGER, teacher TEXT)"
);

uniDb.run(
  "CREATE TABLE IF NOT EXISTS registerations (first_name TEXT, last_name TEXT, courses TEXT)"
);

// Exporting Student and Course to be used in app.js
module.exports = {
  uniDb,
};
