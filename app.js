const formContainer = document.querySelector(".container");
const successContainer = document.querySelector(".container-success");
const dismissBtn = successContainer.children[1];
const confirmationTextEmail =
  successContainer.children[0].children[2].children[0];
const emailForm = document.forms[0];
const emailInput = document.querySelector("[name=email]");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailRequired = document.querySelector(".email-required");
console.log(emailInput);

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value;
  if (emailValue === "" || !emailRegex.test(emailValue)) {
    emailInput.classList.add("border-red-600", "text-red-600");
    emailRequired.classList.remove("hidden");
  } else {
    formContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    confirmationTextEmail.textContent = emailValue;
  }
});
emailInput.addEventListener("input", () => {
  emailInput.classList.remove("border-red-600", "text-red-600");
  emailRequired.classList.add("hidden");
});

dismissBtn.addEventListener("click", (e) => {
  formContainer.classList.remove("hidden");
  successContainer.classList.add("hidden");
  emailInput.value = "";
});
