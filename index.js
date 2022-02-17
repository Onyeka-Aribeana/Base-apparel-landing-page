const email_field = document.querySelector(".input-field");
const submit = document.querySelector(".submit-btn");
const warning = document.querySelector(".warning");
const label = document.querySelector(".input-wrapper label");

function events() {
  email_field.addEventListener("focus", () => {
    email_field.classList.remove("failed");
    email_field.classList.add("active");
  });
  email_field.addEventListener("blur", () => {
    email_field.classList.remove("failed");
    if (email_field.value.trim() != "") {
      return;
    }
    email_field.classList.remove("active");
  });
}

function formValidation() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email_field.value.trim() === "") {
    email_field.classList.add("failed");
    warning.textContent = `${label.textContent} should not be empty`;
  } 
  else if (!regex.test(email_field.value.trim())) {
    email_field.classList.add("failed");
    warning.textContent = `Please enter a valid email`;
  }
  events();
}

submit.addEventListener("click", formValidation, false);

events();
