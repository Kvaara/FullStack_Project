const registrationButton = (students) => {

    students.forEach( (student, index) => {
        const registrationButton = document.getElementById("register" + index);
        registrationButton.setAttribute("class", "register");

        let clicked = 0;
        registrationButton.addEventListener("click", () => {
            clicked++;
            if (clicked & 2 != 0) {
                registration(student, index);
            }
        }) 
    })
}