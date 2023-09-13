const form = document.querySelector(".login-form");

form.addEventListener('submit', dataForm);
function dataForm(event) {
    event.preventDefault();

    const chooseForm = event.currentTarget;
    const email = chooseForm.elements.email.value;
    const password = chooseForm.elements.password.value;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
    } else {
        console.log({ Email: email, Password: password });
        chooseForm.reset();
    }
}

