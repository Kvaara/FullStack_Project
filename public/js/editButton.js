const editButton = (students, type) => {

    if (type === "student") {

        students.forEach( (student, index) => {

            const editButton = document.getElementById("edit" + index);
            editButton.setAttribute("class", "edit");

            editButton.addEventListener("click", () => {

                if (editButton.id != "submit" + index) {

                    for (i = 0; i <= 4; i++) {

                        const textBox = document.getElementsByClassName(index);
                        switch (i) {
                            case 0:
                                textBox[0].innerHTML = "<input type=number value=" + student.student_number + " class=student" + student.student_number + ">";
                                break;
                            case 1:
                                textBox[1].innerHTML = "<input type=text value=" + student.first_name + " class=student" + student.student_number + ">";
                                break;
                            case 2:
                                textBox[2].innerHTML = "<input type=text value=" + student.last_name + " class=student" + student.student_number + ">";
                                break;
                            case 3:
                                textBox[3].innerHTML = "<input type=email value=" + student.email + " class=student" + student.student_number + ">";
                                break;
                            case 4:
                                textBox[4].innerHTML = "<input type=text value=" + student.gender + " class=student" + student.student_number + ">";
                                break;
                            default:
                                break;
                        }
                    }

                    editButton.id = "submit" + index;
                    document.getElementById("submit" + index).innerHTML = "<strong>submit</strong";
                    document.getElementById("delete" + index).innerHTML = "<strong>cancel</strong";
                    document.getElementById("delete" + index).id = "cancel" + index;

                    submitButton(student.student_number, index, type);
                }
            });
        });
    }
    else if (type === "course") {
        students.forEach( (course, index) => {

            const editButton = document.getElementById("edit" + index);
            editButton.setAttribute("class", "edit");
            
            editButton.addEventListener("click", () => {

                if (editButton.id != "submit" + index) {

                    for (i = 0; i <= 4; i++) {

                        const textBox = document.getElementsByClassName(index);
                        switch (i) {
                            case 0:
                                textBox[0].innerHTML = "<input type='number' " + "value=" + course.id + " class=" + 'course' + course.id + ">";
                                break;
                            case 1:
                                textBox[1].innerHTML = "<input type='text' " + "value=" + course.course_name + " class=" + 'course' + course.id + ">";
                                break;
                            case 2:
                                textBox[2].innerHTML = "<input type='number' " + "value=" + course.credits + " class=" + 'course' + course.id + ">";
                                break;
                            case 3:
                                textBox[3].innerHTML = "<input type='number' " + "value=" + course.study_year + " class=" + 'course' + course.id + ">";
                                break;
                            case 4:
                                textBox[4].innerHTML = "<input type='text' " + "value=" + course.teacher + " class=" + 'course' + course.id + ">";
                                break;
                            default:
                                break;
                        }
                    }

                    editButton.id = "submit" + index;
                    document.getElementById("submit" + index).innerHTML = "<strong>submit</strong";
                    document.getElementById("delete" + index).innerHTML = "<strong>cancel</strong";
                    document.getElementById("delete" + index).id = "cancel" + index;

                    submitButton(course.id, index, type);
                }
            });
        });
    }
};