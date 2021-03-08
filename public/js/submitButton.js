const submitButton = (studentNumber, index, type) => {  

    const button = document.getElementById("submit" + index);

        button.addEventListener("click", () => {
            if (type === "student") {
                const textBox = document.getElementsByClassName("student" + studentNumber);
        
                const newBody = {
                    "student_number": parseInt(textBox[0].value),
                    "first_name": textBox[1].value,
                    "last_name": textBox[2].value,
                    "email": textBox[3].value,
                    "gender": textBox[4].value
                }
        
                fetch("/students/" + studentNumber, {
                    method: "PUT", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify(newBody)
                })
                        .then( (response) => {
                            if (response.ok) {
                                console.log("Student with the number " + studentNumber + " info has been changed");
                                return response.json;
                            }
                            throw new Error("There was an error editing the student's info");
                        })
                        .then ( () => {
                            studentRetrieveButton.click();
                        })
                        .catch( (error) => {
                            console.log(error);
                        });
            }
            else if (type === "course") {
                const textBox = document.getElementsByClassName("course" + studentNumber);
        
                const newBody = {
                    "id": parseInt(textBox[0].value),
                    "course_name": textBox[1].value,
                    "credits": parseInt(textBox[2].value),
                    "study_year": parseInt(textBox[3].value),
                    "teacher": textBox[4].value
                }
        
                fetch("/courses/" + studentNumber, {
                    method: "PUT", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify(newBody)
                })
                    .then( (response) => {
                        if (response.ok) {
                            console.log("Course with the number " + studentNumber + " data has been changed");
                            return response.json;
                        }
                        throw new Error("There was an error editing the course's info");
                    })
                    .then ( () => {
                        courseRetrieveButton.click();
                    })
                    .catch( (error) => {
                        console.log(error);
                    });
            }
        })
};