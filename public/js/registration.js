const registration = (student, index) => {

    const registerButton = document.getElementById("register" + index);
    registerButton.innerHTML = "<input type=search id=courseSearch" + index + " placeholder='Search by course name'>"

    const addToCourseBtn = document.createElement('button');
    addToCourseBtn.innerText = "add student"; 
    addToCourseBtn.id = "addToCourse" + index;
    addToCourseBtn.setAttribute("class", "addToCourse");
    registerButton.appendChild(addToCourseBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = "back";
    cancelBtn.id = "cancelRegistration" + index;
    cancelBtn.setAttribute("class", "cancelRegistration");
    registerButton.appendChild(cancelBtn);

    const searchBar = document.getElementById("courseSearch" + index);

    // When the user clicks cancel we need to remove everything and reset the registerButton innerhtml back to register
    cancelBtn.addEventListener("click", () => {
        searchBar.remove();
        addToCourseBtn.remove();
        cancelBtn.remove();
        registerButton.innerHTML = "<strong>register</strong>"
    })

    addToCourseBtn.addEventListener("click", () => {
        const searchValue = searchBar.value;
        fetch("/courses", {method: "GET"})
            .then( (response) => {
                if (response.ok) {
                    console.log("Course data retrieved");
                    return response.json();
                }
                throw new Error("Retrieving course data failed");
            })
            .then( (data) => {
                let constant = 0;
                data.forEach( (course, courseIndex) => {

                    if (course.course_name === searchValue) {
                        courseFound(course, student);
                        constant++;
                    } else if ( (data.length === courseIndex + 1) && (constant != 1) ) {
                        courseNotFound(searchValue);
                    }
                })
            })
            .catch( (error) => {
                throw error;
            });
    });
}


const courseFound = (course, student) => {
    // First we push the course to the student javascript object
    student.courses.push(course);

    // Now we need to stringify this javascript object
    const studentStringified = JSON.stringify(student);

    fetch("/register/" + student.student_number, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: studentStringified
    })
        .then( (response) => {
            if (response.ok) {
                console.log("Registered student to the course");
                return response.json;
            }
            throw new Error("There was an error registering the student");
        })
        .then ( () => {
            alert(student.first_name + " " + student.last_name + " has been registered to " + course.course_name + " course.")
        })
        .catch( (error) => {
            throw error;
        })
}

const courseNotFound = (course) => {
    alert("No courses named '" + course +  "' found. Make sure that you have typed in the course name correctly.");
}