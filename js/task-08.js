const form = document.querySelector(".login-form");
const inputEmail = form.elements[0];
const inputPassword = form.elements[1];

const userLogin = {
  email: "",
  password: "",

  setEmail(mail) {
    return (this.email = mail);
  },

  setPassword(password) {
    return (this.password = password);
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Необхідно заповнити всі поля");
  }
  userLogin.setEmail(inputEmail.value);
  userLogin.setPassword(inputPassword.value);
  form.reset();
  console.log(`email: ${userLogin.email}`);
  console.log(`password: ${userLogin.password}`);
});
