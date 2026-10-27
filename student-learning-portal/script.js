
const registrationForm = document.querySelector("#register form");

const message = document.createElement("p");
message.id = "formMessage";
message.setAttribute("role", "status");
message.setAttribute("aria-live", "polite");
message.hidden = true;
registrationForm.appendChild(message);

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    message.className = "";
    message.hidden = true;

    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();
        return;
    }

    const studentName =
        registrationForm.elements["fullname"].value.trim();

    const selectedCourse =
        registrationForm.elements["course"].value;

    const learningMode =
        registrationForm.elements["mode"].value;

    if (!studentName) {
        message.textContent = "Please enter your full name.";
        message.className = "error";
        message.hidden = false;
        return;
    }

    message.textContent =
        "Thank you, " + studentName +
        "! Your " + selectedCourse +
        " course registration (" + learningMode +
        ") has been checked successfully. This is a demo only; no data was saved.";

    message.className = "success";
    message.hidden = false;
});

registrationForm.addEventListener("reset", function () {
    message.hidden = true;
    message.textContent = "";
    message.className = "";
});
