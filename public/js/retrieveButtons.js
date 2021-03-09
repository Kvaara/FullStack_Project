/* eslint-disable no-undef */

const studentRetrieveButton = document.getElementById("studentRetrieveButton");
const courseRetrieveButton = document.getElementById("courseRetrieveButton");

studentRetrieveButton.addEventListener("click", () => {
  fetch("/students", { method: "GET" })
    .then((response) => {
      if (response.ok) {
        console.log("Student data retrieved");
        return response.json();
      }
      throw new Error("Retrieving student data failed");
    })
    .then((students) => {
      createTable(students, "student");
      delete1(students, "student");
      edit(students, "student");
      add("student");
      registration(students);
      enrolled(students);
    })
    .catch((error) => {
      console.log(error);
    });
});

courseRetrieveButton.addEventListener("click", () => {
  fetch("/courses", { method: "GET" })
    .then((response) => {
      if (response.ok) {
        console.log("Course data retrieved");
        return response.json();
      }
      throw new Error("Retrieving course data failed");
    })
    .then((courses) => {
      createTable(courses, "course");
      delete1(courses, "course");
      edit(courses, "course");
      add("course");
    })
    .catch((error) => {
      console.log(error);
    });
});
