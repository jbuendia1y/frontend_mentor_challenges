import "./src/scss/styles.scss";

const form = document.getElementsByClassName("form")[0];
const input = form.querySelector(".form__input");
const button = form.querySelector(".form__button");

let contError = 0;

const viewError = (input) => {
  input.nextElementSibling.classList.add("active");
  input.classList.add("alert-input");
};

const hideError = (input) => {
  input.nextElementSibling.classList.remove("active");
  input.classList.remove("alert-input");
};

const validateInput = () => {
  if (input.value == null || input.value == "") {
    viewError(input);
    contError = 0;
  } else if (input.value !== null && input.value !== "") {
    validateEmail(input);
  }
};

const validateEmail = (input) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(input.value)) {
    viewError(input);
  } else {
    hideError(input);
    contError++;
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();

  validateInput();

  if (contError > 0) {
    form.submit();
  }
});
