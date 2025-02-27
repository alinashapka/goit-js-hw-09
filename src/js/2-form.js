const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", event => {
    const { name, value } = event.target;

    if (name === "email") { 
        formData.email = value;
    }
    else if (name === "message") {  
    formData.message = value;
  }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (savedData) {
    form.email.value = savedData.email;
    form.message.value = savedData.message;

    savedData.email = formData.email;
    savedData.message = formData.message;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Please fill all fields");
        return;
    }

    console.log(formData);
    form.reset();
    localStorage.removeItem("feedback-form-stare");
    Object.keys(formData).forEach(key => formData[key] = "");
});