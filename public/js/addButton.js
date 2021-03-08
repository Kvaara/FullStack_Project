const add = (type) => {

    const addButton= document.getElementById('addButton');
    addButton.addEventListener("click", () => {
    const textBox = document.getElementsByClassName("add");

    if (type === "student") {

        const newBody = {
            "student_number": parseInt(textBox[0].value),
            "first_name": textBox[1].value,
            "last_name": textBox[2].value,
            "email": textBox[3].value,
            "gender": textBox[4].value
        }
        
        fetch("/students", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBody)
        })
            .then( (response) => {
                if (response.ok) {
                    console.log("New student added");
                    return response.json;
                }
                throw new Error("There was an error adding the student");
            })
            .then( () => {
                studentRetrieveButton.click();
            })
            .catch(error => console.log(error));
    }
    else if (type === "course") {

        const newBody = {
            "id": parseInt(textBox[0].value),
            "course_name": textBox[1].value,
            "credits": parseInt(textBox[2].value),
            "study_year": parseInt(textBox[3].value),
            "teacher": textBox[4].value
        }

        fetch("/courses", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBody)
        })
            .then( (response) => {
                if (response.ok) {
                    console.log("New course added");
                    return response.json;
                }
                throw new Error("There was an error adding the course");
            })
            .then( () => {
                courseRetrieveButton.click();
            })
            .catch(error => console.log(error));

        }
    });
};