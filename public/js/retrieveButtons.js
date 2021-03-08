const studentRetrieveButton = document.getElementById("studentRetrieveButton");
const courseRetrieveButton = document.getElementById("courseRetrieveButton");

studentRetrieveButton.addEventListener("click", () => {
    fetch("/students", {method: "GET"})
        .then( (response) => {
            if (response.ok) {
                console.log("Student data retrieved");
                return response.json();
            }
            throw new Error("Retrieving student data failed"); 
        })
        .then( (students) => {

            createTable(students, "student");
            deleteButton(students, "student");
            editButton(students, "student");
            add("student");
            registrationButton(students);
            enrolled(students);
        })
        .catch( (error) => {
            console.log(error);
        });
});

courseRetrieveButton.addEventListener("click", () => {
    fetch("/courses", {method: "GET"})
        .then( (response) => {
            if (response.ok) {
                console.log("Course data retrieved");
                return response.json();
            }
            throw new Error("Retrieving course data failed");
        })
        .then( (courses) => {
            createTable(courses, "course");
            deleteButton(courses, "course");
            editButton(courses, "course");
            add("course");
        })
        .catch( (error) => {
            console.log(error);
        });
});
