/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const registration = (students) => {
  students.forEach((student, index) => {
    const registrationButton = document.getElementById(`register${index}`);
    registrationButton.setAttribute("class", "register");

    let clicked = 0;
    registrationButton.addEventListener("click", () => {
      clicked += 1;
      if (clicked % 2 !== 0) {
        registering(student, index);
      }
    });
  });
};
