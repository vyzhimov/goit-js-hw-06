const input = document.getElementById("validation-input");
const minLength = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  if (input.value.length <= minLength) {
    input.classList.add("invalid"), input.classList.remove("valid");
  } else {
    input.classList.add("valid"), input.classList.remove("invalid");
  }
});
