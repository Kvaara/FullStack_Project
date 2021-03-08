const createTable = (data, type) => {

    const tableExisting = document.getElementById("table");
    if (tableExisting) {
        tableExisting.remove();
    }

    const table = document.createElement("table");
    table.setAttribute("id", "table");

    if (type === "student") {
        data.forEach( (student, index) => {

            if (index === 0) {
                const firstRow = table.insertRow(0);
                const headers = ["Gender", "Email", "Last name", "First name", "Student number"];
                firstRow.setAttribute("class", "header");

                for (i = 0; i <= 4; i++) {
                    firstRow.insertCell(0).append(headers[i]);  
                }
            }

            const remainingRows = table.insertRow(-1); 

            for (let i = 0; i <= 8; i++) {
                let cell = remainingRows.insertCell(-1);
                cell.setAttribute("class", index);
                switch (i) {
                    case 0:
                        cell.append(student.student_number);
                        break;
                    case 1:
                        cell.append(student.first_name);
                        break;
                    case 2:
                        cell.append(student.last_name);
                        break;
                    case 3:
                        cell.append(student.email);
                        break;
                    case 4:
                        cell.append(student.gender);
                        break;
                    case 5:
                        cell.innerHTML = "<button type='button' id=edit" + index + "> <strong>edit</strong> </button>";
                        break;
                    case 6:
                        cell.innerHTML = "<button type='button' id=delete" + index + "> <strong>delete</strong> </button>";
                        break;
                    case 7:
                        cell.innerHTML = "<button type 'button' id=register" + index + "> <strong>register</strong> </button>"
                        break;
                    case 8:
                        cell.innerHTML = "<button type 'button' id=viewCourses" + index + "> <strong>enrollments</strong> </button>"
                    default:
                        break;
                }
            }
        });

        // This adds the final row where you can add additional students to the database
        // This could've been done better because if you have a lot of students, you need to scroll straight to the bottom of the page
        addStudentsRow(table, data.length, data);

        document.body.appendChild(table);
    } 
    else if (type === "course") {
        data.forEach( (course, index) => {
            if (index === 0) {
                const firstRow = table.insertRow(0);
                const headers = ["Teacher", "Study year", "Credits", "Course name", "ID"];
                firstRow.setAttribute("class", "header");

                for (i = 0; i <= 4; i++) {
                    firstRow.insertCell(0).append(headers[i]);
                }
            }

            const remainingRows = table.insertRow(-1);

            for (let i = 0; i <= 6; i++) {
                let cell = remainingRows.insertCell(-1);
                cell.setAttribute("class", index);
                switch (i) {
                    case 0:
                        cell.append(course.id);
                        break;
                    case 1:
                        cell.append(course.course_name);
                        break;
                    case 2:
                        cell.append(course.credits);
                        break;
                    case 3:
                        cell.append(course.study_year);
                        break;
                    case 4:
                        cell.append(course.teacher);
                        break;
                    case 5:
                        cell.innerHTML = "<button type='button' id=edit" + `${index}` + "> <strong>edit</strong> </button>";
                        break;
                    case 6:
                        cell.innerHTML = "<button type='button' id=delete" + `${index}`+ "> <strong>delete</strong> </button>";
                        break;
                    default:
                        break;
                }
            }
        });
        addCoursesRow(table, data.length, data);

        document.body.appendChild(table);
    }
}

//This function adds the latest row to the students table that's used for adding new students to the database.
const addStudentsRow = (table, latestStudentIndex, students) => {

    let previousStudentNumber = 0; let biggestStudentNumber;
    for (i = 0; i < latestStudentIndex; i++) {
        let currentStudentNumber = students[i].student_number;

        if (currentStudentNumber > previousStudentNumber) {
            biggestStudentNumber = students[i].student_number;
        }

        previousStudentNumber = currentStudentNumber;
    }

    const latestStudentNumber = biggestStudentNumber + 1;


    const addRow = table.insertRow(-1);
    for (i = 0; i <= 5; i++) {
        const cell = addRow.insertCell(-1);
        switch (i) {
            case 0:
                cell.innerHTML = "<input type='number' class=add value=" + latestStudentNumber + " >"
                break;
            case 1:
                cell.innerHTML = "<input type='text' class=add>"
                break;
            case 2:
                cell.innerHTML = "<input type='text' class=add>"
                break;
            case 3:
                cell.innerHTML = "<input type='email' class=add>"
                break;
            case 4:
                cell.innerHTML = "<input type='text' class=add>"
                break;
            default:
                cell.innerHTML = "<button id='addButton'> <strong>add</strong> </button>"
                break;
        }
    }
}

//This function adds the latest row to the courses table that's used for adding new courses to the database.
const addCoursesRow = (table, latestCourseIndex, courses) => {

    let previousCourseId = 0; let biggestCourseId;
    for (i = 0; i < latestCourseIndex; i++) {
        let currentCourseId = courses[i].id;

        if (currentCourseId > previousCourseId) {
            biggestCourseId = courses[i].id;
        }

        previousCourseId = currentCourseId;
    }

    const latestCourseId = biggestCourseId + 1;
    
    const addRow = table.insertRow(-1);
    for (i = 0; i <= 5; i++) {
        const cell = addRow.insertCell(-1);
        switch (i) {
            case 0:
                cell.innerHTML = "<input type='number' class=add value=" + latestCourseId + ">"
                break;
            case 1:
                cell.innerHTML = "<input type='text' class=add>"
                break;
            case 2:
                cell.innerHTML = "<input type='number' class=add>"
                break;
            case 3:
                cell.innerHTML = "<input type='number' class=add>"
                break;
            case 4:
                cell.innerHTML = "<input type='text' class=add>"
                break;
            default:
                cell.innerHTML = "<button id='addButton'> <strong>add</strong> </button>"
                break;
        }
    }
}