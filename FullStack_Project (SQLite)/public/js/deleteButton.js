/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const delete1 = (students, type) => {
  if (type === "student") {
    students.forEach((student, index) => {
      const deleteButton = document.getElementById(`delete${index}`);
      deleteButton.setAttribute("class", "delete");

      deleteButton.addEventListener("click", () => {
        if (deleteButton.id !== `cancel${index}` && confirm("Are you sure?")) {
          fetch(`/students/${student.student_number}`, { method: "DELETE" })
            .then((response) => {
              if (response.ok) {
                console.log(
                  `Student with the number ${student.student_number} has been deleted`
                );
                return response.json;
              }
              throw new Error("There was an error deleting the student");
            })
            .then(() => {
              studentRetrieveButton.click();
            })
            .catch((error) => {
              throw error;
            });
        } else {
          studentRetrieveButton.click();
        }
      });
    });
  } else if (type === "course") {
    students.forEach((course, index) => {
      const deleteButton = document.getElementById(`delete${index}`);
      deleteButton.setAttribute("class", "delete");

      deleteButton.addEventListener("click", () => {
        if (deleteButton.id !== `cancel${index}` && confirm("Are you sure?")) {
          fetch(`/courses/${course.id}`, { method: "DELETE" })
            .then((response) => {
              if (response.ok) {
                console.log(`Course with the id ${course.id} has been deleted`);
                return response.json;
              }
              throw new Error("There was an error deleting the student");
            })
            .then(() => {
              courseRetrieveButton.click();
            })
            .catch((error) => {
              throw error;
            });
        } else {
          courseRetrieveButton.click();
        }
      });
    });
  }
};
