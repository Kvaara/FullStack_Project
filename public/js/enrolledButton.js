const enrolled = (students) => {

    students.forEach((student, index) => {
        const enrolledButton = document.getElementById("viewCourses" + index);
        enrolledButton.setAttribute("class", "viewCourses");

        enrolledButton.addEventListener("click", () => {

            fetch("/students", {method: "GET"})
                .then( (response) => {
                    if (response.ok) {
                        console.log("Course data retrieved");
                        return response.json();
                    }
                    throw new Error("Retrieving course data failed");
                })
                .then ((data) => {
                    const courses = data[index].courses;
                    const coursesEnrolled = courses.length;
                    let coursesString = "";
                    if (coursesEnrolled != 0) {
                        for (i = 0; i < coursesEnrolled; i++) {
                            const currentCourse = courses[i].course_name;
                            coursesString = coursesString + "'" + currentCourse + "'";
                            coursesString = coursesString + " ";
                        }

                        alert(data[index].first_name + " " + data[index].last_name + " is enrolled on the following courses: \n" + coursesString);

                    } else {
                        alert(data[index].first_name + " " + data[index].last_name + " isn't enrolled on any courses.");
                    }
                })
        })
    })
}